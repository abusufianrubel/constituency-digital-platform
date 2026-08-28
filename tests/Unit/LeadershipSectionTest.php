<?php

test('the welcome page includes the cinematic motion system and required sections', function () {
    $welcomePage = file_get_contents(
        dirname(__DIR__, 2).'/resources/js/pages/welcome.tsx',
    );

    expect($welcomePage)
        ->toContain("from 'motion/react'")
        ->toContain('useScroll')
        ->toContain('useTransform')
        ->toContain('useReducedMotion')
        ->toContain('heroSlides')
        ->toContain('constituency-river.jpg')
        ->toContain('constituency-field.jpg')
        ->toContain('community-1.jpg')
        ->toContain('community-4.jpg')
        ->toContain('setInterval')
        ->toContain('isHeroHovered')
        ->toContain('backgroundParallax')
        ->toContain('<AnimatePresence initial={false}>')
        ->toContain('from-stone-50/95')
        ->toContain('to-stone-950/55')
        ->not->toContain('Transparent, responsive, accountable.')
        ->toContain('fadeUp')
        ->toContain('slideLeft')
        ->toContain('slideRight')
        ->toContain('slideUp')
        ->toContain('scaleIn')
        ->toContain('staggerContainer')
        ->toContain('overflow-x-clip')
        ->toContain('reducedMotion="user"')
        ->toContain('Public service designed around real life.')
        ->toContain('Work you can see. Outcomes you can feel.')
        ->toContain('Listen. Design. Deliver.')
        ->toContain('Dr. Sunsila Jabrin Priyanka is a physician, politician, and public representative dedicated to serving the people of Sherpur through grassroots engagement and public service.')
        ->toContain('Political Identity')
        ->toContain('Bangladesh Nationalist Party (BNP)')
        ->toContain('Sherpur-1')
        ->toContain('Member of Parliament')
        ->toContain('Healthcare, Education, Women’s Empowerment & Local Development')
        ->toContain('Our Inspiring Leadership Throughout History')
        ->toContain('Shaheed President Ziaur Rahman')
        ->toContain('Begum Khaleda Zia')
        ->toContain('Tarique Rahman')
        ->and(dirname(__DIR__, 2).'/public/images/mp/leader-ziaur-rahman.jpg')
        ->toBeFile()
        ->and(dirname(__DIR__, 2).'/public/images/mp/leader-khaleda-zia.jpg')
        ->toBeFile()
        ->and(dirname(__DIR__, 2).'/public/images/mp/leader-tarique-rahman.jpg')
        ->toBeFile();
});

test('the landing page keeps its responsive accessible narrative in the required order', function () {
    $welcomePage = file_get_contents(
        dirname(__DIR__, 2).'/resources/js/pages/welcome.tsx',
    );

    $sectionMarkers = [
        "<Navbar\n",
        '<Hero t={t} />',
        'data-section="trust"',
        'data-section="features"',
        'data-section="bento"',
        'data-section="about"',
        'data-section="process"',
        'data-section="stats"',
        'data-section="testimonials"',
        'data-section="leadership"',
        'data-section="cta"',
        '<footer',
    ];

    $sectionPositions = array_map(
        fn (string $marker): int|false => strpos($welcomePage, $marker),
        $sectionMarkers,
    );

    expect($sectionPositions)->each->toBeInt();
    expect($sectionPositions)->toEqual(
        collect($sectionPositions)->sort()->values()->all(),
    );
    expect($welcomePage)
        ->toContain("matchMedia('(min-width: 1024px)')")
        ->toContain('md:grid-cols-2')
        ->toContain('lg:grid-cols-3')
        ->toContain('md:grid-cols-12')
        ->toContain('aria-expanded={menuOpen}')
        ->toContain('aria-controls="mobile-navigation"')
        ->toContain('<AnimatePresence>')
        ->toContain('setScrolled(latest > 28)')
        ->toContain('motion-reduce:transition-none')
        ->toContain('loading="lazy"')
        ->toContain('fetchPriority="high"');
});

test('the navbar provides persisted accessible theme and language controls', function () {
    $welcomePage = file_get_contents(
        dirname(__DIR__, 2).'/resources/js/pages/welcome.tsx',
    );
    $appearanceHook = file_get_contents(
        dirname(__DIR__, 2).'/resources/js/hooks/use-appearance.tsx',
    );

    expect($welcomePage)
        ->toContain('function NavbarControls')
        ->toContain('useAppearance()')
        ->toContain("updateAppearance(isDark ? 'light' : 'dark')")
        ->toContain('<Moon')
        ->toContain('<Sun')
        ->toContain("language === 'en' ? 'EN' : 'বাং'")
        ->toContain("window.localStorage.getItem('language')")
        ->toContain("window.localStorage.setItem('language', nextLanguage)")
        ->toContain('document.documentElement.lang = language')
        ->toContain('banglaTranslations')
        ->toContain('Theme and language controls')
        ->toContain('aria-label=')
        ->toContain('whileTap={{ scale: 0.92 }}')
        ->toContain('dark:bg-stone-950')
        ->toContain('dark:bg-stone-900')
        ->toContain('font-bangla')
        ->and($appearanceHook)
        ->toContain("localStorage.getItem('appearance')")
        ->toContain("window.matchMedia('(prefers-color-scheme: dark)')")
        ->toContain("document.documentElement.classList.toggle('dark', isDark)");
});

test('the primary navigation and hero use the final login and contact actions', function () {
    $welcomePage = file_get_contents(
        dirname(__DIR__, 2).'/resources/js/pages/welcome.tsx',
    );

    expect($welcomePage)
        ->toContain("import { login } from '@/routes'")
        ->toContain('href={login()}')
        ->toContain("{t('Login')}")
        ->toContain('href="#contact"')
        ->toContain("{t('Contact Office')}")
        ->toContain('prefetch')
        ->not->toContain("{t('Explore work')}")
        ->not->toContain("{t('Meet your representative')}");
});

test('the footer provides responsive institutional navigation and contact details', function () {
    $welcomePage = file_get_contents(
        dirname(__DIR__, 2).'/resources/js/pages/welcome.tsx',
    );

    expect($welcomePage)
        ->toContain('const quickLinks')
        ->toContain('const importantLinks')
        ->toContain('const socialLinks')
        ->toContain('Honorable Member of Parliament')
        ->toContain('Reserved Women’s Seat | Sherpur-1')
        ->toContain('Dedicated to transparent, inclusive public service')
        ->toContain('Quick Links')
        ->toContain('Important Links')
        ->toContain('Contact Information')
        ->toContain('Office hours · Sun–Thu')
        ->toContain('Privacy Policy')
        ->toContain('Terms & Conditions')
        ->toContain('Back to top')
        ->toContain('md:grid-cols-2')
        ->toContain('xl:grid-cols-4')
        ->toContain('whileHover={{ y: -3, scale: 1.08 }}')
        ->toContain('focus-visible:ring-2');
});
