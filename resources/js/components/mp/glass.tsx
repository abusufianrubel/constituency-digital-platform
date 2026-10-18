import { motion, useReducedMotion } from 'motion/react';
import type { ElementType, ReactNode } from 'react';

export const cx = (...c: Array<string | false | undefined>) =>
    c.filter(Boolean).join(' ');

export const focusRing =
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500';

/** Frosted surface. Solid-ish fallback tint keeps text readable if blur is unsupported. */
export function GlassCard({
    as: Tag = 'div',
    className,
    children,
}: {
    as?: ElementType;
    className?: string;
    children: ReactNode;
}) {
    return (
        <Tag
            className={cx(
                'rounded-2xl border border-white/60 bg-white/70 shadow-[0_10px_40px_-18px_rgba(6,78,59,0.45)] backdrop-blur-xl',
                'dark:border-white/10 dark:bg-emerald-950/60 dark:shadow-black/50',
                className,
            )}
        >
            {children}
        </Tag>
    );
}

/** Motion-driven entrance. Transform + opacity only; skipped for reduced motion. */
export function Reveal({
    children,
    delay = 0,
    className,
}: {
    children: ReactNode;
    delay?: number;
    className?: string;
}) {
    const reduce = useReducedMotion();

    return (
        <motion.div
            className={className}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}

export function SectionHeading({
    id,
    title,
    intro,
}: {
    id?: string;
    title: string;
    intro?: string;
}) {
    return (
        <Reveal className="mb-8 max-w-2xl">
            <h2
                id={id}
                className="font-serif text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl dark:text-stone-50"
            >
                {title}
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-amber-500" />
            {intro && (
                <p className="mt-4 text-base leading-7 text-stone-600 dark:text-stone-300">
                    {intro}
                </p>
            )}
        </Reveal>
    );
}
