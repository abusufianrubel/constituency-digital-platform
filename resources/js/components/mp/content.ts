export const A = '/images/mp';

export const nav = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'constituency', label: 'Constituency' },
    { id: 'initiatives', label: 'Initiatives' },
    { id: 'news', label: 'News' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
] as const;

export type Initiative = {
    status: 'Completed' | 'Ongoing' | 'Planned';
    image: string;
    category: string;
    title: string;
    location: string;
    description: string;
};

export const initiatives: Initiative[] = [
    {
        status: 'Completed',
        image: `${A}/initiative-1.jpg`,
        category: 'Education',
        title: 'School Infrastructure Support',
        location: 'Sherpur Sadar',
        description:
            'Upgrading school facilities to create better learning environments.',
    },
    {
        status: 'Ongoing',
        image: `${A}/initiative-2.jpg`,
        category: 'Community Health',
        title: 'Community Health Support',
        location: 'Nalitabari',
        description:
            'Supporting local health centers and health awareness programs.',
    },
    {
        status: 'Ongoing',
        image: `${A}/initiative-3.jpg`,
        category: 'Infrastructure',
        title: 'Rural Road Improvement',
        location: 'Jhenaigati',
        description:
            'Improving rural connectivity and transportation infrastructure.',
    },
    {
        status: 'Planned',
        image: `${A}/initiative-4.jpg`,
        category: 'Youth',
        title: 'Youth Skills Development',
        location: 'Nakla',
        description:
            'Creating opportunities through skills training and development.',
    },
];

export const updates = [
    {
        tag: 'Parliament',
        date: 'May 20, 2024',
        title: 'Discussion on Rural Development in Parliament',
        text: 'Highlighted key issues and proposed solutions for rural development.',
    },
    {
        tag: 'Constituency',
        date: 'May 15, 2024',
        title: 'Visited Flood Affected Areas in Nalitabari',
        text: 'Met with affected families and assured all possible support.',
    },
    {
        tag: 'Development',
        date: 'May 10, 2024',
        title: 'New Road Project Approved for Jhenaigati',
        text: 'A major step towards better connectivity and growth.',
    },
    {
        tag: 'Community',
        date: 'May 05, 2024',
        title: 'Youth Meeting & Open Discussion',
        text: 'Listening to the aspirations and ideas of young people.',
    },
];

export const gallery = [1, 2, 3, 4, 5].map((n) => `${A}/community-${n}.jpg`);

export const leaders = [
    {
        name: 'Shaheed President Ziaur Rahman',
        image: `${A}/leader-ziaur-rahman.jpg`,
    },
    { name: 'Begum Khaleda Zia', image: `${A}/leader-khaleda-zia.jpg` },
    { name: 'Tarique Rahman', image: `${A}/leader-tarique-rahman.jpg` },
];

/** Placeholders: replace with verified figures before launch. */
export const stats = [
    { label: 'Sessions attended', value: '00+' },
    { label: 'Unions covered', value: '00+' },
    { label: 'Projects & programs', value: '00+' },
    { label: 'People benefited', value: '00+' },
];
