export type Eatery = {
    id: number;
    name: string;
    tags: string[];
    image?: string;
    type: 'Casual' | 'Fast Food' | 'BYO';
    zone: number;
};

export const eateries: Eatery[] = [
    {
        id: 1001,
        name: 'Arret A Manger',
        tags: ['Desserts', 'Salads', 'Fast Food'],
        image: '/pret.png',
        type: 'Casual',
        zone: 0,
    },
    {
        id: 1002,
        name: 'Falafel Things',
        tags: ['Middle Eastern', 'Halal', 'Fast Food'],
        type: 'Fast Food',
        image: '/falafel.png',
        zone: 0,
    },
    {
        id: 1003,
        name: 'NEON',
        tags: ['Healthy', 'Salads', 'Fast Food'],
        zone: 0,
        type: 'Casual',
        image: 'https://leon.co/assets/images/logos/leon-black-square.svg',
    },
    {
        id: 3,
        name: 'Bidborough Ground Floor Kitchen',
        tags: ['Bring Your Own'],
        type: 'BYO',
        zone: 0,
    },
];