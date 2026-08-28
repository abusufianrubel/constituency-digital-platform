import { Head, Link } from '@inertiajs/react';
import {
    ArrowRight,
    ArrowUp,
    Building2,
    CheckCircle2,
    ChevronRight,
    Clock3,
    GraduationCap,
    Globe2,
    Handshake,
    HeartPulse,
    Instagram,
    Landmark,
    Leaf,
    Linkedin,
    Mail,
    MapPin,
    Menu,
    MessageCircle,
    Moon,
    Newspaper,
    Phone,
    Quote,
    Sparkles,
    Sun,
    Target,
    Users,
    X,
    Youtube,
    Facebook,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import {
    AnimatePresence,
    MotionConfig,
    motion,
    useMotionValueEvent,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
} from 'motion/react';
import type { Variants } from 'motion/react';
import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { useAppearance } from '@/hooks/use-appearance';
import { login } from '@/routes';

const assetPath = '/images/mp';

type Language = 'en' | 'bn';
type Translate = (value: string) => string;

const banglaTranslations: Record<string, string> = {
    Vision: 'দৃষ্টিভঙ্গি',
    Initiatives: 'উদ্যোগসমূহ',
    About: 'পরিচিতি',
    Leadership: 'নেতৃত্ব',
    'Go to the top of the page': 'পৃষ্ঠার শুরুতে যান',
    'Dr. Sunsila Jabrin Priyanka': 'ডা. সানসিলা জাবরিন প্রিয়াঙ্কা',
    'Sherpur–1 Constituency': 'শেরপুর–১ নির্বাচনী এলাকা',
    'Primary navigation': 'প্রধান নেভিগেশন',
    'Contact Office': 'কার্যালয়ে যোগাযোগ',
    Login: 'লগইন',
    'Open menu': 'মেনু খুলুন',
    'Close menu': 'মেনু বন্ধ করুন',
    'Mobile navigation': 'মোবাইল নেভিগেশন',
    'Switch to dark mode': 'ডার্ক মোড চালু করুন',
    'Switch to light mode': 'লাইট মোড চালু করুন',
    'Switch to Bangla': 'বাংলায় দেখুন',
    'Switch to English': 'ইংরেজিতে দেখুন',
    'Theme and language controls': 'থিম ও ভাষা নিয়ন্ত্রণ',
    'Portrait of': 'প্রতিকৃতি:',
    'Dr. Sunsila Jabrin Priyanka meeting with the community':
        'কমিউনিটির সঙ্গে ডা. সানসিলা জাবরিন প্রিয়াঙ্কা',
    'In service of Sherpur–1': 'শেরপুর–১-এর মানুষের সেবায়',
    'Progress, shaped with people at the centre.':
        'মানুষকে কেন্দ্রে রেখেই অগ্রগতির পথচলা।',
    'A modern public-service platform connecting community priorities, visible action, and a more hopeful future for every family in Sherpur.':
        'কমিউনিটির অগ্রাধিকার, দৃশ্যমান উদ্যোগ এবং শেরপুরের প্রতিটি পরিবারের আশাব্যঞ্জক ভবিষ্যৎকে যুক্ত করা একটি আধুনিক জনসেবা প্ল্যাটফর্ম।',
    'People first': 'সবার আগে মানুষ',
    'Our principle': 'আমাদের নীতি',
    'Always open': 'সবসময় উন্মুক্ত',
    'Our promise': 'আমাদের অঙ্গীকার',
    'Sherpur–1': 'শেরপুর–১',
    'Our home': 'আমাদের ঠিকানা',
    'Public service': 'জনসেবা',
    'Leadership begins by listening.': 'শোনার মধ্য দিয়েই নেতৃত্বের শুরু।',
    Constituency: 'নির্বাচনী এলাকা',
    'Constituency commitment': 'নির্বাচনী এলাকার প্রতি অঙ্গীকার',
    'One constituency · one shared direction':
        'একটি নির্বাচনী এলাকা · একটি অভিন্ন লক্ষ্য',
    'Sherpur Sadar': 'শেরপুর সদর',
    'Community first': 'সবার আগে কমিউনিটি',
    'Visible progress': 'দৃশ্যমান অগ্রগতি',
    'Open dialogue': 'উন্মুক্ত সংলাপ',
    'Our priorities': 'আমাদের অগ্রাধিকার',
    'Public service designed around real life.':
        'বাস্তব জীবনকে ঘিরেই জনসেবার পরিকল্পনা।',
    'A focused agenda for the systems people rely on every day—built with clarity, care, and measurable intent.':
        'মানুষ প্রতিদিন যে সেবাগুলোর ওপর নির্ভর করে, সেগুলোর জন্য স্বচ্ছতা, যত্ন ও পরিমাপযোগ্য লক্ষ্যভিত্তিক পরিকল্পনা।',
    'Education for every future': 'প্রতিটি ভবিষ্যতের জন্য শিক্ষা',
    'Modern learning environments, stronger institutions, and practical skills for the next generation.':
        'আগামী প্রজন্মের জন্য আধুনিক শিক্ষার পরিবেশ, শক্তিশালী প্রতিষ্ঠান ও ব্যবহারিক দক্ষতা।',
    'Healthcare within reach': 'হাতের নাগালে স্বাস্থ্যসেবা',
    'Community-first care, better local facilities, and dignified access for every family.':
        'কমিউনিটিকেন্দ্রিক সেবা, উন্নত স্থানীয় সুবিধা এবং প্রতিটি পরিবারের জন্য মর্যাদাপূর্ণ প্রবেশাধিকার।',
    'Infrastructure that connects': 'সংযোগ গড়ে তোলা অবকাঠামো',
    'Resilient roads, bridges, and civic spaces that unlock opportunity across Sherpur.':
        'শেরপুরজুড়ে সম্ভাবনার দুয়ার খুলতে টেকসই সড়ক, সেতু ও নাগরিক অবকাঠামো।',
    'Youth with momentum': 'এগিয়ে চলা তারুণ্য',
    'Skills, entrepreneurship, and employment pathways shaped around local ambition.':
        'স্থানীয় আকাঙ্ক্ষাকে ঘিরে দক্ষতা, উদ্যোক্তা উন্নয়ন ও কর্মসংস্থানের পথ।',
    'Agriculture that prospers': 'সমৃদ্ধির কৃষি',
    'Practical support for farmers, smarter production, and sustainable rural growth.':
        'কৃষকের ব্যবহারিক সহায়তা, আধুনিক উৎপাদন ও টেকসই গ্রামীণ প্রবৃদ্ধি।',
    'A society that includes': 'অন্তর্ভুক্তিমূলক সমাজ',
    'Responsive public service and stronger protection for the people who need it most.':
        'যাদের সবচেয়ে বেশি প্রয়োজন, তাদের জন্য সাড়াদানকারী জনসেবা ও শক্তিশালী সুরক্ষা।',
    'Bento of progress': 'অগ্রগতির চিত্র',
    'Work you can see. Outcomes you can feel.':
        'যে কাজ দেখা যায়। যে ফল অনুভব করা যায়।',
    'A living view of constituency priorities moving from commitment to meaningful action.':
        'নির্বাচনী এলাকার অগ্রাধিকার কীভাবে অঙ্গীকার থেকে অর্থবহ উদ্যোগে রূপ নিচ্ছে, তার জীবন্ত চিত্র।',
    Education: 'শিক্ষা',
    Completed: 'সম্পন্ন',
    'School Infrastructure Support': 'বিদ্যালয় অবকাঠামো সহায়তা',
    'Creating better learning environments through safer, more capable school facilities.':
        'নিরাপদ ও উন্নত বিদ্যালয় সুবিধার মাধ্যমে শিক্ষার অনুকূল পরিবেশ তৈরি।',
    'Community Health': 'কমিউনিটি স্বাস্থ্য',
    'In progress': 'চলমান',
    'Community Health Access': 'কমিউনিটি স্বাস্থ্যসেবা',
    'Supporting local health centres and bringing essential care closer to families.':
        'স্থানীয় স্বাস্থ্যকেন্দ্রকে সহায়তা এবং পরিবারের কাছে প্রয়োজনীয় সেবা পৌঁছে দেওয়া।',
    Infrastructure: 'অবকাঠামো',
    'Rural Road Improvement': 'গ্রামীণ সড়ক উন্নয়ন',
    'Building dependable connections between villages, markets, schools, and services.':
        'গ্রাম, বাজার, বিদ্যালয় ও সেবার মধ্যে নির্ভরযোগ্য সংযোগ গড়ে তোলা।',
    Youth: 'তারুণ্য',
    Planned: 'পরিকল্পিত',
    'Skills for Tomorrow': 'আগামীর দক্ষতা',
    'Turning potential into livelihoods through relevant training and opportunity.':
        'প্রাসঙ্গিক প্রশিক্ষণ ও সুযোগের মাধ্যমে সম্ভাবনাকে জীবিকায় রূপ দেওয়া।',
    'Your representative': 'আপনার প্রতিনিধি',
    'About Dr. Sunsila Jabrin Priyanka':
        'ডা. সানসিলা জাবরিন প্রিয়াঙ্কা সম্পর্কে',
    'Dr. Sunsila Jabrin Priyanka is a physician, politician, and public representative dedicated to serving the people of Sherpur through grassroots engagement and public service.':
        'ডা. সানসিলা জাবরিন প্রিয়াঙ্কা একজন চিকিৎসক, রাজনীতিবিদ ও জনপ্রতিনিধি, যিনি তৃণমূলের সম্পৃক্ততা ও জনসেবার মাধ্যমে শেরপুরের মানুষের সেবায় নিবেদিত।',
    'Political Identity': 'রাজনৈতিক পরিচয়',
    Party: 'দল',
    'Bangladesh Nationalist Party (BNP)': 'বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি)',
    Role: 'ভূমিকা',
    'Member of Parliament': 'সংসদ সদস্য',
    Focus: 'অগ্রাধিকার',
    'Healthcare, Education, Women’s Empowerment & Local Development':
        'স্বাস্থ্যসেবা, শিক্ষা, নারীর ক্ষমতায়ন ও স্থানীয় উন্নয়ন',
    'Sherpur-1': 'শেরপুর-১',
    'People first, always.': 'সবসময় সবার আগে মানুষ।',
    'Guided by duty and accountability': 'দায়িত্ব ও জবাবদিহিতে পরিচালিত',
    Community: 'কমিউনিটি',
    'Built through participation': 'অংশগ্রহণের মাধ্যমে নির্মিত',
    'Progress with dignity': 'মর্যাদার সঙ্গে অগ্রগতি',
    Promise: 'অঙ্গীকার',
    'Open and responsive leadership': 'উন্মুক্ত ও সাড়াদানকারী নেতৃত্ব',
    'The operating model': 'কাজের পদ্ধতি',
    'Listen. Design. Deliver.': 'শুনুন। পরিকল্পনা করুন। বাস্তবায়ন করুন।',
    'A simple, disciplined process keeps community voices connected to decisions and results.':
        'একটি সহজ ও সুশৃঙ্খল প্রক্রিয়া কমিউনিটির কণ্ঠকে সিদ্ধান্ত ও ফলাফলের সঙ্গে যুক্ত রাখে।',
    'Listen deeply': 'মন দিয়ে শুনুন',
    'Open forums and local conversations surface the needs that matter most.':
        'উন্মুক্ত সভা ও স্থানীয় আলোচনায় সবচেয়ে গুরুত্বপূর্ণ চাহিদাগুলো উঠে আসে।',
    'Design precisely': 'সুনির্দিষ্ট পরিকল্পনা',
    'Clear priorities turn community insight into practical, accountable plans.':
        'স্পষ্ট অগ্রাধিকার কমিউনিটির মতামতকে বাস্তব ও জবাবদিহিমূলক পরিকল্পনায় রূপ দেয়।',
    'Deliver visibly': 'দৃশ্যমান বাস্তবায়ন',
    'Progress is communicated openly, measured carefully, and improved continuously.':
        'অগ্রগতি উন্মুক্তভাবে জানানো, সতর্কভাবে পরিমাপ এবং নিয়মিত উন্নত করা হয়।',
    Step: 'ধাপ',
    'Sessions attended': 'অংশ নেওয়া অধিবেশন',
    'Unions covered': 'অন্তর্ভুক্ত ইউনিয়ন',
    'Public initiatives': 'জনউদ্যোগ',
    'Community programs': 'কমিউনিটি কর্মসূচি',
    'Community voices': 'কমিউনিটির কণ্ঠ',
    'Progress is personal.': 'অগ্রগতি ব্যক্তিজীবনের অংশ।',
    'The clearest measure of public service is how it changes everyday life.':
        'জনসেবার সবচেয়ে স্পষ্ট মাপকাঠি হলো তা দৈনন্দিন জীবনকে কীভাবে বদলে দেয়।',
    'When leadership listens first, people become part of the solution—not just recipients of it.':
        'নেতৃত্ব যখন আগে শোনে, মানুষ শুধু সুবিধাভোগী নয়—সমাধানের অংশ হয়ে ওঠে।',
    'Local educator': 'স্থানীয় শিক্ষাবিদ',
    'The strongest development is the kind we can see in our roads, schools, and everyday opportunities.':
        'সবচেয়ে শক্তিশালী উন্নয়ন সেটিই, যা আমাদের সড়ক, বিদ্যালয় ও প্রতিদিনের সুযোগে দেখা যায়।',
    'Community organiser': 'কমিউনিটি সংগঠক',
    Nalitabari: 'নালিতাবাড়ী',
    'Young people need more than promises. They need a clear path to skills, work, and meaningful participation.':
        'তরুণদের শুধু প্রতিশ্রুতি নয়—দক্ষতা, কাজ ও অর্থবহ অংশগ্রহণের স্পষ্ট পথ দরকার।',
    'Youth representative': 'যুব প্রতিনিধি',
    Nakla: 'নকলা',
    'Our legacy': 'আমাদের ঐতিহ্য',
    'Our Inspiring Leadership Throughout History':
        'ইতিহাসজুড়ে আমাদের প্রেরণাদায়ী নেতৃত্ব',
    'A tradition of conviction, resilience, and service that continues to shape the road ahead.':
        'বিশ্বাস, দৃঢ়তা ও সেবার যে ঐতিহ্য সামনের পথকে আজও নির্মাণ করছে।',
    'Leadership legacy': 'নেতৃত্বের ঐতিহ্য',
    'Shaheed President Ziaur Rahman': 'শহীদ রাষ্ট্রপতি জিয়াউর রহমান',
    'Begum Khaleda Zia': 'বেগম খালেদা জিয়া',
    'Tarique Rahman': 'তারেক রহমান',
    'The next chapter is shared': 'আগামীর অধ্যায় আমাদের সবার',
    'Let’s build a stronger Sherpur, together.':
        'চলুন, একসঙ্গে আরও শক্তিশালী শেরপুর গড়ি।',
    'Share an idea, raise a concern, or connect with the constituency office. Every meaningful change begins with a conversation.':
        'ভাবনা জানান, উদ্বেগ তুলে ধরুন অথবা নির্বাচনী কার্যালয়ের সঙ্গে যুক্ত হোন। প্রতিটি অর্থবহ পরিবর্তনের শুরু একটি কথোপকথন থেকে।',
    'Start a conversation': 'কথা শুরু করুন',
    'Member of Parliament · Sherpur–1': 'সংসদ সদস্য · শেরপুর–১',
    'Office hours · Sun–Thu': 'কার্যালয়ের সময় · রবি–বৃহস্পতি',
    '© 2026. All rights reserved.': '© ২০২৬। সর্বস্বত্ব সংরক্ষিত।',
    'Honorable Member of Parliament': 'মাননীয় সংসদ সদস্য',
    'Reserved Women’s Seat | Sherpur-1': 'সংরক্ষিত নারী আসন | শেরপুর-১',
    'Dedicated to transparent, inclusive public service and meaningful progress for every community in Sherpur.':
        'শেরপুরের প্রতিটি কমিউনিটির জন্য স্বচ্ছ, অন্তর্ভুক্তিমূলক জনসেবা ও অর্থবহ অগ্রগতিতে নিবেদিত।',
    'Quick Links': 'দ্রুত লিংক',
    Home: 'হোম',
    'Political Journey': 'রাজনৈতিক পথচলা',
    'Development Activities': 'উন্নয়ন কার্যক্রম',
    'News & Media': 'সংবাদ ও গণমাধ্যম',
    Events: 'ইভেন্ট',
    'Important Links': 'গুরুত্বপূর্ণ লিংক',
    'Media Center': 'মিডিয়া সেন্টার',
    'Development Projects': 'উন্নয়ন প্রকল্প',
    Gallery: 'গ্যালারি',
    'Public Feedback': 'জনমত',
    Contact: 'যোগাযোগ',
    'Contact Information': 'যোগাযোগের তথ্য',
    'Constituency Office, Sherpur Sadar, Sherpur, Bangladesh':
        'নির্বাচনী কার্যালয়, শেরপুর সদর, শেরপুর, বাংলাদেশ',
    Phone: 'ফোন',
    Email: 'ইমেইল',
    'Official Website': 'অফিশিয়াল ওয়েবসাইট',
    'Follow on Facebook': 'ফেসবুকে অনুসরণ করুন',
    'Follow on Instagram': 'ইনস্টাগ্রামে অনুসরণ করুন',
    'Follow on LinkedIn': 'লিংকডইনে অনুসরণ করুন',
    'Follow on YouTube': 'ইউটিউবে অনুসরণ করুন',
    'Privacy Policy': 'গোপনীয়তা নীতি',
    'Terms & Conditions': 'শর্তাবলি',
    'Back to top': 'উপরে ফিরে যান',
    '© 2026 Dr. Sunsila Jabrin Priyanka. All Rights Reserved.':
        '© ২০২৬ ডা. সানসিলা জাবরিন প্রিয়াঙ্কা। সর্বস্বত্ব সংরক্ষিত।',
};

const springTransition = {
    type: 'spring' as const,
    stiffness: 90,
    damping: 18,
    mass: 0.8,
};

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 48 },
    visible: { opacity: 1, y: 0, transition: springTransition },
};

export const slideLeft: Variants = {
    hidden: { opacity: 0, x: -96, rotate: -2 },
    visible: { opacity: 1, x: 0, rotate: 0, transition: springTransition },
};

export const slideRight: Variants = {
    hidden: { opacity: 0, x: 96, rotate: 2 },
    visible: { opacity: 1, x: 0, rotate: 0, transition: springTransition },
};

export const slideUp: Variants = {
    hidden: { opacity: 0, y: 96, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: springTransition },
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.84, rotate: -3 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: springTransition },
};

export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.08,
        },
    },
};

const navigation = [
    { label: 'Vision', href: '#vision' },
    { label: 'Initiatives', href: '#initiatives' },
    { label: 'About', href: '#about' },
    { label: 'Leadership', href: '#leadership' },
];

const quickLinks = [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Political Journey', href: '#leadership' },
    { label: 'Development Activities', href: '#initiatives' },
    { label: 'News & Media', href: '#vision' },
    { label: 'Events', href: '#contact' },
];

const importantLinks = [
    { label: 'Media Center', href: '#vision' },
    { label: 'Development Projects', href: '#initiatives' },
    { label: 'Gallery', href: '#initiatives' },
    { label: 'Public Feedback', href: '#contact' },
    { label: 'Contact', href: '#contact' },
];

const socialLinks = [
    { label: 'Follow on Facebook', href: '#top', icon: Facebook },
    { label: 'Follow on Instagram', href: '#top', icon: Instagram },
    { label: 'Follow on LinkedIn', href: '#top', icon: Linkedin },
    { label: 'Follow on YouTube', href: '#top', icon: Youtube },
];

const heroSlides = [
    `${assetPath}/constituency-river.jpg`,
    `${assetPath}/constituency-field.jpg`,
    `${assetPath}/community-1.jpg`,
    `${assetPath}/community-4.jpg`,
];

const priorities = [
    {
        icon: GraduationCap,
        number: '01',
        title: 'Education for every future',
        description:
            'Modern learning environments, stronger institutions, and practical skills for the next generation.',
    },
    {
        icon: HeartPulse,
        number: '02',
        title: 'Healthcare within reach',
        description:
            'Community-first care, better local facilities, and dignified access for every family.',
    },
    {
        icon: Building2,
        number: '03',
        title: 'Infrastructure that connects',
        description:
            'Resilient roads, bridges, and civic spaces that unlock opportunity across Sherpur.',
    },
    {
        icon: Users,
        number: '04',
        title: 'Youth with momentum',
        description:
            'Skills, entrepreneurship, and employment pathways shaped around local ambition.',
    },
    {
        icon: Leaf,
        number: '05',
        title: 'Agriculture that prospers',
        description:
            'Practical support for farmers, smarter production, and sustainable rural growth.',
    },
    {
        icon: Handshake,
        number: '06',
        title: 'A society that includes',
        description:
            'Responsive public service and stronger protection for the people who need it most.',
    },
];

const initiatives = [
    {
        image: `${assetPath}/initiative-1.jpg`,
        category: 'Education',
        status: 'Completed',
        title: 'School Infrastructure Support',
        description:
            'Creating better learning environments through safer, more capable school facilities.',
        className: 'md:col-span-7',
    },
    {
        image: `${assetPath}/initiative-2.jpg`,
        category: 'Community Health',
        status: 'In progress',
        title: 'Community Health Access',
        description:
            'Supporting local health centres and bringing essential care closer to families.',
        className: 'md:col-span-5',
    },
    {
        image: `${assetPath}/initiative-3.jpg`,
        category: 'Infrastructure',
        status: 'In progress',
        title: 'Rural Road Improvement',
        description:
            'Building dependable connections between villages, markets, schools, and services.',
        className: 'md:col-span-5',
    },
    {
        image: `${assetPath}/initiative-4.jpg`,
        category: 'Youth',
        status: 'Planned',
        title: 'Skills for Tomorrow',
        description:
            'Turning potential into livelihoods through relevant training and opportunity.',
        className: 'md:col-span-7',
    },
];

const process = [
    {
        icon: MessageCircle,
        title: 'Listen deeply',
        description:
            'Open forums and local conversations surface the needs that matter most.',
    },
    {
        icon: Target,
        title: 'Design precisely',
        description:
            'Clear priorities turn community insight into practical, accountable plans.',
    },
    {
        icon: CheckCircle2,
        title: 'Deliver visibly',
        description:
            'Progress is communicated openly, measured carefully, and improved continuously.',
    },
];

const testimonials = [
    {
        quote: 'When leadership listens first, people become part of the solution—not just recipients of it.',
        role: 'Local educator',
        location: 'Sherpur Sadar',
    },
    {
        quote: 'The strongest development is the kind we can see in our roads, schools, and everyday opportunities.',
        role: 'Community organiser',
        location: 'Nalitabari',
    },
    {
        quote: 'Young people need more than promises. They need a clear path to skills, work, and meaningful participation.',
        role: 'Youth representative',
        location: 'Nakla',
    },
];

const leaders = [
    {
        name: 'Shaheed President Ziaur Rahman',
        image: `${assetPath}/leader-ziaur-rahman.jpg`,
        direction: slideLeft,
    },
    {
        name: 'Begum Khaleda Zia',
        image: `${assetPath}/leader-khaleda-zia.jpg`,
        direction: slideUp,
    },
    {
        name: 'Tarique Rahman',
        image: `${assetPath}/leader-tarique-rahman.jpg`,
        direction: slideRight,
    },
];

const aboutDetails = [
    {
        icon: Landmark,
        title: 'Party',
        text: 'Bangladesh Nationalist Party (BNP)',
    },
    {
        icon: MapPin,
        title: 'Constituency',
        text: 'Sherpur-1',
    },
    {
        icon: Users,
        title: 'Role',
        text: 'Member of Parliament',
    },
    {
        icon: Sparkles,
        title: 'Focus',
        text: 'Healthcare, Education, Women’s Empowerment & Local Development',
    },
];

const stats = [
    { value: '00+', label: 'Sessions attended', icon: Landmark },
    { value: '00+', label: 'Unions covered', icon: MapPin },
    { value: '00+', label: 'Public initiatives', icon: Newspaper },
    { value: '00+', label: 'Community programs', icon: Users },
];

function useDesktopMotion(): boolean {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 1024px)');
        const updatePreference = () => setIsDesktop(mediaQuery.matches);

        updatePreference();
        mediaQuery.addEventListener('change', updatePreference);

        return () => mediaQuery.removeEventListener('change', updatePreference);
    }, []);

    return isDesktop;
}

function SectionHeading({
    eyebrow,
    title,
    description,
    align = 'left',
    inverted = false,
}: {
    eyebrow: string;
    title: string;
    description?: string;
    align?: 'left' | 'center';
    inverted?: boolean;
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.45 }}
            variants={staggerContainer}
            className={
                align === 'center'
                    ? 'mx-auto max-w-3xl text-center'
                    : 'max-w-3xl'
            }
        >
            <motion.p
                variants={slideLeft}
                className={`mb-4 text-xs font-semibold tracking-widest uppercase ${inverted ? 'text-emerald-300' : 'text-emerald-700 dark:text-emerald-300'}`}
            >
                {eyebrow}
            </motion.p>
            <motion.h2
                variants={slideRight}
                className={`font-serif text-4xl leading-tight font-semibold tracking-tight sm:text-5xl ${inverted ? 'text-white' : 'text-stone-950 dark:text-white'}`}
            >
                {title}
            </motion.h2>
            {description && (
                <motion.p
                    variants={fadeUp}
                    className={`mt-5 text-base leading-8 sm:text-lg ${inverted ? 'text-emerald-100/70' : 'text-stone-600 dark:text-stone-400'}`}
                >
                    {description}
                </motion.p>
            )}
        </motion.div>
    );
}

function Reveal({
    children,
    variants = fadeUp,
    className,
}: {
    children: ReactNode;
    variants?: Variants;
    className?: string;
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
}

function NavbarControls({
    language,
    onLanguageChange,
    t,
}: {
    language: Language;
    onLanguageChange: (language: Language) => void;
    t: Translate;
}) {
    const { resolvedAppearance, updateAppearance } = useAppearance();
    const isDark = resolvedAppearance === 'dark';
    const nextLanguage = language === 'en' ? 'bn' : 'en';

    return (
        <div
            role="group"
            aria-label={t('Theme and language controls')}
            className="flex items-center gap-2"
        >
            <motion.button
                type="button"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => updateAppearance(isDark ? 'light' : 'dark')}
                aria-label={
                    isDark
                        ? t('Switch to light mode')
                        : t('Switch to dark mode')
                }
                className="grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-stone-300 bg-white/75 text-stone-700 shadow-sm backdrop-blur transition-colors hover:border-stone-500 dark:border-white/15 dark:bg-stone-900/75 dark:text-stone-200 dark:hover:border-white/30"
            >
                <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                        key={isDark ? 'sun' : 'moon'}
                        initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                        transition={{
                            type: 'spring',
                            stiffness: 280,
                            damping: 20,
                        }}
                    >
                        {isDark ? (
                            <Sun className="h-4 w-4" />
                        ) : (
                            <Moon className="h-4 w-4" />
                        )}
                    </motion.span>
                </AnimatePresence>
            </motion.button>

            <motion.button
                type="button"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => onLanguageChange(nextLanguage)}
                aria-label={
                    language === 'en'
                        ? t('Switch to Bangla')
                        : t('Switch to English')
                }
                className="h-10 min-w-12 overflow-hidden rounded-full border border-stone-300 bg-white/75 px-3 text-xs font-bold tracking-wide text-stone-700 shadow-sm backdrop-blur transition-colors hover:border-stone-500 dark:border-white/15 dark:bg-stone-900/75 dark:text-stone-200 dark:hover:border-white/30"
            >
                <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                        key={language}
                        initial={{ opacity: 0, y: 12, rotateX: -55 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        exit={{ opacity: 0, y: -12, rotateX: 55 }}
                        transition={{
                            type: 'spring',
                            stiffness: 260,
                            damping: 22,
                        }}
                        className="block"
                    >
                        {language === 'en' ? 'EN' : 'বাং'}
                    </motion.span>
                </AnimatePresence>
            </motion.button>
        </div>
    );
}

function Navbar({
    language,
    onLanguageChange,
    t,
}: {
    language: Language;
    onLanguageChange: (language: Language) => void;
    t: Translate;
}) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setScrolled(latest > 28);
    });

    return (
        <motion.header
            initial={{ y: -96, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...springTransition, delay: 0.05 }}
            className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
                scrolled
                    ? 'border-stone-200/80 bg-stone-50/90 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-stone-950/90'
                    : 'border-transparent bg-transparent'
            }`}
        >
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                <a
                    href="#top"
                    aria-label={t('Go to the top of the page')}
                    className="group flex items-center gap-3"
                >
                    <span className="h-11 w-11 overflow-hidden rounded-full border border-stone-200 bg-stone-100 shadow-sm transition-transform duration-300 group-hover:scale-105 dark:border-white/10 dark:bg-stone-800">
                        <img
                            src={`${assetPath}/portrait.jpg`}
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </span>
                    <span>
                        <span className="block font-serif text-sm font-semibold text-stone-950 dark:text-white">
                            {t('Dr. Sunsila Jabrin Priyanka')}
                        </span>
                        <span className="block text-xs text-stone-500 dark:text-stone-400">
                            {t('Sherpur–1 Constituency')}
                        </span>
                    </span>
                </a>

                <nav
                    aria-label={t('Primary navigation')}
                    className="hidden items-center gap-7 xl:flex"
                >
                    {navigation.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="relative text-sm font-medium text-stone-600 transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-emerald-700 after:transition-all hover:text-stone-950 hover:after:w-full dark:text-stone-300 dark:after:bg-emerald-300 dark:hover:text-white"
                        >
                            {t(item.label)}
                        </a>
                    ))}
                </nav>

                <div className="hidden items-center gap-2 xl:flex">
                    <NavbarControls
                        language={language}
                        onLanguageChange={onLanguageChange}
                        t={t}
                    />
                    <Link
                        href={login()}
                        prefetch
                        className="rounded-full border border-stone-300 px-4 py-2.5 text-sm font-semibold text-stone-800 transition duration-300 hover:-translate-y-0.5 hover:border-stone-500 hover:bg-white dark:border-white/15 dark:text-stone-200 dark:hover:border-white/30 dark:hover:bg-stone-900"
                    >
                        {t('Login')}
                    </Link>
                    <a
                        href="#contact"
                        className="group flex items-center gap-2 rounded-full bg-stone-950 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-900"
                    >
                        {t('Contact Office')}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                <button
                    type="button"
                    aria-label={t(menuOpen ? 'Close menu' : 'Open menu')}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setMenuOpen((open) => !open)}
                    className="grid h-11 w-11 place-items-center rounded-full border border-stone-300 bg-white/80 text-stone-900 xl:hidden dark:border-white/15 dark:bg-stone-900/80 dark:text-white"
                >
                    {menuOpen ? (
                        <X className="h-5 w-5" />
                    ) : (
                        <Menu className="h-5 w-5" />
                    )}
                </button>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -24, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -16, scale: 0.98 }}
                        transition={springTransition}
                        className="border-t border-stone-200 bg-stone-50/95 px-4 py-5 shadow-xl backdrop-blur-xl xl:hidden dark:border-white/10 dark:bg-stone-950/95"
                    >
                        <motion.nav
                            id="mobile-navigation"
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            aria-label={t('Mobile navigation')}
                            className="container mx-auto grid gap-2"
                        >
                            {navigation.map((item) => (
                                <motion.a
                                    key={item.href}
                                    variants={slideRight}
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium text-stone-800 transition hover:bg-white dark:text-stone-200 dark:hover:bg-stone-900"
                                >
                                    {t(item.label)}
                                    <ChevronRight className="h-4 w-4" />
                                </motion.a>
                            ))}
                            <motion.div
                                variants={fadeUp}
                                className="mt-3 grid grid-cols-2 gap-2 border-t border-stone-200 px-4 pt-5 dark:border-white/10"
                            >
                                <Link
                                    href={login()}
                                    prefetch
                                    onClick={() => setMenuOpen(false)}
                                    className="flex min-h-11 items-center justify-center rounded-full border border-stone-300 px-4 text-sm font-semibold text-stone-800 transition hover:bg-white dark:border-white/15 dark:text-stone-200 dark:hover:bg-stone-900"
                                >
                                    {t('Login')}
                                </Link>
                                <a
                                    href="#contact"
                                    onClick={() => setMenuOpen(false)}
                                    className="flex min-h-11 items-center justify-center rounded-full bg-stone-950 px-4 text-center text-sm font-semibold text-white transition hover:bg-emerald-900 dark:bg-emerald-800 dark:hover:bg-emerald-700"
                                >
                                    {t('Contact Office')}
                                </a>
                            </motion.div>
                            <motion.div
                                variants={fadeUp}
                                className="mt-3 flex items-center justify-between px-4 pt-2"
                            >
                                <span className="text-xs font-semibold tracking-wide text-stone-500 uppercase dark:text-stone-400">
                                    {t('Theme and language controls')}
                                </span>
                                <NavbarControls
                                    language={language}
                                    onLanguageChange={onLanguageChange}
                                    t={t}
                                />
                            </motion.div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

function Hero({ t }: { t: Translate }) {
    const shouldReduceMotion = useReducedMotion();
    const isDesktop = useDesktopMotion();
    const [activeSlide, setActiveSlide] = useState(0);
    const [isHeroHovered, setIsHeroHovered] = useState(false);
    const { scrollY } = useScroll();
    const rawParallax = useTransform(
        scrollY,
        [0, 900],
        [0, isDesktop ? 140 : 32],
    );
    const parallax = useSpring(rawParallax, {
        stiffness: 80,
        damping: 24,
    });
    const visualScale = useTransform(scrollY, [0, 700], [1, 0.96]);
    const rawBackgroundParallax = useTransform(
        scrollY,
        [0, 900],
        [0, isDesktop ? 90 : 24],
    );
    const backgroundParallax = useSpring(rawBackgroundParallax, {
        stiffness: 70,
        damping: 26,
    });

    useEffect(() => {
        if (shouldReduceMotion || isHeroHovered) {
            return;
        }

        const slideInterval = window.setInterval(() => {
            setActiveSlide(
                (currentSlide) => (currentSlide + 1) % heroSlides.length,
            );
        }, 7000);

        return () => window.clearInterval(slideInterval);
    }, [isHeroHovered, shouldReduceMotion]);

    return (
        <section
            id="top"
            onMouseEnter={() => setIsHeroHovered(true)}
            onMouseLeave={() => setIsHeroHovered(false)}
            className="relative isolate overflow-hidden bg-stone-50 pt-32 pb-20 sm:pt-36 lg:min-h-screen lg:pt-40 lg:pb-24 dark:bg-stone-950"
        >
            <motion.div
                aria-hidden="true"
                style={{ y: shouldReduceMotion ? 0 : backgroundParallax }}
                className="pointer-events-none absolute inset-0 -z-20 overflow-hidden bg-stone-200"
            >
                <AnimatePresence initial={false}>
                    <motion.img
                        key={heroSlides[activeSlide]}
                        src={heroSlides[activeSlide]}
                        alt=""
                        initial={{
                            opacity: 0,
                            scale: 1.04,
                            x: activeSlide % 2 === 0 ? -18 : 18,
                        }}
                        animate={{
                            opacity: 1,
                            scale: isHeroHovered ? 1.08 : 1.14,
                            x: 0,
                        }}
                        exit={{ opacity: 0, scale: 1.16 }}
                        transition={{
                            opacity: { duration: 1.4, ease: 'easeInOut' },
                            scale: { duration: 8, ease: 'linear' },
                            x: { duration: 8, ease: 'easeOut' },
                        }}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-linear-to-r from-stone-50/95 via-stone-50/85 to-stone-950/55 dark:from-stone-950/95 dark:via-stone-950/85 dark:to-stone-950/60" />
                <div className="absolute inset-0 bg-stone-50/10 dark:bg-stone-950/20" />
            </motion.div>

            <div className="absolute -top-24 right-0 -z-10 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />
            <div className="absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-amber-100/70 blur-3xl" />

            <div className="container mx-auto grid items-center gap-14 px-4 md:px-6 lg:grid-cols-12 lg:gap-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="lg:col-span-7"
                >
                    <motion.div
                        variants={slideLeft}
                        className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-800/15 bg-white/80 px-4 py-2 text-xs font-semibold tracking-wide text-emerald-800 uppercase shadow-sm backdrop-blur dark:border-emerald-300/20 dark:bg-stone-900/80 dark:text-emerald-300"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:animate-none" />
                            <span className="relative h-2 w-2 rounded-full bg-emerald-600" />
                        </span>
                        {t('In service of Sherpur–1')}
                    </motion.div>

                    <motion.h1
                        variants={slideLeft}
                        className="max-w-4xl font-serif text-5xl leading-none font-semibold tracking-tight text-stone-950 sm:text-6xl lg:text-7xl dark:text-white"
                    >
                        {t('Progress, shaped with people at the centre.')}
                    </motion.h1>

                    <motion.p
                        variants={slideRight}
                        className="mt-7 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl dark:text-stone-300"
                    >
                        {t(
                            'A modern public-service platform connecting community priorities, visible action, and a more hopeful future for every family in Sherpur.',
                        )}
                    </motion.p>

                    <motion.div
                        variants={slideUp}
                        className="mt-9 flex flex-col gap-3 sm:flex-row"
                    >
                        <motion.div
                            whileHover={{ y: -4, scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                href={login()}
                                prefetch
                                className="flex items-center justify-center rounded-full bg-emerald-900 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-emerald-950/15"
                            >
                                {t('Login')}
                            </Link>
                        </motion.div>
                        <motion.a
                            whileHover={{ y: -4, scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            href="#contact"
                            className="group flex items-center justify-center gap-3 rounded-full border border-stone-300 bg-white/70 px-7 py-4 text-sm font-semibold text-stone-900 backdrop-blur dark:border-white/15 dark:bg-stone-900/70 dark:text-white"
                        >
                            {t('Contact Office')}
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </motion.a>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-stone-200 pt-6 dark:border-white/10"
                    >
                        {[
                            ['People first', 'Our principle'],
                            ['Always open', 'Our promise'],
                            ['Sherpur–1', 'Our home'],
                        ].map(([value, label]) => (
                            <div key={value}>
                                <p className="font-serif text-lg font-semibold text-stone-950 dark:text-white">
                                    {t(value)}
                                </p>
                                <p className="text-xs text-stone-500 dark:text-stone-400">
                                    {t(label)}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={scaleIn}
                    style={{
                        y: shouldReduceMotion ? 0 : parallax,
                        scale: shouldReduceMotion ? 1 : visualScale,
                    }}
                    className="relative mx-auto w-full max-w-lg lg:col-span-5"
                >
                    <div className="absolute -inset-5 -z-10 rotate-3 rounded-3xl border border-emerald-900/10 bg-emerald-900/5" />
                    <motion.div
                        whileHover={{ rotate: -1, scale: 1.01 }}
                        className="relative overflow-hidden rounded-3xl border border-white/60 bg-stone-200 shadow-2xl shadow-stone-900/20"
                    >
                        <img
                            src={`${assetPath}/portrait-office.jpg`}
                            alt={t(
                                'Dr. Sunsila Jabrin Priyanka meeting with the community',
                            )}
                            fetchPriority="high"
                            className="aspect-4/5 w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-stone-950/70 via-transparent to-transparent" />
                        <div className="absolute right-6 bottom-6 left-6 text-white">
                            <p className="text-xs font-semibold tracking-widest text-emerald-200 uppercase">
                                {t('Public service')}
                            </p>
                            <p className="mt-2 font-serif text-2xl font-semibold">
                                {t('Leadership begins by listening.')}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={
                            shouldReduceMotion
                                ? undefined
                                : { y: [0, -12, 0], rotate: [0, 1.5, 0] }
                        }
                        transition={{
                            duration: 5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: 'easeInOut',
                        }}
                        className="absolute -top-8 -right-2 rounded-2xl border border-stone-200 bg-white/90 p-4 shadow-xl backdrop-blur sm:-right-8 dark:border-white/10 dark:bg-stone-900/90"
                    >
                        <div className="flex items-center gap-3">
                            <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-100 text-emerald-800">
                                <MapPin className="h-5 w-5" />
                            </span>
                            <div>
                                <p className="text-xs text-stone-500 dark:text-stone-400">
                                    {t('Constituency')}
                                </p>
                                <p className="text-sm font-semibold text-stone-900 dark:text-white">
                                    {t('Sherpur–1')}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

function FooterLinkColumn({
    title,
    links,
    t,
}: {
    title: string;
    links: { label: string; href: string }[];
    t: Translate;
}) {
    return (
        <motion.nav variants={fadeUp} aria-label={title}>
            <h2 className="text-sm font-semibold tracking-wide text-white">
                {title}
            </h2>
            <ul className="mt-3 space-y-1">
                {links.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className="inline-flex min-h-9 items-center py-1 text-sm text-stone-400 transition-colors hover:text-emerald-200 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-950 focus-visible:outline-none"
                        >
                            {t(item.label)}
                        </a>
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
}

function FooterContactLink({
    href,
    label,
    icon: Icon,
    children,
}: {
    href: string;
    label: string;
    icon: LucideIcon;
    children: ReactNode;
}) {
    return (
        <a
            href={href}
            aria-label={label}
            className="flex min-h-9 items-center gap-3 transition-colors hover:text-emerald-200 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-950 focus-visible:outline-none"
        >
            <Icon
                className="size-4 shrink-0 text-emerald-300"
                aria-hidden="true"
            />
            <span>{children}</span>
        </a>
    );
}

function FooterUtilityLink({
    href,
    children,
}: {
    href: string;
    children: ReactNode;
}) {
    return (
        <a
            href={href}
            className="inline-flex min-h-11 items-center transition-colors hover:text-emerald-200 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-950 focus-visible:outline-none"
        >
            {children}
        </a>
    );
}

export default function Welcome() {
    const shouldReduceMotion = useReducedMotion();
    const [language, setLanguage] = useState<Language>(() => {
        if (typeof window === 'undefined') {
            return 'en';
        }

        return window.localStorage.getItem('language') === 'bn' ? 'bn' : 'en';
    });
    const { scrollYProgress } = useScroll();
    const progressScale = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001,
    });

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const updateLanguage = (nextLanguage: Language): void => {
        setLanguage(nextLanguage);
        window.localStorage.setItem('language', nextLanguage);
    };

    const t: Translate = (value) => {
        return language === 'bn' ? (banglaTranslations[value] ?? value) : value;
    };

    return (
        <MotionConfig reducedMotion="user">
            <Head
                title={`${t('Dr. Sunsila Jabrin Priyanka')} — ${t('Sherpur–1 Constituency')}`}
            />

            <div
                className={`landing-page overflow-x-clip bg-stone-50 text-stone-800 transition-colors duration-500 dark:bg-stone-950 dark:text-stone-200 ${language === 'bn' ? 'font-bangla' : ''}`}
            >
                {!shouldReduceMotion && (
                    <motion.div
                        style={{ scaleX: progressScale }}
                        className="fixed top-0 right-0 left-0 z-50 h-0.5 origin-left bg-emerald-700"
                    />
                )}

                <Navbar
                    language={language}
                    onLanguageChange={updateLanguage}
                    t={t}
                />
                <main>
                    <Hero t={t} />

                    <section
                        data-section="trust"
                        aria-label={t('Constituency commitment')}
                        className="border-y border-stone-200 bg-white py-7 dark:border-white/10 dark:bg-stone-900"
                    >
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.7 }}
                            variants={staggerContainer}
                            className="container mx-auto flex flex-col items-center justify-between gap-5 px-4 md:flex-row md:px-6"
                        >
                            <motion.p
                                variants={slideLeft}
                                className="text-center text-xs font-semibold tracking-widest text-stone-500 uppercase md:text-left dark:text-stone-400"
                            >
                                {t('One constituency · one shared direction')}
                            </motion.p>
                            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold text-stone-700 dark:text-stone-300">
                                {[
                                    'Sherpur Sadar',
                                    'Community first',
                                    'Visible progress',
                                    'Open dialogue',
                                ].map((item) => (
                                    <motion.span
                                        key={item}
                                        variants={fadeUp}
                                        className="flex items-center gap-2"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                                        {t(item)}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </section>

                    <section
                        id="vision"
                        data-section="features"
                        className="container mx-auto px-4 py-24 md:px-6 lg:py-32"
                    >
                        <SectionHeading
                            eyebrow={t('Our priorities')}
                            title={t(
                                'Public service designed around real life.',
                            )}
                            description={t(
                                'A focused agenda for the systems people rely on every day—built with clarity, care, and measurable intent.',
                            )}
                        />

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            variants={staggerContainer}
                            className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
                        >
                            {priorities.map((priority) => {
                                const Icon = priority.icon;

                                return (
                                    <motion.article
                                        key={priority.title}
                                        variants={fadeUp}
                                        whileHover={{ y: -10, scale: 1.03 }}
                                        className="group relative overflow-hidden rounded-3xl border border-stone-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl dark:border-white/10 dark:bg-stone-900"
                                    >
                                        <div className="flex items-start justify-between">
                                            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-800 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                                                <Icon className="h-6 w-6" />
                                            </span>
                                            <span className="font-serif text-sm text-stone-300">
                                                {priority.number}
                                            </span>
                                        </div>
                                        <h3 className="mt-10 font-serif text-2xl font-semibold text-stone-950 dark:text-white">
                                            {t(priority.title)}
                                        </h3>
                                        <p className="mt-3 leading-7 text-stone-600 dark:text-stone-400">
                                            {t(priority.description)}
                                        </p>
                                        <ArrowRight className="mt-7 h-5 w-5 text-emerald-800 transition-transform duration-300 group-hover:translate-x-2" />
                                    </motion.article>
                                );
                            })}
                        </motion.div>
                    </section>

                    <section
                        id="initiatives"
                        data-section="bento"
                        className="border-y border-stone-200 bg-white py-24 lg:py-32 dark:border-white/10 dark:bg-stone-900"
                    >
                        <div className="container mx-auto px-4 md:px-6">
                            <SectionHeading
                                eyebrow={t('Bento of progress')}
                                title={t(
                                    'Work you can see. Outcomes you can feel.',
                                )}
                                description={t(
                                    'A living view of constituency priorities moving from commitment to meaningful action.',
                                )}
                            />

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                variants={staggerContainer}
                                className="mt-14 grid gap-5 md:grid-cols-12"
                            >
                                {initiatives.map((initiative, index) => (
                                    <motion.article
                                        key={initiative.title}
                                        variants={
                                            index % 2 === 0
                                                ? slideLeft
                                                : slideRight
                                        }
                                        whileHover={{ y: -8, scale: 1.03 }}
                                        className={`group relative min-h-96 overflow-hidden rounded-3xl bg-stone-900 shadow-lg ${initiative.className}`}
                                    >
                                        <img
                                            src={initiative.image}
                                            alt=""
                                            loading="lazy"
                                            className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:translate-x-2 group-hover:scale-110 group-hover:grayscale-0 motion-reduce:transition-none"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-stone-950 via-stone-950/35 to-transparent" />
                                        <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-9">
                                            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold tracking-wide uppercase">
                                                <span className="rounded-full bg-white/15 px-3 py-1.5 backdrop-blur">
                                                    {t(initiative.category)}
                                                </span>
                                                <span className="text-emerald-200">
                                                    {t(initiative.status)}
                                                </span>
                                            </div>
                                            <h3 className="mt-4 font-serif text-3xl font-semibold">
                                                {t(initiative.title)}
                                            </h3>
                                            <p className="mt-3 max-w-xl leading-7 text-stone-200">
                                                {t(initiative.description)}
                                            </p>
                                        </div>
                                    </motion.article>
                                ))}
                            </motion.div>
                        </div>
                    </section>

                    <section
                        id="about"
                        data-section="about"
                        className="container mx-auto grid items-center gap-14 px-4 py-24 md:px-6 lg:grid-cols-12 lg:py-32"
                    >
                        <Reveal variants={slideLeft} className="lg:col-span-5">
                            <motion.div
                                whileHover={{ rotate: 1.5, scale: 1.02 }}
                                className="group relative"
                            >
                                <div className="absolute -inset-4 -z-10 -rotate-3 rounded-3xl bg-emerald-900" />
                                <div className="overflow-hidden rounded-3xl bg-stone-200 shadow-2xl">
                                    <img
                                        src={`${assetPath}/portrait.jpg`}
                                        alt={t('Dr. Sunsila Jabrin Priyanka')}
                                        loading="lazy"
                                        className="aspect-4/5 w-full object-cover grayscale transition duration-700 group-hover:translate-y-1 group-hover:scale-105 group-hover:grayscale-0 motion-reduce:transition-none"
                                    />
                                </div>
                                <motion.div
                                    whileHover={{ x: 6 }}
                                    className="absolute -right-4 -bottom-8 max-w-64 rounded-2xl border border-stone-200 bg-white p-5 shadow-xl sm:-right-8 dark:border-white/10 dark:bg-stone-900"
                                >
                                    <Quote className="h-5 w-5 text-emerald-800" />
                                    <p className="mt-3 font-serif text-lg font-semibold text-stone-950 dark:text-white">
                                        {t('People first, always.')}
                                    </p>
                                </motion.div>
                            </motion.div>
                        </Reveal>

                        <div className="lg:col-span-7 lg:pl-12">
                            <SectionHeading
                                eyebrow={t('Your representative')}
                                title={t('About Dr. Sunsila Jabrin Priyanka')}
                                description={t(
                                    'Dr. Sunsila Jabrin Priyanka is a physician, politician, and public representative dedicated to serving the people of Sherpur through grassroots engagement and public service.',
                                )}
                            />
                            <Reveal variants={slideRight}>
                                <h3 className="mt-9 text-xs font-semibold tracking-widest text-emerald-700 uppercase dark:text-emerald-300">
                                    {t('Political Identity')}
                                </h3>
                            </Reveal>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.4 }}
                                variants={staggerContainer}
                                className="mt-4 grid gap-4 sm:grid-cols-2"
                            >
                                {aboutDetails.map((detail) => {
                                    const Icon = detail.icon;

                                    return (
                                        <motion.div
                                            key={detail.title}
                                            variants={fadeUp}
                                            className="rounded-2xl border border-stone-200 bg-white p-5 dark:border-white/10 dark:bg-stone-900"
                                        >
                                            <Icon className="h-5 w-5 text-emerald-800" />
                                            <p className="mt-4 font-semibold text-stone-950 dark:text-white">
                                                {t(detail.title)}
                                            </p>
                                            <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                                                {t(detail.text)}
                                            </p>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </section>

                    <section
                        data-section="process"
                        className="overflow-hidden bg-emerald-950 py-24 text-white lg:py-32"
                    >
                        <div className="container mx-auto px-4 md:px-6">
                            <SectionHeading
                                eyebrow={t('The operating model')}
                                title={t('Listen. Design. Deliver.')}
                                description={t(
                                    'A simple, disciplined process keeps community voices connected to decisions and results.',
                                )}
                                inverted
                            />

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={staggerContainer}
                                className="relative mt-14 grid gap-5 lg:grid-cols-3"
                            >
                                <div className="absolute top-12 right-20 left-20 hidden h-px bg-emerald-700 lg:block" />
                                {process.map((step, index) => {
                                    const Icon = step.icon;

                                    return (
                                        <motion.article
                                            key={step.title}
                                            variants={
                                                index === 1 ? scaleIn : fadeUp
                                            }
                                            whileHover={{
                                                y: -10,
                                                scale: 1.03,
                                                rotate: index - 1,
                                            }}
                                            className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
                                        >
                                            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-300 text-emerald-950 shadow-lg">
                                                <Icon className="h-6 w-6" />
                                            </span>
                                            <p className="mt-9 text-xs font-semibold tracking-widest text-emerald-300 uppercase">
                                                {t('Step')} 0{index + 1}
                                            </p>
                                            <h3 className="mt-3 font-serif text-3xl font-semibold">
                                                {t(step.title)}
                                            </h3>
                                            <p className="mt-3 leading-7 text-emerald-100/70">
                                                {t(step.description)}
                                            </p>
                                        </motion.article>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </section>

                    <section
                        data-section="stats"
                        className="container mx-auto px-4 py-20 md:px-6 lg:py-24"
                    >
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.35 }}
                            variants={staggerContainer}
                            className="grid overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-xl md:grid-cols-4 dark:border-white/10 dark:bg-stone-900"
                        >
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;

                                return (
                                    <motion.div
                                        key={stat.label}
                                        variants={
                                            index % 2 === 0 ? slideUp : scaleIn
                                        }
                                        whileHover={{ scale: 1.03 }}
                                        className="border-stone-200 p-7 text-center md:border-l md:first:border-l-0 dark:border-white/10"
                                    >
                                        <Icon className="mx-auto h-5 w-5 text-emerald-700" />
                                        <p className="mt-4 font-serif text-4xl font-semibold text-stone-950 dark:text-white">
                                            {stat.value}
                                        </p>
                                        <p className="mt-2 text-xs font-semibold tracking-wide text-stone-500 uppercase dark:text-stone-400">
                                            {t(stat.label)}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </section>

                    <section
                        data-section="testimonials"
                        className="border-y border-stone-200 bg-white py-24 lg:py-32 dark:border-white/10 dark:bg-stone-900"
                    >
                        <div className="container mx-auto px-4 md:px-6">
                            <SectionHeading
                                eyebrow={t('Community voices')}
                                title={t('Progress is personal.')}
                                description={t(
                                    'The clearest measure of public service is how it changes everyday life.',
                                )}
                                align="center"
                            />
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={staggerContainer}
                                className="mt-14 grid gap-5 lg:grid-cols-3"
                            >
                                {testimonials.map((testimonial, index) => (
                                    <motion.figure
                                        key={testimonial.role}
                                        variants={
                                            index === 1 ? slideUp : fadeUp
                                        }
                                        whileHover={{
                                            y: -8,
                                            scale: 1.03,
                                            rotate: index - 1,
                                        }}
                                        className="rounded-3xl border border-stone-200 bg-stone-50 p-8 dark:border-white/10 dark:bg-stone-950"
                                    >
                                        <Quote className="h-7 w-7 text-emerald-700" />
                                        <blockquote className="mt-8 font-serif text-2xl leading-9 font-medium text-stone-900 dark:text-stone-100">
                                            “{t(testimonial.quote)}”
                                        </blockquote>
                                        <figcaption className="mt-8 border-t border-stone-200 pt-5 dark:border-white/10">
                                            <p className="text-sm font-semibold text-stone-900 dark:text-white">
                                                {t(testimonial.role)}
                                            </p>
                                            <p className="mt-1 text-xs text-stone-500 dark:text-stone-400">
                                                {t(testimonial.location)}
                                            </p>
                                        </figcaption>
                                    </motion.figure>
                                ))}
                            </motion.div>
                        </div>
                    </section>

                    <section
                        id="leadership"
                        data-section="leadership"
                        className="container mx-auto px-4 py-24 md:px-6 lg:py-32"
                    >
                        <SectionHeading
                            eyebrow={t('Our legacy')}
                            title={t(
                                'Our Inspiring Leadership Throughout History',
                            )}
                            description={t(
                                'A tradition of conviction, resilience, and service that continues to shape the road ahead.',
                            )}
                        />
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.12 }}
                            variants={staggerContainer}
                            className="mt-14 grid gap-5 md:grid-cols-3"
                        >
                            {leaders.map((leader) => (
                                <motion.article
                                    key={leader.name}
                                    variants={leader.direction}
                                    whileHover={{ y: -10, scale: 1.03 }}
                                    className="group relative isolate overflow-hidden rounded-3xl bg-stone-900 shadow-xl"
                                >
                                    <img
                                        src={leader.image}
                                        alt={`${t('Portrait of')} ${t(leader.name)}`}
                                        loading="lazy"
                                        className="aspect-4/5 w-full object-cover grayscale transition duration-700 group-hover:-translate-y-2 group-hover:scale-110 group-hover:grayscale-0 motion-reduce:transition-none"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-stone-950 via-stone-950/5 to-transparent" />
                                    <div className="absolute right-6 bottom-6 left-6">
                                        <p className="text-xs font-semibold tracking-widest text-emerald-200 uppercase">
                                            {t('Leadership legacy')}
                                        </p>
                                        <h3 className="mt-2 font-serif text-2xl font-semibold text-white">
                                            {t(leader.name)}
                                        </h3>
                                    </div>
                                </motion.article>
                            ))}
                        </motion.div>
                    </section>

                    <section
                        id="contact"
                        data-section="cta"
                        className="container mx-auto px-4 pb-24 md:px-6 lg:pb-32"
                    >
                        <Reveal variants={scaleIn}>
                            <div className="relative isolate overflow-hidden rounded-3xl bg-stone-950 px-6 py-16 text-center text-white shadow-2xl sm:px-12 lg:py-24">
                                <img
                                    src={`${assetPath}/cta-bg.jpg`}
                                    alt=""
                                    loading="lazy"
                                    className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25"
                                />
                                <div className="absolute inset-0 -z-10 bg-linear-to-br from-emerald-950/95 to-stone-950/90" />
                                <motion.div
                                    animate={
                                        shouldReduceMotion
                                            ? undefined
                                            : {
                                                  rotate: [0, 6, 0],
                                                  scale: [1, 1.08, 1],
                                              }
                                    }
                                    transition={{
                                        duration: 8,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: 'easeInOut',
                                    }}
                                    className="absolute -top-20 -right-16 -z-10 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl"
                                />
                                <p className="text-xs font-semibold tracking-widest text-emerald-300 uppercase">
                                    {t('The next chapter is shared')}
                                </p>
                                <h2 className="mx-auto mt-5 max-w-4xl font-serif text-4xl leading-tight font-semibold sm:text-5xl lg:text-6xl">
                                    {t(
                                        'Let’s build a stronger Sherpur, together.',
                                    )}
                                </h2>
                                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-300">
                                    {t(
                                        'Share an idea, raise a concern, or connect with the constituency office. Every meaningful change begins with a conversation.',
                                    )}
                                </p>
                                <motion.a
                                    whileHover={{ y: -5, scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    href="mailto:office@example.com"
                                    className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-stone-950 shadow-xl"
                                >
                                    {t('Start a conversation')}
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </motion.a>
                            </div>
                        </Reveal>
                    </section>
                </main>

                <footer className="relative overflow-hidden border-t border-emerald-800/70 bg-linear-to-br from-emerald-950 via-emerald-950 to-stone-950 text-white">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={staggerContainer}
                        className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-8 px-4 py-8 md:grid-cols-2 md:px-6 xl:grid-cols-4"
                    >
                        <motion.div variants={fadeUp}>
                            <p className="font-serif text-2xl font-semibold tracking-tight text-white">
                                {t('Dr. Sunsila Jabrin Priyanka')}
                            </p>
                            <p className="mt-3 text-sm font-semibold text-emerald-200">
                                {t('Honorable Member of Parliament')}
                            </p>
                            <p className="mt-1 text-sm text-stone-300">
                                {t('Reserved Women’s Seat | Sherpur-1')}
                            </p>
                            <p className="mt-4 max-w-sm text-sm leading-6 text-stone-400">
                                {t(
                                    'Dedicated to transparent, inclusive public service and meaningful progress for every community in Sherpur.',
                                )}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-3">
                                {socialLinks.map((item) => {
                                    const SocialIcon = item.icon;

                                    return (
                                        <motion.a
                                            key={item.label}
                                            href={item.href}
                                            aria-label={t(item.label)}
                                            whileHover={{ y: -3, scale: 1.08 }}
                                            whileTap={{ scale: 0.94 }}
                                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-stone-200 transition-colors hover:border-emerald-300/50 hover:bg-emerald-400/15 hover:text-white focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-950 focus-visible:outline-none"
                                        >
                                            <SocialIcon
                                                className="h-4 w-4"
                                                aria-hidden="true"
                                            />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>

                        <FooterLinkColumn
                            title={t('Quick Links')}
                            links={quickLinks}
                            t={t}
                        />
                        <FooterLinkColumn
                            title={t('Important Links')}
                            links={importantLinks}
                            t={t}
                        />

                        <motion.div variants={fadeUp}>
                            <h2 className="text-sm font-semibold tracking-wide text-white">
                                {t('Contact Information')}
                            </h2>
                            <address className="mt-3 space-y-3 text-sm text-stone-400 not-italic">
                                <div className="flex gap-3">
                                    <MapPin className="mt-0.5 size-4 shrink-0 text-emerald-300" />
                                    <span className="leading-6">
                                        {t(
                                            'Constituency Office, Sherpur Sadar, Sherpur, Bangladesh',
                                        )}
                                    </span>
                                </div>
                                <FooterContactLink
                                    href="tel:+8800000000000"
                                    label={`${t('Phone')}: +880 1XXX-XXXXXX`}
                                    icon={Phone}
                                >
                                    +880 1XXX-XXXXXX
                                </FooterContactLink>
                                <FooterContactLink
                                    href="mailto:office@example.com"
                                    label={`${t('Email')}: office@example.com`}
                                    icon={Mail}
                                >
                                    office@example.com
                                </FooterContactLink>
                                <FooterContactLink
                                    href="#top"
                                    label={t('Official Website')}
                                    icon={Globe2}
                                >
                                    {t('Official Website')}
                                </FooterContactLink>
                                <div className="flex gap-3">
                                    <Clock3 className="mt-0.5 size-4 shrink-0 text-emerald-300" />
                                    <span>{t('Office hours · Sun–Thu')}</span>
                                </div>
                            </address>
                        </motion.div>
                    </motion.div>

                    <div className="border-t border-white/10">
                        <div className="container mx-auto flex flex-col gap-5 px-4 py-6 md:px-6 lg:flex-row lg:items-center lg:justify-between">
                            <p className="text-sm leading-6 text-stone-400">
                                {t(
                                    '© 2026 Dr. Sunsila Jabrin Priyanka. All Rights Reserved.',
                                )}
                            </p>
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-stone-400">
                                <FooterUtilityLink href="#privacy-policy">
                                    {t('Privacy Policy')}
                                </FooterUtilityLink>
                                <FooterUtilityLink href="#terms-and-conditions">
                                    {t('Terms & Conditions')}
                                </FooterUtilityLink>
                                <motion.a
                                    href="#top"
                                    aria-label={t('Back to top')}
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.94 }}
                                    className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 px-4 text-sm font-semibold text-white transition-colors hover:border-emerald-300/50 hover:bg-emerald-400/15 focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-950 focus-visible:outline-none"
                                >
                                    <ArrowUp
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </MotionConfig>
    );
}
