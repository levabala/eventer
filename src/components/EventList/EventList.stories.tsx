import { Meta, StoryObj } from '@storybook/react-native';
import { EventList, EventListProps } from './EventList';
import { EventCategory } from '../../entities/event/eventCategory';

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
                id: '-1',
                name: 'Event -1',
                date: new Date(2022, 1, 5, 5, 10, 33),
                category: 'Walk' as EventCategory,
            },
            {
                id: '0',
                name: 'Event 0',
                date: new Date(2024, 1, 5, 5, 10, 33),
                category: 'Walk' as EventCategory,
            },
            {
                id: '1',
                name: 'Event 1',
                date: new Date(2024, 1, 6, 5, 10, 33),
                category: 'Shower' as EventCategory,
            },
            {
                id: '1.5',
                name: 'Event 1.5',
                date: new Date(2024, 1, 7, 2, 33, 33),
                category: 'Wake up' as EventCategory,
            },
            {
                id: '2',
                name: 'Very very very very long name, very long indeed',
                date: new Date(2024, 1, 7, 5, 10, 33),
                category: 'Breakfast' as EventCategory,
            },
            {
                id: '3',
                name: 'Very very very very long name, very long indeed, very very very very very',
                date: new Date(2024, 1, 7, 6, 12, 22),
                category: null,
            },
        ],
    },
};
