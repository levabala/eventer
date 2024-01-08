import type { Meta, StoryObj } from '@storybook/react-native';
import type {
    EventCategory,
    EventId,
    EventName,
} from '../../entities/event/eventCategory';
import type { UserId } from '../../entities/user/user';
import type { EventListProps } from './EventList';
import { EventList } from './EventList';

const meta: Meta = {
    title: 'EventList',
    component: EventList,
    parameters: {
        date: new Date(2024, 1, 7, 0, 0, 0, 0),
    },
};

export default meta;

export const Default: StoryObj<EventListProps> = {
    args: {
        eventList: [
            {
                id: '-1' as EventId,
                name: 'Event -1' as EventName,
                date: new Date(2022, 1, 5, 5, 10, 33),
                category: 'Walk' as EventCategory,
                owner: 'test user' as UserId,
            },
            {
                id: '0' as EventId,
                name: 'Event 0' as EventName,
                date: new Date(2024, 1, 5, 5, 10, 33),
                category: 'Walk' as EventCategory,
                owner: 'test user' as UserId,
            },
            {
                id: '1' as EventId,
                name: 'Event 1' as EventName,
                date: new Date(2024, 1, 6, 5, 10, 33),
                category: 'Shower' as EventCategory,
                owner: 'test user' as UserId,
            },
            {
                id: '1.5' as EventId,
                name: 'Event 1.5' as EventName,
                date: new Date(2024, 1, 7, 2, 33, 33),
                category: 'Wake up' as EventCategory,
                owner: 'test user' as UserId,
            },
            {
                id: '2' as EventId,
                name: 'Very very  as EventNamevery very long name, very long indeed' as EventName,
                date: new Date(2024, 1, 7, 5, 10, 33),
                category: 'Breakfast' as EventCategory,
                owner: 'test user' as UserId,
            },
            {
                id: '3' as EventId,
                name: 'Very very  as EventNamevery very long name, very long indeed, very very very very very' as EventName,
                date: new Date(2024, 1, 7, 6, 12, 22),
                category: null,
                owner: 'test user' as UserId,
            },
        ],
    },
};
