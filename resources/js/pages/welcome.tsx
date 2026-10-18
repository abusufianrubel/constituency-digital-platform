// import { Head } from '@inertiajs/react';
// import {
//     ArrowRight,
//     Building2,
//     // CalendarDays,
//     // CheckCircle2,
//     ChevronRight,
//     GraduationCap,
//     HeartPulse,
//     Landmark,
//     Leaf,
//     MapPin,
//     Menu,
//     MessageCircle,
//     Newspaper,
//     Quote,
//     Scale,
//     ShieldCheck,
//     Sparkles,
//     Users,
//     X,
// } from 'lucide-react';
// import { useState } from 'react';

// /**
//  * Welcome.tsx
//  * ------------------------------------------------------------------
//  * Premium MP / Constituency landing page.
//  *
//  * Design direction:
//  * - Match the supplied reference image: editorial government/civic UI.
//  * - Forest green + warm ivory + muted gold palette.
//  * - Serif display headings + clean sans-serif body copy.
//  * - Dense but spacious information hierarchy.
//  *
//  * Image assets expected in:
//  * public/images/mp/
//  *
//  * Recommended files:
//  * hero.jpg
//  * portrait.jpg
//  * constituency-river.jpg
//  * constituency-field.jpg
//  * community-1.jpg ... community-5.jpg
//  * initiative-1.jpg ... initiative-4.jpg
//  * map.png
//  */

// const A = '/images/mp';

// const initiatives = [
//     {
//         status: 'Completed',
//         image: `${A}/initiative-1.jpg`,
//         category: 'Education',
//         title: 'School Infrastructure Support',
//         location: 'Sherpur Sadar',
//         description:
//             'Upgrading school facilities to create better learning environments.',
//     },
//     {
//         status: 'Ongoing',
//         image: `${A}/initiative-2.jpg`,
//         category: 'Community Health',
//         title: 'Community Health Support',
//         location: 'Nalitabari',
//         description:
//             'Supporting local health centers and health awareness programs.',
//     },
//     {
//         status: 'Ongoing',
//         image: `${A}/initiative-3.jpg`,
//         category: 'Infrastructure',
//         title: 'Rural Road Improvement',
//         location: 'Jhenaigati',
//         description:
//             'Improving rural connectivity and transportation infrastructure.',
//     },
//     {
//         status: 'Planned',
//         image: `${A}/initiative-4.jpg`,
//         category: 'Youth',
//         title: 'Youth Skills Development',
//         location: 'Nakla',
//         description:
//             'Creating opportunities through skills training and development.',
//     },
// ];

// const priorities = [
//     {
//         icon: GraduationCap,
//         title: 'Education',
//         text: 'Quality education for every child',
//     },
//     {
//         icon: HeartPulse,
//         title: 'Healthcare',
//         text: 'Accessible healthcare for all',
//     },
//     {
//         icon: Building2,
//         title: 'Infrastructure',
//         text: 'Roads, bridges & modern facilities',
//     },
//     {
//         icon: Users,
//         title: 'Youth & Employment',
//         text: 'Skills, jobs & youth empowerment',
//     },
//     {
//         icon: Leaf,
//         title: 'Agriculture',
//         text: 'Supporting farmers and rural growth',
//     },
//     {
//         icon: Sparkles,
//         title: 'Social Welfare',
//         text: 'Care, inclusion & social protection',
//     },
// ];

// const updates = [
//     {
//         tag: 'Parliament',
//         date: 'May 20, 2024',
//         title: 'Discussion on Rural Development in Parliament',
//         text: 'Highlighted key issues and proposed solutions for rural development.',
//     },
//     {
//         tag: 'Constituency',
//         date: 'May 15, 2024',
//         title: 'Visited Flood Affected Areas in Nalitabari',
//         text: 'Met with affected families and assured all possible support.',
//     },
//     {
//         tag: 'Development',
//         date: 'May 10, 2024',
//         title: 'New Road Project Approved for Jhenaigati',
//         text: 'A major step towards better connectivity and growth.',
//     },
//     {
//         tag: 'Community',
//         date: 'May 05, 2024',
//         title: 'Youth Meeting & Open Discussion',
//         text: 'Listening to the aspirations and ideas of young people.',
//     },
// ];

// const gallery = [
//     `${A}/community-1.jpg`,
//     `${A}/community-2.jpg`,
//     `${A}/community-3.jpg`,
//     `${A}/community-4.jpg`,
//     `${A}/community-5.jpg`,
// ];

// const leaders = [
//     {
//         name: 'Shaheed President Ziaur Rahman',
//         image: `${A}/leader-ziaur-rahman.jpg`,
//         entrance: 'animate-leader-from-left',
//     },
//     {
//         name: 'Begum Khaleda Zia',
//         image: `${A}/leader-khaleda-zia.jpg`,
//         entrance: 'animate-leader-from-bottom',
//     },
//     {
//         name: 'Tarique Rahman',
//         image: `${A}/leader-tarique-rahman.jpg`,
//         entrance: 'animate-leader-from-right',
//     },
// ];

// function SectionTitle({
//     eyebrow,
//     title,
//     action,
// }: {
//     eyebrow?: string;
//     title: string;
//     action?: string;
// }) {
//     return (
//         <div className="mb-6 flex items-end justify-between gap-4">
//             <div>
//                 {eyebrow && (
//                     <p className="mb-1 text-xs font-semibold tracking-[0.22em] text-emerald-800 uppercase">
//                         {eyebrow}
//                     </p>
//                 )}
//                 <h2 className="font-serif text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
//                     {title}
//                 </h2>
//                 <div className="mt-2 h-0.5 w-12 bg-amber-500" />
//             </div>

//             {action && (
//                 <button className="hidden items-center gap-1 text-sm font-medium text-emerald-900 transition hover:text-amber-600 sm:flex">
//                     {action}
//                     <ArrowRight className="h-4 w-4" />
//                 </button>
//             )}
//         </div>
//     );
// }

// function Stat({
//     icon: Icon,
//     title,
//     value,
//     description,
// }: {
//     icon: typeof Landmark;
//     title: string;
//     value: string;
//     description: string;
// }) {
//     return (
//         <div className="flex items-center gap-4 border-stone-200 px-5 py-4 first:border-l-0 md:border-l">
//             <Icon className="h-9 w-9 shrink-0 stroke-[1.3] text-emerald-900" />
//             <div>
//                 <p className="text-xs tracking-wider text-stone-500 uppercase">
//                     {title}
//                 </p>
//                 <p className="font-serif text-xl text-stone-900">{value}</p>
//                 <p className="text-xs text-stone-500">{description}</p>
//             </div>
//         </div>
//     );
// }

// export default function Welcome() {
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <>
//             <Head title="Dr. Sunsila Jabrin Priyanka — Sherpur-1 Constituency" />

//             <div className="min-h-screen bg-[#f8f7f2] text-stone-800">
//                 {/* Header */}
//                 <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
//                     {/* <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6"> */}
//                     <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6">
//                         <a href="#" className="flex items-center gap-3">
//                             <div className="h-11 w-11 overflow-hidden rounded-full border border-stone-200 bg-stone-100">
//                                 <img
//                                     src={`${A}/portrait.jpg`}
//                                     alt="Dr. Sunsila Jabrin Priyanka"
//                                     className="h-full w-full object-cover"
//                                 />
//                             </div>
//                             <div className="leading-tight">
//                                 <p className="font-serif text-sm font-semibold text-stone-900 md:text-base">
//                                     Dr. Sunsila Jabrin Priyanka
//                                 </p>
//                                 <p className="text-xs text-stone-500">
//                                     Member of Parliament
//                                 </p>
//                                 <p className="text-xs text-stone-700">
//                                     Sherpur–1 Constituency
//                                 </p>
//                             </div>
//                         </a>

//                         <nav className="hidden items-center gap-7 md:gap-3 lg:flex">
//                             {[
//                                 'Home',
//                                 'About',
//                                 'Constituency',
//                                 // 'Parliamentary Work',
//                                 'Initiatives',
//                                 'News',
//                                 'Gallery',
//                                 'Contact',
//                             ].map((item, index) => (
//                                 <a
//                                     key={item}
//                                     href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
//                                     className={`relative py-2 text-sm font-medium transition ${
//                                         index === 0
//                                             ? 'text-emerald-900'
//                                             : 'text-stone-600 hover:text-emerald-900'
//                                     }`}
//                                 >
//                                     {item}
//                                     {index === 0 && (
//                                         <span className="absolute inset-x-0 -bottom-0.5 mx-auto h-0.5 w-1.5 bg-emerald-900" />
//                                     )}
//                                 </a>
//                             ))}
//                         </nav>

//                         <div className="hidden items-center gap-3 md:flex">
//                             {/* Login */}
//                             <a
//                                 href="/login"
//                                 className="inline-flex h-10 items-center justify-center rounded-full border border-emerald-800 px-5 text-sm font-semibold text-emerald-900 transition-all duration-300 hover:scale-105 hover:bg-emerald-50"
//                             >
//                                 Login
//                             </a>

//                             {/* Contact Office */}
//                             <a
//                                 href="#contact"
//                                 className="inline-flex h-10 items-center justify-center rounded-full bg-emerald-800 px-5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-emerald-950 hover:shadow-lg hover:shadow-emerald-950/20"
//                             >
//                                 Contact Office
//                             </a>
//                         </div>

//                         <button
//                             onClick={() => setMenuOpen(!menuOpen)}
//                             className="rounded-md p-2 text-emerald-950 lg:hidden"
//                             aria-label="Toggle navigation"
//                         >
//                             {menuOpen ? (
//                                 <X className="h-5 w-5" />
//                             ) : (
//                                 <Menu className="h-5 w-5" />
//                             )}
//                         </button>
//                     </div>

//                     {menuOpen && (
//                         <nav className="border-t border-stone-200 bg-white px-5 py-4 lg:hidden">
//                             <div className="container mx-auto flex flex-col gap-3">
//                                 {[
//                                     'Home',
//                                     'About',
//                                     'Constituency',
//                                     'Parliamentary Work',
//                                     'Initiatives',
//                                     'News',
//                                     'Gallery',
//                                     'Contact',
//                                 ].map((item) => (
//                                     <a
//                                         key={item}
//                                         href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
//                                         onClick={() => setMenuOpen(false)}
//                                         className="py-1 text-sm text-stone-700"
//                                     >
//                                         {item}
//                                     </a>
//                                 ))}
//                             </div>
//                         </nav>
//                     )}
//                 </header>

//                 {/* Hero */}
//                 <section
//                     id="home"
//                     className="relative overflow-hidden bg-emerald-950"
//                 >
//                     {/* Background Video */}
//                     <div className="absolute inset-0">
//                         <video
//                             autoPlay
//                             muted
//                             loop
//                             playsInline
//                             preload="metadata"
//                             className="h-full w-full object-cover"
//                         >
//                             <source src={`${A}/hero.mp4`} type="video/mp4" />
//                         </video>

//                         {/* Dark Overlay */}
//                         <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/75 to-emerald-950/50" />
//                     </div>

//                     <div className="relative container mx-auto grid min-h-[75vh] items-center px-4 md:px-6 lg:grid-cols-12">
//                         <div className="z-10 py-16 lg:col-span-6 lg:py-20">
//                             <p className="mb-3 text-sm font-medium tracking-wide text-amber-400">
//                                 Sherpur–1 Constituency
//                             </p>

//                             <h1 className="max-w-xl font-serif text-4xl leading-[0.98] font-semibold text-white sm:text-5xl md:text-6xl">
//                                 Dr. Sunsila Jabrin
//                                 <br />
//                                 Priyanka
//                             </h1>

//                             <p className="mt-4 font-serif text-xl text-amber-400 md:text-2xl">
//                                 Member of Parliament — Sherpur–1
//                             </p>

//                             <p className="mt-5 max-w-md text-sm leading-6 text-stone-200">
//                                 Serving the people of Sherpur–1 with
//                                 responsibility, accessibility and a commitment
//                                 to meaningful progress.
//                             </p>

//                             <div className="mt-7 flex flex-wrap gap-3">
//                                 <a
//                                     href="#contact"
//                                     className="inline-flex items-center gap-2 rounded-full border border-emerald-700 bg-emerald-900/80 px-5 py-3 text-xs font-semibold text-white transition-all duration-300 ease-out hover:scale-105 hover:bg-emerald-800"
//                                 >
//                                     <MessageCircle className="h-4 w-4" />
//                                     Contact Constituency Office
//                                 </a>

//                                 <a
//                                     href="#parliamentary-work"
//                                     className="inline-flex items-center gap-2 rounded-full border border-white/50 px-5 py-3 text-xs font-semibold text-white transition-all duration-300 ease-out hover:scale-105 hover:bg-white hover:text-emerald-950"
//                                 >
//                                     Explore My Work
//                                     <ArrowRight className="h-4 w-4" />
//                                 </a>
//                             </div>
//                         </div>

//                         {/* MP + Map */}
//                         <div className="relative hidden h-full lg:col-span-6 lg:block">
//                             <img
//                                 src={`${A}/map.png`}
//                                 alt="Sherpur-1 constituency map"
//                                 className="absolute top-1/2 left-0 h-auto w-96 -translate-y-1/2 opacity-70"
//                             />

//                             <img
//                                 src={`${A}/portrait.png`}
//                                 alt="Dr. Sunsila Jabrin Priyanka"
//                                 className="absolute right-3 bottom-0 z-10 max-h-[490px] max-w-none object-contain"
//                             />
//                         </div>
//                     </div>
//                 </section>

//                 {/* Stats */}
//                 <section className="relative z-20 container mx-auto -mt-1 px-4 md:-mt-10">
//                     <div className="grid overflow-hidden border border-stone-200 bg-white shadow-lg md:grid-cols-4">
//                         <Stat
//                             icon={Landmark}
//                             title="Parliamentary Service"
//                             value="00+"
//                             description="Sessions Attended"
//                         />
//                         <Stat
//                             icon={MapPin}
//                             title="Constituency"
//                             value="00+"
//                             description="Union Covered"
//                         />
//                         <Stat
//                             icon={Users}
//                             title="Public Initiatives"
//                             value="00+"
//                             description="Projects & Programs"
//                         />
//                         <Stat
//                             icon={ShieldCheck}
//                             title="Community Programs"
//                             value="00+"
//                             description="People Benefited"
//                         />
//                     </div>
//                 </section>

//                 <main>
//                     {/* Inspiring Leadership */}
//                     <section
//                         aria-labelledby="leadership-heading"
//                         className="container mx-auto px-4 pt-14 md:px-6 md:pt-16"
//                     >
//                         <div className="mb-7 md:mb-9">
//                             <p className="mb-1 text-xs font-semibold tracking-[0.22em] text-emerald-800 uppercase">
//                                 Our legacy
//                             </p>
//                             <h2
//                                 id="leadership-heading"
//                                 className="max-w-3xl font-serif text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl"
//                             >
//                                 Our Inspiring Leadership Throughout History
//                             </h2>
//                             <div className="mt-2 h-0.5 w-12 bg-amber-500" />
//                         </div>

//                         <div className="grid gap-5 md:grid-cols-3 md:gap-6">
//                             {leaders.map((leader) => (
//                                 <article
//                                     key={leader.name}
//                                     className={`${leader.entrance} group relative isolate overflow-hidden rounded-2xl bg-stone-900 shadow-[0_16px_38px_-20px_rgba(28,25,23,0.7)] ring-1 ring-stone-900/10 motion-reduce:animate-none`}
//                                 >
//                                     <img
//                                         src={leader.image}
//                                         alt={`Portrait of ${leader.name}`}
//                                         className="aspect-[4/5] w-full object-cover grayscale transition duration-700 ease-out group-focus-within:scale-105 group-focus-within:grayscale-0 group-hover:scale-105 group-hover:grayscale-0"
//                                     />
//                                     <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-stone-950/90 via-stone-950/5 to-transparent" />
//                                     <h3 className="absolute right-5 bottom-5 left-5 font-serif text-lg font-semibold text-white drop-shadow-sm md:text-xl">
//                                         {leader.name}
//                                     </h3>
//                                 </article>
//                             ))}
//                         </div>
//                     </section>

//                     {/* About */}
//                     <section
//                         id="about"
//                         className="container mx-auto px-4 py-14 md:px-6 md:py-16"
//                     >
//                         <div className="grid items-center gap-10 lg:grid-cols-12">
//                             <div className="lg:col-span-4">
//                                 <img
//                                     src={`${A}/portrait-office.jpg`}
//                                     alt="Dr. Sunsila Jabrin Priyanka at work"
//                                     className="aspect-[4/5] w-full object-cover"
//                                 />
//                             </div>

//                             <div className="lg:col-span-5">
//                                 <SectionTitle title="About Dr. Sunsila Jabrin Priyanka" />
//                                 <p className="text-sm leading-7 text-stone-600">
//                                     I am honoured to represent the people of
//                                     Sherpur–1 in the National Parliament of
//                                     Bangladesh. My journey in public life is
//                                     guided by a simple belief — politics is
//                                     about people, and service.
//                                 </p>

//                                 <div className="mt-6 space-y-3 text-xs text-stone-600">
//                                     <div className="flex gap-3">
//                                         <GraduationCap className="h-4 w-4 text-emerald-900" />
//                                         <span>
//                                             <strong className="text-stone-800">
//                                                 Education:
//                                             </strong>{' '}
//                                             Your Education Background
//                                         </span>
//                                     </div>
//                                     <div className="flex gap-3">
//                                         <Scale className="h-4 w-4 text-emerald-900" />
//                                         <span>
//                                             <strong className="text-stone-800">
//                                                 Profession:
//                                             </strong>{' '}
//                                             Your Professional Background
//                                         </span>
//                                     </div>
//                                     <div className="flex gap-3">
//                                         <Landmark className="h-4 w-4 text-emerald-900" />
//                                         <span>
//                                             <strong className="text-stone-800">
//                                                 Public Service Journey:
//                                             </strong>{' '}
//                                             Your Journey Highlights
//                                         </span>
//                                     </div>
//                                     <div className="flex gap-3">
//                                         <Users className="h-4 w-4 text-emerald-900" />
//                                         <span>
//                                             <strong className="text-stone-800">
//                                                 Leadership Philosophy:
//                                             </strong>{' '}
//                                             People first, always.
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="border-l border-stone-200 pl-7 lg:col-span-3">
//                                 <Quote className="h-8 w-8 text-emerald-900" />
//                                 <p className="mt-3 font-serif text-lg leading-7 text-stone-700 italic">
//                                     My commitment is to listen, to serve, and to
//                                     work together for a stronger, more
//                                     prosperous Sherpur–1.
//                                 </p>
//                                 <p className="mt-5 font-serif text-sm text-stone-600">
//                                     Dr. Sunsila Jabrin Priyanka
//                                 </p>
//                             </div>
//                         </div>
//                     </section>

//                     {/* Constituency */}
//                     <section
//                         id="constituency"
//                         className="border-y border-stone-200 bg-white"
//                     >
//                         <div className="container mx-auto px-4 py-14 md:px-6">
//                             <div className="grid items-center gap-8 lg:grid-cols-12">
//                                 <div className="lg:col-span-4">
//                                     <SectionTitle title="Serving Sherpur–1" />
//                                     <p className="text-sm leading-7 text-stone-600">
//                                         Sherpur–1 is rich in culture, natural
//                                         beauty and potential. Together, we can
//                                         build a brighter future for our
//                                         communities.
//                                     </p>

//                                     <div className="mt-7 grid grid-cols-3 border border-stone-200">
//                                         {[
//                                             [
//                                                 'Area Overview',
//                                                 'Rural & Riverine',
//                                             ],
//                                             ['Population', '00,000+'],
//                                             ['Unions', '00'],
//                                         ].map(([label, value]) => (
//                                             <div
//                                                 key={label}
//                                                 className="border-r border-stone-200 p-3 last:border-r-0"
//                                             >
//                                                 <Users className="h-5 w-5 text-emerald-900" />
//                                                 <p className="mt-2 text-xs text-stone-500">
//                                                     {label}
//                                                 </p>
//                                                 <p className="mt-0.5 text-xs font-semibold text-stone-800">
//                                                     {value}
//                                                 </p>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 <div className="flex justify-center lg:col-span-3">
//                                     <img
//                                         src={`${A}/map.png`}
//                                         alt="Map of Sherpur-1"
//                                         className="max-h-72 w-full object-contain"
//                                     />
//                                 </div>

//                                 <div className="grid gap-3 lg:col-span-5">
//                                     <img
//                                         src={`${A}/constituency-river.jpg`}
//                                         alt="River landscape of Sherpur"
//                                         className="h-40 w-full object-cover"
//                                     />
//                                     <div className="grid grid-cols-3 gap-3">
//                                         <img
//                                             src={`${A}/constituency-field.jpg`}
//                                             alt="Sherpur field"
//                                             className="h-24 w-full object-cover"
//                                         />
//                                         <img
//                                             src={`${A}/community-2.jpg`}
//                                             alt="Community"
//                                             className="h-24 w-full object-cover"
//                                         />
//                                         <img
//                                             src={`${A}/community-3.jpg`}
//                                             alt="Local community"
//                                             className="h-24 w-full object-cover"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>

//                     {/* Priorities */}
//                     <section className="container mx-auto px-4 py-12 md:px-6">
//                         <SectionTitle title="Constituency Priorities" />
//                         <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
//                             {priorities.map(({ icon: Icon, title, text }) => (
//                                 <div
//                                     key={title}
//                                     className="border border-stone-200 bg-white px-3 py-5 text-center transition hover:-translate-y-0.5 hover:shadow-md"
//                                 >
//                                     <Icon className="mx-auto h-8 w-8 stroke-[1.2] text-emerald-900" />
//                                     <h3 className="mt-3 font-serif text-sm font-semibold text-stone-800">
//                                         {title}
//                                     </h3>
//                                     <p className="mt-1 text-xs leading-4 text-stone-500">
//                                         {text}
//                                     </p>
//                                 </div>
//                             ))}
//                         </div>
//                     </section>

//                     {/* Parliamentary Work */}
//                     <section
//                         id="parliamentary-work"
//                         className="border-y border-stone-200 bg-white"
//                     >
//                         <div className="container mx-auto px-4 py-14 md:px-6">
//                             <SectionTitle title="Parliamentary Work" />

//                             <div className="grid gap-8 lg:grid-cols-4">
//                                 <div className="space-y-2">
//                                     {[
//                                         'Parliamentary Sessions',
//                                         'Questions',
//                                         'Speeches',
//                                         'Committee Work',
//                                         'Legislative Priorities',
//                                     ].map((item) => (
//                                         <div
//                                             key={item}
//                                             className="flex items-center gap-3 border-b border-stone-100 py-2.5"
//                                         >
//                                             <span className="grid h-6 w-6 place-items-center bg-emerald-950 text-xs text-white">
//                                                 ✓
//                                             </span>
//                                             <div>
//                                                 <p className="text-xs font-semibold text-stone-800">
//                                                     {item}
//                                                 </p>
//                                                 <p className="text-xs text-stone-500">
//                                                     Active participation
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>

//                                 <div className="lg:col-span-3">
//                                     <div className="relative mt-6 grid grid-cols-5">
//                                         <div className="absolute top-3 right-0 left-0 border-t border-emerald-900" />
//                                         {[
//                                             ['00', 'Sessions', 'Attended'],
//                                             ['00', 'Questions', 'Submitted'],
//                                             ['00', 'Speeches', 'Delivered'],
//                                             [
//                                                 '00',
//                                                 'Committee',
//                                                 'Contributions',
//                                             ],
//                                             [
//                                                 '00',
//                                                 'Bills & Motions',
//                                                 'Supported',
//                                             ],
//                                         ].map(([number, a, b]) => (
//                                             <div
//                                                 key={a}
//                                                 className="relative text-center"
//                                             >
//                                                 <span className="mx-auto block h-3 w-3 rounded-full border-2 border-white bg-emerald-950 ring-1 ring-stone-300" />
//                                                 <p className="mt-2 font-serif text-sm font-semibold text-stone-900">
//                                                     {number}
//                                                 </p>
//                                                 <p className="mt-1 text-xs text-stone-500">
//                                                     {a}
//                                                     <br />
//                                                     {b}
//                                                 </p>
//                                             </div>
//                                         ))}
//                                     </div>

//                                     <div className="mt-8 flex items-end justify-between overflow-hidden bg-[#f3eee0] px-5 pt-5">
//                                         <div className="pb-5">
//                                             <p className="max-w-lg font-serif text-sm text-stone-700 italic">
//                                                 Working in Parliament to
//                                                 represent your voice, address
//                                                 national issues and support
//                                                 development.
//                                             </p>
//                                             <a
//                                                 href="#"
//                                                 className="mt-4 inline-flex items-center gap-2 bg-emerald-950 px-4 py-2 text-xs font-semibold text-white"
//                                             >
//                                                 View Parliamentary Work
//                                                 <ArrowRight className="h-3 w-3" />
//                                             </a>
//                                         </div>
//                                         <Landmark className="hidden h-24 w-28 text-stone-400/30 sm:block" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>

//                     {/* Initiatives */}
//                     <section
//                         id="initiatives"
//                         className="container mx-auto px-4 py-14 md:px-6"
//                     >
//                         <SectionTitle title="Public-Service Initiatives" />
//                         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//                             {initiatives.map((item) => (
//                                 <article
//                                     key={item.title}
//                                     className="overflow-hidden border border-stone-200 bg-white"
//                                 >
//                                     <div className="relative">
//                                         <img
//                                             src={item.image}
//                                             alt={item.title}
//                                             className="h-32 w-full object-cover"
//                                         />
//                                         <span className="absolute top-2 left-2 bg-amber-400 px-2 py-1 text-xs font-semibold text-stone-900">
//                                             {item.status}
//                                         </span>
//                                     </div>
//                                     <div className="p-4">
//                                         <p className="text-xs font-semibold tracking-wider text-emerald-800 uppercase">
//                                             {item.category} · {item.location}
//                                         </p>
//                                         <h3 className="mt-2 font-serif text-base font-semibold text-stone-900">
//                                             {item.title}
//                                         </h3>
//                                         <p className="mt-2 text-xs leading-5 text-stone-500">
//                                             {item.description}
//                                         </p>
//                                         <a
//                                             href="#"
//                                             className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-emerald-900"
//                                         >
//                                             View Details
//                                             <ArrowRight className="h-3 w-3" />
//                                         </a>
//                                     </div>
//                                 </article>
//                             ))}
//                         </div>
//                     </section>

//                     {/* Community */}
//                     <section
//                         id="gallery"
//                         className="border-y border-stone-200 bg-white"
//                     >
//                         <div className="container mx-auto grid gap-5 px-4 py-10 md:grid-cols-12 md:px-6">
//                             <div className="md:col-span-2">
//                                 <h2 className="font-serif text-xl leading-6 font-semibold text-stone-900">
//                                     Connected to
//                                     <br />
//                                     the Community
//                                 </h2>
//                                 <p className="mt-3 text-xs leading-5 text-stone-500">
//                                     Listening, engaging and working together
//                                     with the people of Sherpur–1 for meaningful
//                                     and sustainable progress.
//                                 </p>
//                                 <a
//                                     href="#"
//                                     className="mt-4 inline-flex items-center gap-2 bg-emerald-950 px-3 py-2 text-xs font-semibold text-white"
//                                 >
//                                     View Gallery
//                                     <ArrowRight className="h-3 w-3" />
//                                 </a>
//                             </div>

//                             <div className="grid grid-cols-2 gap-2 sm:grid-cols-5 md:col-span-10">
//                                 {gallery.map((src, index) => (
//                                     <img
//                                         key={src}
//                                         src={src}
//                                         alt={`Community engagement ${index + 1}`}
//                                         className={`h-32 w-full object-cover ${
//                                             index === 0 ? 'sm:col-span-1' : ''
//                                         }`}
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                     </section>

//                     {/* News */}
//                     <section
//                         id="news"
//                         className="container mx-auto px-4 py-12 md:px-6"
//                     >
//                         <SectionTitle
//                             title="Latest Updates"
//                             action="View All News"
//                         />
//                         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
//                             {updates.map((item) => (
//                                 <article
//                                     key={item.title}
//                                     className="border border-stone-200 bg-white p-4"
//                                 >
//                                     <div className="flex items-center justify-between gap-2">
//                                         <span className="bg-emerald-900 px-2 py-1 text-xs font-semibold text-white">
//                                             {item.tag}
//                                         </span>
//                                         <span className="text-xs text-stone-500">
//                                             {item.date}
//                                         </span>
//                                     </div>
//                                     <h3 className="mt-4 font-serif text-base leading-5 font-semibold text-stone-900">
//                                         {item.title}
//                                     </h3>
//                                     <p className="mt-2 text-xs leading-5 text-stone-500">
//                                         {item.text}
//                                     </p>
//                                     <a
//                                         href="#"
//                                         className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-emerald-900"
//                                     >
//                                         Read More
//                                         <ArrowRight className="h-3 w-3" />
//                                     </a>
//                                 </article>
//                             ))}
//                         </div>
//                     </section>

//                     {/* Accessibility / Information */}
//                     <section className="border-y border-stone-200 bg-white">
//                         <div className="container mx-auto grid md:grid-cols-4">
//                             {[
//                                 [
//                                     Landmark,
//                                     'Parliamentary Activity',
//                                     'View sessions, questions, speeches and more.',
//                                 ],
//                                 [
//                                     Sparkles,
//                                     'Public Initiatives',
//                                     'Track ongoing and completed initiatives.',
//                                 ],
//                                 [
//                                     Newspaper,
//                                     'Official Information',
//                                     'Access official updates and documents.',
//                                 ],
//                                 [
//                                     MapPin,
//                                     'Constituency Office',
//                                     'Find contact info and office details.',
//                                 ],
//                             ].map(([Icon, title, text]) => {
//                                 const IconComponent = Icon as typeof Landmark;

//                                 return (
//                                     <div
//                                         key={title as string}
//                                         className="flex gap-4 border-b border-stone-200 p-5 last:border-b-0 md:border-r md:border-b-0 md:last:border-r-0"
//                                     >
//                                         <IconComponent className="h-7 w-7 shrink-0 stroke-[1.2] text-emerald-900" />
//                                         <div>
//                                             <h3 className="text-xs font-semibold text-stone-800">
//                                                 {title as string}
//                                             </h3>
//                                             <p className="mt-1 text-xs leading-4 text-stone-500">
//                                                 {text as string}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </section>
//                 </main>

//                 {/* CTA + Footer Wrapper */}
//                 <div className="relative overflow-hidden bg-emerald-950">
//                     {/* ONE Shared Background Image */}
//                     <div className="absolute inset-0">
//                         <img
//                             src={`${A}/cta-bg.jpg`}
//                             alt=""
//                             className="h-full w-full object-cover opacity-30"
//                         />

//                         {/* Shared Dark Transparent Overlay */}
//                         <div className="absolute inset-0 bg-emerald-950/85" />
//                     </div>
//                     {/* CTA */}
//                     <section id="contact" className="relative">
//                         {/* <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/95 to-emerald-900/80" /> */}
//                         <div className="relative container mx-auto flex flex-col items-start justify-between gap-6 px-4 py-10 md:flex-row md:items-center md:px-6">
//                             <div>
//                                 <h2 className="font-serif text-2xl text-white">
//                                     Your Voice Matters
//                                 </h2>
//                                 <p className="mt-2 max-w-xl text-sm leading-5 text-emerald-100/80">
//                                     Connect with the constituency office, share
//                                     your concerns, or learn more about ongoing
//                                     public-service work.
//                                 </p>
//                             </div>

//                             <div className="flex flex-wrap gap-3">
//                                 <a
//                                     href="#"
//                                     className="inline-flex items-center gap-2 bg-amber-500 px-4 py-2.5 text-sm font-semibold text-stone-950"
//                                 >
//                                     <MessageCircle className="h-3.5 w-3.5" />
//                                     Contact the Constituency Office
//                                 </a>
//                                 <a
//                                     href="#constituency"
//                                     className="inline-flex items-center gap-2 border border-white/40 px-4 py-2.5 text-sm font-semibold text-white"
//                                 >
//                                     Explore Constituency Services
//                                     <ArrowRight className="h-3.5 w-3.5" />
//                                 </a>
//                             </div>
//                         </div>
//                     </section>

//                     {/* Footer */}
//                     <footer className="relative text-white">
//                         {/* <div className="mx-auto grid max-w-7xl gap-8 border-b border-white/10 px-4 py-9 md:grid-cols-12 md:px-6"> */}
//                         <div className="container mx-auto grid gap-8 border-b border-white/10 px-4 py-9 md:grid-cols-12 md:px-6">
//                             <div className="md:col-span-4">
//                                 <div className="flex items-center gap-3">
//                                     <div className="h-10 w-10 overflow-hidden rounded-full border border-white/20">
//                                         <img
//                                             src={`${A}/portrait.jpg`}
//                                             alt=""
//                                             className="h-full w-full object-cover"
//                                         />
//                                     </div>
//                                     <div>
//                                         <p className="font-serif text-lg font-semibold">
//                                             Dr. Sunsila Jabrin Priyanka
//                                         </p>
//                                         <p className="text-xs text-emerald-100/60">
//                                             Member of Parliament
//                                         </p>
//                                         <p className="text-xs text-emerald-100/60">
//                                             Sherpur–1 Constituency
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <p className="mt-4 max-w-sm text-sm leading-5 text-emerald-100/60">
//                                     Serving the people with responsibility,
//                                     accessibility and a commitment to meaningful
//                                     progress.
//                                 </p>
//                             </div>

//                             <div className="md:col-span-2">
//                                 <h3 className="text-sm font-semibold tracking-wider text-amber-400 uppercase">
//                                     Quick Links
//                                 </h3>
//                                 <div className="mt-3 space-y-2 text-sm text-emerald-100/60">
//                                     <a
//                                         href="#about"
//                                         className="block hover:text-white"
//                                     >
//                                         About
//                                     </a>
//                                     <a
//                                         href="#constituency"
//                                         className="block hover:text-white"
//                                     >
//                                         Constituency
//                                     </a>
//                                     <a
//                                         href="#parliamentary-work"
//                                         className="block hover:text-white"
//                                     >
//                                         Parliamentary Work
//                                     </a>
//                                     <a
//                                         href="#initiatives"
//                                         className="block hover:text-white"
//                                     >
//                                         Initiatives
//                                     </a>
//                                 </div>
//                             </div>

//                             <div className="md:col-span-2">
//                                 <h3 className="text-sm font-semibold tracking-wider text-amber-400 uppercase">
//                                     News & Media
//                                 </h3>
//                                 <div className="mt-3 space-y-2 text-sm text-emerald-100/60">
//                                     <a
//                                         href="#news"
//                                         className="block hover:text-white"
//                                     >
//                                         Latest Updates
//                                     </a>
//                                     <a
//                                         href="#gallery"
//                                         className="block hover:text-white"
//                                     >
//                                         Gallery
//                                     </a>
//                                     <a
//                                         href="#"
//                                         className="block hover:text-white"
//                                     >
//                                         Videos
//                                     </a>
//                                     <a
//                                         href="#"
//                                         className="block hover:text-white"
//                                     >
//                                         Press Releases
//                                     </a>
//                                 </div>
//                             </div>

//                             <div className="md:col-span-2">
//                                 <h3 className="text-sm font-semibold tracking-wider text-amber-400 uppercase">
//                                     Constituency Office
//                                 </h3>
//                                 <div className="mt-3 space-y-2 text-sm leading-4 text-emerald-100/60">
//                                     <p>Sherpur–1 Constituency Office</p>
//                                     <p>Sherpur, Bangladesh</p>
//                                     <p>+880 1XXX-XXXXXX</p>
//                                     <p>info@example.com</p>
//                                     <p>Sun – Thu · 9:00 AM – 5:00 PM</p>
//                                 </div>
//                             </div>

//                             <div className="md:col-span-2">
//                                 <h3 className="text-sm font-semibold tracking-wider text-amber-400 uppercase">
//                                     Stay Connected
//                                 </h3>
//                                 <p className="mt-3 text-sm leading-5 text-emerald-100/60">
//                                     Subscribe for updates from the constituency
//                                     office.
//                                 </p>
//                                 <div className="mt-3 flex border border-white/20">
//                                     <input
//                                         type="email"
//                                         placeholder="Enter your email"
//                                         className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-emerald-100/40"
//                                     />
//                                     <button
//                                         aria-label="Subscribe"
//                                         className="grid w-9 place-items-center bg-white text-emerald-950"
//                                     >
//                                         <ChevronRight className="h-4 w-4" />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="container mx-auto flex flex-col gap-3 px-4 py-4 text-sm text-emerald-100/40 md:flex-row md:items-center md:justify-between md:px-6">
//                             <p>
//                                 © 2026 Dr. Sunsila Jabrin Priyanka, MP
//                                 Sherpur–1. All Rights Reserved.
//                             </p>
//                             <div className="flex gap-4">
//                                 <a href="#">Privacy Policy</a>
//                                 <a href="#">Accessibility</a>
//                                 <a href="#">Disclaimer</a>
//                                 <a href="#">Sitemap</a>
//                             </div>
//                         </div>
//                     </footer>
//                 </div>
//             </div>
//         </>
//     );
// }


import { Head } from '@inertiajs/react';
import {
    ArrowRight,
    Building2,
    GraduationCap,
    HeartPulse,
    Leaf,
    MessageCircle,
    Sparkles,
    Users,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useRef } from 'react';
import { A, gallery, initiatives, leaders, stats, updates } from '@/components/mp/content';
import { GlassCard, Reveal, SectionHeading, cx, focusRing } from '@/components/mp/glass';
import { GlassCarousel } from '@/components/mp/glass-carousel';
import { SiteHeader } from '@/components/mp/site-header';
import { useScrollEffects } from '@/components/mp/use-site';

const priorities = [
    { icon: GraduationCap, title: 'Education', text: 'Quality education for every child' },
    { icon: HeartPulse, title: 'Healthcare', text: 'Accessible healthcare for all' },
    { icon: Building2, title: 'Infrastructure', text: 'Roads, bridges & modern facilities' },
    { icon: Users, title: 'Youth & Employment', text: 'Skills, jobs & youth empowerment' },
    { icon: Leaf, title: 'Agriculture', text: 'Supporting farmers and rural growth' },
    { icon: Sparkles, title: 'Social Welfare', text: 'Care, inclusion & social protection' },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } };
const word = { hidden: { y: '110%' }, show: { y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } } };

const btn = 'inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition active:scale-95 ';

export default function Welcome() {
    const root = useRef<HTMLDivElement>(null);
    const reduce = useReducedMotion();
    useScrollEffects(root);

    return (
        <>
            <Head title="Dr. Sunsila Jabrin Priyanka — Sherpur–1 Constituency" />

            <div ref={root} className="relative min-h-screen overflow-x-clip bg-[#f8f7f2] text-stone-800 dark:bg-[#06130e] dark:text-stone-200">
                {/* Static colour fields give the glass something to blur */}
                <div aria-hidden className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
                    <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-emerald-400/25 blur-3xl dark:bg-emerald-600/20" />
                    <div className="absolute top-1/2 -right-40 h-[28rem] w-[28rem] rounded-full bg-amber-300/25 blur-3xl dark:bg-amber-500/10" />
                </div>

                <SiteHeader />

                {/* Hero */}
                <section id="home" className="relative isolate scroll-mt-20 overflow-hidden bg-emerald-950">
                    <div data-parallax="0.1" className="absolute inset-x-0 -top-[15%] -z-10 h-[130%]">
                        {reduce ? (
                            <img src={`${A}/hero.jpg`} alt="" className="h-full w-full object-cover" />
                        ) : (
                            <video autoPlay muted loop playsInline preload="metadata" poster={`${A}/hero.jpg`} className="h-full w-full object-cover">
                                <source src={`${A}/hero.mp4`} type="video/mp4" />
                            </video>
                        )}
                    </div>
                    <div className="absolute inset-0 -z-10 bg-linear-to-r from-emerald-950 via-emerald-950/75 to-emerald-950/40" />

                    <div className="container mx-auto grid min-h-[78vh] items-center px-4 md:px-6 lg:grid-cols-12">
                        <div className="py-16 lg:col-span-7 lg:py-20">
                            <GlassCard className="max-w-xl border-white/20 bg-white/10 p-7 text-white backdrop-blur-xl md:p-9 dark:bg-white/5">
                                <p className="text-sm font-medium text-amber-400">Sherpur–1 Constituency</p>
                                <motion.h1
                                    variants={container}
                                    initial={reduce ? 'show' : 'hidden'}
                                    animate="show"
                                    aria-label="Dr. Sunsila Jabrin Priyanka"
                                    className="mt-3 font-serif text-4xl leading-[1.05] font-semibold sm:text-5xl md:text-6xl"
                                >
                                    {['Dr. Sunsila', 'Jabrin Priyanka'].map((line) => (
                                        <span key={line} className="block overflow-hidden pb-1">
                                            <motion.span variants={word} className="block" aria-hidden>
                                                {line}
                                            </motion.span>
                                        </span>
                                    ))}
                                </motion.h1>
                                <p className="mt-4 font-serif text-xl text-amber-400 md:text-2xl">Member of Parliament, Sherpur–1</p>
                                <p className="mt-4 max-w-md text-sm leading-6 text-stone-200">
                                    Serving the people of Sherpur–1 with responsibility, accessibility and a commitment to meaningful progress.
                                </p>
                                <div className="mt-7 flex flex-wrap gap-3">
                                    <a href="#contact" className={cx(btn, 'bg-amber-500 text-stone-950 hover:bg-amber-400', focusRing)}>
                                        <MessageCircle className="h-4 w-4" aria-hidden /> Contact the office
                                    </a>
                                    <a href="#initiatives" className={cx(btn, 'border border-white/50 text-white hover:bg-white hover:text-emerald-950', focusRing)}>
                                        See the initiatives <ArrowRight className="h-4 w-4" aria-hidden />
                                    </a>
                                </div>
                            </GlassCard>
                        </div>

                        <div className="relative hidden h-full lg:col-span-5 lg:block">
                            <img src={`${A}/map.png`} alt="" className="absolute top-1/2 left-0 w-80 -translate-y-1/2 opacity-60" />
                            <img src={`${A}/portrait.png`} alt="Dr. Sunsila Jabrin Priyanka" className="absolute right-0 bottom-0 max-h-[490px] object-contain" />
                        </div>
                    </div>
                </section>

                {/* Stats (placeholders) */}
                <section aria-label="At a glance" className="relative z-10 container mx-auto -mt-10 px-4 md:px-6">
                    <Reveal>
                        <GlassCard className="grid grid-cols-2 divide-stone-300/60 md:grid-cols-4 md:divide-x dark:divide-white/10">
                            {stats.map((s) => (
                                <div key={s.label} className="px-5 py-5">
                                    <p className="font-serif text-3xl text-emerald-900 dark:text-amber-300">{s.value}</p>
                                    <p className="mt-1 text-sm text-stone-600 dark:text-stone-300">{s.label}</p>
                                </div>
                            ))}
                        </GlassCard>
                    </Reveal>
                </section>

                <main className="relative z-10">
                    {/* Leadership */}
                    <section aria-labelledby="legacy" className="container mx-auto px-4 pt-20 md:px-6">
                        <SectionHeading id="legacy" title="Our Inspiring Leadership Throughout History" />
                        <div className="grid gap-5 md:grid-cols-3">
                            {leaders.map((l, i) => (
                                <Reveal key={l.name} delay={i * 0.1}>
                                    <article className="group relative isolate overflow-hidden rounded-2xl bg-stone-900 ring-1 ring-black/10">
                                        <img src={l.image} alt={`Portrait of ${l.name}`} loading="lazy" decoding="async" className="aspect-[4/5] w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                                        <div className="absolute inset-0 bg-linear-to-t from-stone-950/90 via-transparent to-transparent" />
                                        <GlassCard className="absolute inset-x-3 bottom-3 border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md dark:bg-white/10">
                                            <h3 className="font-serif text-lg font-semibold text-white">{l.name}</h3>
                                        </GlassCard>
                                    </article>
                                </Reveal>
                            ))}
                        </div>
                    </section>

                    {/* About */}
                    <section id="about" className="container mx-auto scroll-mt-20 px-4 py-20 md:px-6">
                        <div className="grid items-center gap-8 lg:grid-cols-12">
                            <Reveal className="lg:col-span-4">
                                <img src={`${A}/portrait-office.jpg`} alt="Dr. Sunsila Jabrin Priyanka at work" loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover" />
                            </Reveal>
                            <Reveal delay={0.1} className="lg:col-span-8">
                                <GlassCard className="p-7 md:p-10">
                                    <h2 className="font-serif text-3xl font-semibold text-stone-900 dark:text-stone-50">About Dr. Sunsila Jabrin Priyanka</h2>
                                    <div className="mt-3 h-0.5 w-12 bg-amber-500" />
                                    <p className="mt-5 max-w-prose leading-7 text-stone-600 dark:text-stone-300">
                                        I am honoured to represent the people of Sherpur–1 in the National Parliament of Bangladesh. My journey in public life is guided by a simple belief: politics is about people, and service.
                                    </p>
                                    <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
                                        {[
                                            ['Education', 'Your Education Background'],
                                            ['Profession', 'Your Professional Background'],
                                            ['Public service journey', 'Your Journey Highlights'],
                                            ['Leadership philosophy', 'People first, always.'],
                                        ].map(([k, v]) => (
                                            <div key={k}>
                                                <dt className="font-semibold text-stone-900 dark:text-stone-50">{k}</dt>
                                                <dd className="text-stone-600 dark:text-stone-300">{v}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                    <blockquote className="mt-8 border-l-2 border-amber-500 pl-5 font-serif text-lg leading-7 text-stone-700 italic dark:text-stone-200">
                                        My commitment is to listen, to serve, and to work together for a stronger, more prosperous Sherpur–1.
                                    </blockquote>
                                </GlassCard>
                            </Reveal>
                        </div>
                    </section>

                    {/* Constituency + priorities */}
                    <section id="constituency" className="container mx-auto scroll-mt-20 px-4 pb-20 md:px-6">
                        <SectionHeading title="Serving Sherpur–1" intro="Sherpur–1 is rich in culture, natural beauty and potential. Together, we can build a brighter future for our communities." />
                        <div className="grid gap-4 lg:grid-cols-12">
                            <Reveal className="lg:col-span-5">
                                <GlassCard className="flex h-full items-center justify-center p-6">
                                    <img src={`${A}/map.png`} alt="Map of Sherpur–1" loading="lazy" className="max-h-72 w-full object-contain" />
                                </GlassCard>
                            </Reveal>
                            <Reveal delay={0.1} className="grid gap-4 lg:col-span-7">
                                <img src={`${A}/constituency-river.jpg`} alt="River landscape of Sherpur" loading="lazy" className="h-44 w-full rounded-2xl object-cover" />
                                <div className="grid grid-cols-2 gap-4">
                                    <img src={`${A}/constituency-field.jpg`} alt="Sherpur field" loading="lazy" className="h-28 w-full rounded-2xl object-cover" />
                                    <img src={`${A}/community-2.jpg`} alt="Community members" loading="lazy" className="h-28 w-full rounded-2xl object-cover" />
                                </div>
                            </Reveal>
                        </div>

                        <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
                            {priorities.map(({ icon: Icon, title, text }, i) => (
                                <Reveal key={title} delay={i * 0.05}>
                                    <li className="list-none">
                                        <GlassCard className="h-full px-3 py-5 text-center transition hover:-translate-y-1 hover:shadow-xl">
                                            <Icon className="mx-auto h-8 w-8 stroke-[1.3] text-emerald-900 dark:text-amber-300" aria-hidden />
                                            <h3 className="mt-3 font-serif text-sm font-semibold text-stone-900 dark:text-stone-50">{title}</h3>
                                            <p className="mt-1 text-xs leading-4 text-stone-600 dark:text-stone-300">{text}</p>
                                        </GlassCard>
                                    </li>
                                </Reveal>
                            ))}
                        </ul>
                    </section>

                    {/* Initiatives carousel */}
                    <section id="initiatives" className="container mx-auto scroll-mt-20 px-4 pb-20 md:px-6">
                        <SectionHeading title="Public-Service Initiatives" />
                        <Reveal>
                            <GlassCarousel items={initiatives} />
                        </Reveal>
                    </section>

                    {/* News */}
                    <section id="news" className="container mx-auto scroll-mt-20 px-4 pb-20 md:px-6">
                        <SectionHeading title="Latest Updates" />
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            {updates.map((u, i) => (
                                <Reveal key={u.title} delay={i * 0.07}>
                                    <GlassCard as="article" className="h-full p-5 transition hover:-translate-y-1">
                                        <div className="flex items-center justify-between gap-2 text-xs">
                                            <span className="rounded-full bg-emerald-900 px-2.5 py-1 font-semibold text-white">{u.tag}</span>
                                            <time className="text-stone-500 dark:text-stone-400">{u.date}</time>
                                        </div>
                                        <h3 className="mt-4 font-serif text-lg leading-6 font-semibold text-stone-900 dark:text-stone-50">{u.title}</h3>
                                        <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-300">{u.text}</p>
                                    </GlassCard>
                                </Reveal>
                            ))}
                        </div>
                    </section>

                    {/* Gallery */}
                    <section id="gallery" className="container mx-auto scroll-mt-20 px-4 pb-20 md:px-6">
                        <SectionHeading title="Connected to the Community" intro="Listening, engaging and working together with the people of Sherpur–1." />
                        <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
                            {gallery.map((src, i) => (
                                <Reveal key={src} delay={i * 0.05} className={i === 0 ? 'col-span-2 md:col-span-3 md:row-span-2' : 'md:col-span-3 lg:col-span-1'}>
                                    <div className="group overflow-hidden rounded-2xl">
                                        <img src={src} alt={`Community engagement ${i + 1}`} loading="lazy" decoding="async" className={cx('w-full object-cover transition duration-500 group-hover:scale-105', i === 0 ? 'aspect-[4/3] md:h-full' : 'aspect-square')} />
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </section>
                </main>

                {/* Contact + footer */}
                <div id="contact" className="relative isolate scroll-mt-20 overflow-hidden bg-emerald-950 text-white">
                    <img src={`${A}/cta-bg.jpg`} alt="" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
                    <div className="container mx-auto px-4 py-16 md:px-6">
                        <Reveal>
                            <GlassCard className="grid gap-8 border-white/20 bg-white/10 p-8 backdrop-blur-xl md:grid-cols-2 dark:bg-white/5">
                                <div>
                                    <h2 className="font-serif text-3xl">Your Voice Matters</h2>
                                    <p className="mt-3 max-w-md text-emerald-50/80">
                                        Connect with the constituency office, share your concerns, or learn more about ongoing public-service work.
                                    </p>
                                    <a href="mailto:info@example.com" className={cx(btn, 'mt-6 bg-amber-500 text-stone-950 hover:bg-amber-400', focusRing)}>
                                        <MessageCircle className="h-4 w-4" aria-hidden /> Contact the office
                                    </a>
                                </div>
                                <address className="space-y-1 text-sm text-emerald-50/80 not-italic">
                                    <p className="font-semibold text-white">Sherpur–1 Constituency Office</p>
                                    <p>Sherpur, Bangladesh</p>
                                    <p>+880 1XXX-XXXXXX</p>
                                    <p>info@example.com</p>
                                    <p>Sun – Thu, 9:00 AM – 5:00 PM</p>
                                </address>
                            </GlassCard>
                        </Reveal>
                    </div>
                    <footer className="border-t border-white/10 py-5 text-center text-sm text-emerald-100/60">
                        © 2026 Dr. Sunsila Jabrin Priyanka, MP Sherpur–1. All rights reserved.
                    </footer>
                </div>
            </div>
        </>
    );
}
