import { atom } from 'jotai';

type Booking = {
    id: number;
    created_at: string;
    eatery_id: number;
    person_id: number;
};

export const bookingsAtom = atom<Booking[]|null>(null);

