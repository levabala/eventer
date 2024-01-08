import type { UserId } from '../user/user';
import type { EventCategory, EventId, EventName } from './eventCategory';

export type EventRecord = {
    id: EventId;
    name: EventName | null;
    category: EventCategory | null;
    date: Date;
    owner: UserId;
};
