import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useState } from 'react';
import type { RefObject } from 'react';
import { useAppearance } from '@/hooks/use-appearance';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

/** Uses the application's shared appearance store and persistence behavior. */
export function useTheme(): { dark: boolean; toggle: () => void } {
    const { resolvedAppearance, updateAppearance } = useAppearance();
    const dark = resolvedAppearance === 'dark';

    const toggle = (): void => {
        updateAppearance(dark ? 'light' : 'dark');
    };

    return { dark, toggle };
}

/** Tracks which section is under the middle of the viewport. */
export function useActiveSection(ids: readonly string[]): string | undefined {
    const [active, setActive] = useState(ids[0]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { rootMargin: '-45% 0px -50% 0px' },
        );

        ids.forEach((id) => {
            const element = document.getElementById(id);

            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [ids]);

    return active;
}

/**
 * GSAP owns only scroll-linked work, on elements marked with data attributes:
 *   [data-parallax="0.1"]  -> slow drift inside its parent
 *   [data-progress]        -> top reading-progress bar (scaleX 0 -> 1)
 * Motion owns everything else, so the two never animate the same element.
 * Skipped entirely under prefers-reduced-motion; fully reverted on unmount.
 */
export function useScrollEffects(scope: RefObject<HTMLElement | null>) {
    useEffect(() => {
        const root = scope.current;

        if (!root) {
            return;
        }

        const media = gsap.matchMedia(root);

        media.add('(prefers-reduced-motion: no-preference)', () => {
            gsap.utils
                .toArray<HTMLElement>('[data-parallax]', root)
                .forEach((el) => {
                    const configuredSpeed = Number(el.dataset.parallax);
                    const speed = Number.isFinite(configuredSpeed)
                        ? configuredSpeed
                        : 0.1;

                    gsap.to(el, {
                        yPercent: speed * 100,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: el.parentElement,
                            start: 'top top',
                            end: 'bottom top',
                            scrub: true,
                        },
                    });
                });

            const progress = root.querySelector<HTMLElement>('[data-progress]');

            if (progress) {
                gsap.to(progress, {
                    scaleX: 1,
                    ease: 'none',
                    scrollTrigger: { start: 0, end: 'max', scrub: 0.2 },
                });
            }
        });

        return () => media.revert();
    }, [scope]);
}
