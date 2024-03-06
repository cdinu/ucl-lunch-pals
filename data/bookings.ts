import { atom } from 'jotai';

type Booking = {
    id: string;
    datetime: string;
    eatery_id: number;
    user_id: number;
};

export const bookingsAtom = atom<Booking[]>([]);

