import { Link } from '@inertiajs/react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { login } from '@/routes';
import { A, nav } from './content';
import { cx, focusRing } from './glass';
import { useActiveSection, useTheme } from './use-site';

const ids = nav.map((n) => n.id);

export function SiteHeader() {
    const [open, setOpen] = useState(false);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const reduce = useReducedMotion();
    const active = useActiveSection(ids);
    const { dark, toggle } = useTheme();

    useEffect(() => {
        if (!open) {
            return;
        }

        const onKeyDown = (event: KeyboardEvent): void => {
            if (event.key === 'Escape') {
                setOpen(false);
                menuButtonRef.current?.focus();
            }
        };

        window.addEventListener('keydown', onKeyDown);

        return () => window.removeEventListener('keydown', onKeyDown);
    }, [open]);

    return (
        <header className="sticky top-0 z-50 border-b border-white/40 bg-white/65 backdrop-blur-xl dark:border-white/10 dark:bg-emerald-950/60">
            {/* GSAP-driven reading progress */}
            <div
                data-progress
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-amber-500"
            />

            <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3 md:px-6">
                <a
                    href="#home"
                    className={cx(
                        'flex items-center gap-3 rounded-lg',
                        focusRing,
                    )}
                >
                    <img
                        src={`${A}/portrait.jpg`}
                        alt=""
                        width={44}
                        height={44}
                        className="h-11 w-11 rounded-full border border-white/60 object-cover"
                    />
                    <span className="leading-tight">
                        <span className="block font-serif text-sm font-semibold text-stone-900 md:text-base dark:text-stone-50">
                            Dr. Sunsila Jabrin Priyanka
                        </span>
                        <span className="block text-xs text-stone-600 dark:text-stone-300">
                            Member of Parliament, Sherpur–1
                        </span>
                    </span>
                </a>

                <nav
                    aria-label="Primary"
                    className="hidden items-center gap-1 lg:flex"
                >
                    {nav.map(({ id, label }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            aria-current={
                                active === id ? 'location' : undefined
                            }
                            className={cx(
                                'relative isolate rounded-full px-3 py-2 text-sm font-medium transition-colors',
                                active === id
                                    ? 'text-emerald-900 dark:text-amber-300'
                                    : 'text-stone-600 hover:text-emerald-900 dark:text-stone-300 dark:hover:text-white',
                                focusRing,
                            )}
                        >
                            {active === id && (
                                <motion.span
                                    layoutId="nav-pill"
                                    className="absolute inset-0 -z-10 rounded-full bg-emerald-900/10 dark:bg-white/10"
                                    transition={{
                                        type: 'spring',
                                        stiffness: 400,
                                        damping: 34,
                                    }}
                                />
                            )}
                            {label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={toggle}
                        aria-label={
                            dark
                                ? 'Switch to light mode'
                                : 'Switch to dark mode'
                        }
                        className={cx(
                            'grid h-10 w-10 place-items-center rounded-full text-emerald-900 transition hover:bg-emerald-900/10 dark:text-amber-300 dark:hover:bg-white/10',
                            focusRing,
                        )}
                    >
                        {dark ? (
                            <Sun className="h-5 w-5" aria-hidden />
                        ) : (
                            <Moon className="h-5 w-5" aria-hidden />
                        )}
                    </button>
                    <Link
                        href={login()}
                        className={cx(
                            'hidden h-10 items-center rounded-full border border-emerald-800 px-5 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-50 md:inline-flex dark:border-emerald-400 dark:text-emerald-200 dark:hover:bg-white/10',
                            focusRing,
                        )}
                    >
                        Login
                    </Link>
                    <a
                        href="#contact"
                        className={cx(
                            'hidden h-10 items-center rounded-full bg-emerald-800 px-5 text-sm font-semibold text-white transition hover:bg-emerald-950 md:inline-flex',
                            focusRing,
                        )}
                    >
                        Contact Office
                    </a>
                    <button
                        ref={menuButtonRef}
                        type="button"
                        onClick={() => setOpen((o) => !o)}
                        aria-label={
                            open ? 'Close navigation' : 'Open navigation'
                        }
                        aria-expanded={open}
                        aria-controls="mobile-nav"
                        className={cx(
                            'grid h-10 w-10 place-items-center rounded-full text-emerald-950 lg:hidden dark:text-white',
                            focusRing,
                        )}
                    >
                        {open ? (
                            <X className="h-5 w-5" aria-hidden />
                        ) : (
                            <Menu className="h-5 w-5" aria-hidden />
                        )}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.nav
                        id="mobile-nav"
                        aria-label="Mobile"
                        initial={reduce ? false : { opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduce ? undefined : { opacity: 0, y: -8 }}
                        transition={{ duration: reduce ? 0 : 0.2 }}
                        className="border-t border-white/40 px-5 py-3 lg:hidden dark:border-white/10"
                    >
                        <div className="container mx-auto flex flex-col">
                            {nav.map(({ id, label }) => (
                                <a
                                    key={id}
                                    href={`#${id}`}
                                    onClick={() => setOpen(false)}
                                    className={cx(
                                        'rounded-lg px-2 py-3 text-base',
                                        active === id
                                            ? 'font-semibold text-emerald-900 dark:text-amber-300'
                                            : 'text-stone-700 dark:text-stone-200',
                                        focusRing,
                                    )}
                                >
                                    {label}
                                </a>
                            ))}
                            <Link
                                href={login()}
                                onClick={() => setOpen(false)}
                                className={cx(
                                    'rounded-lg px-2 py-3 text-base text-stone-700 dark:text-stone-200',
                                    focusRing,
                                )}
                            >
                                Login
                            </Link>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
