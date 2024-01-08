import { EventCategory } from './eventCategory';

export type EventRecord = {
    id: string;
    name: string | null;
    category: EventCategory | null;
    date: Date;
};
