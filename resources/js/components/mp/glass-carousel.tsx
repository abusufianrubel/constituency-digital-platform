import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useCallback, useState } from 'react';
import type { KeyboardEvent } from 'react';
import type { Initiative } from './content';
import { cx, focusRing } from './glass';

const SWIPE = 80;

const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
};

const arrow =
    'grid h-11 w-11 place-items-center rounded-full border border-white/50 bg-white/25 text-white backdrop-blur-md transition hover:bg-white/40 active:scale-95 ' +
    focusRing;

export function GlassCarousel({ items }: { items: readonly Initiative[] }) {
    const [[index, dir], setState] = useState<[number, number]>([0, 0]);
    const reduce = useReducedMotion();
    const safeIndex = items.length === 0 ? 0 : index % items.length;
    const item = items[safeIndex];

    const step = useCallback(
        (n: number) =>
            setState(([c]) => [(c + n + items.length) % items.length, n]),
        [items.length],
    );
    const jump = (nextIndex: number): void => {
        setState([nextIndex, nextIndex > safeIndex ? 1 : -1]);
    };

    const onKey = (event: KeyboardEvent<HTMLElement>): void => {
        if (event.key === 'ArrowRight') {
            event.preventDefault();
            step(1);
        }

        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            step(-1);
        }
    };

    if (!item) {
        return (
            <section
                aria-label="Public-service initiatives"
                className="grid min-h-64 place-items-center rounded-3xl bg-emerald-950 p-6 text-center text-emerald-50"
            >
                <p>No initiatives are available at this time.</p>
            </section>
        );
    }

    return (
        <section
            aria-roledescription="carousel"
            aria-label="Public-service initiatives"
            onKeyDown={onKey}
            tabIndex={0}
            className="relative overflow-hidden rounded-3xl bg-emerald-950 shadow-xl"
        >
            {/* Fixed aspect ratio: no layout shift between slides */}
            <div className="relative aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9]">
                <AnimatePresence initial={false} custom={dir} mode="popLayout">
                    <motion.div
                        key={safeIndex}
                        role="group"
                        aria-roledescription="slide"
                        aria-label={`${safeIndex + 1} of ${items.length}`}
                        custom={dir}
                        variants={variants}
                        initial={reduce ? false : 'enter'}
                        animate="center"
                        exit={reduce ? undefined : 'exit'}
                        transition={{
                            duration: reduce ? 0 : 0.45,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        drag={reduce ? false : 'x'}
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.18}
                        onDragEnd={(_, { offset }) => {
                            if (offset.x < -SWIPE) {
                                step(1);
                            } else if (offset.x > SWIPE) {
                                step(-1);
                            }
                        }}
                        className="absolute inset-0 cursor-grab touch-pan-y active:cursor-grabbing"
                    >
                        <img
                            src={item.image}
                            alt=""
                            draggable={false}
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-emerald-950/80 via-emerald-950/10 to-transparent" />

                        <div className="absolute right-4 bottom-20 left-4 max-w-md rounded-2xl border border-white/30 bg-white/15 p-5 text-white shadow-lg backdrop-blur-xl sm:bottom-6 sm:left-6">
                            <span className="inline-block rounded-full bg-amber-400 px-2.5 py-0.5 text-xs font-semibold text-stone-900">
                                {item.status}
                            </span>
                            <h3 className="mt-3 font-serif text-2xl font-semibold">
                                {item.title}
                            </h3>
                            <p className="mt-1 flex items-center gap-1 text-sm text-emerald-50/90">
                                <MapPin className="h-3.5 w-3.5" aria-hidden />
                                {item.category}, {item.location}
                            </p>
                            <p className="mt-3 text-sm leading-6 text-emerald-50/90">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Controls */}
                {items.length > 1 && (
                    <div className="absolute right-4 bottom-4 z-10 flex items-center gap-3 sm:right-6">
                        <div className="flex gap-1.5">
                            {items.map((it, i) => (
                                <button
                                    key={it.title}
                                    type="button"
                                    onClick={() => jump(i)}
                                    aria-label={`Show slide ${i + 1}: ${it.title}`}
                                    aria-current={i === safeIndex}
                                    className={cx(
                                        'h-2 rounded-full transition-all',
                                        i === safeIndex
                                            ? 'w-6 bg-amber-400'
                                            : 'w-2 bg-white/60 hover:bg-white',
                                        focusRing,
                                    )}
                                />
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={() => step(-1)}
                            aria-label="Previous slide"
                            className={arrow}
                        >
                            <ChevronLeft className="h-5 w-5" aria-hidden />
                        </button>
                        <button
                            type="button"
                            onClick={() => step(1)}
                            aria-label="Next slide"
                            className={arrow}
                        >
                            <ChevronRight className="h-5 w-5" aria-hidden />
                        </button>
                    </div>
                )}
            </div>

            <p className="sr-only" aria-live="polite" aria-atomic="true">
                Slide {safeIndex + 1} of {items.length}: {item.title}
            </p>
        </section>
    );
}
