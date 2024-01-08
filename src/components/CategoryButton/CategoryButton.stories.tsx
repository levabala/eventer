import type { Meta, StoryObj } from '@storybook/react-native';
import type { EventCategory } from '../../entities/event/eventCategory';
import type { CategoryButtonProps } from './CategoryButton';
import { CategoryButton } from './CategoryButton';

const meta: Meta = {
    title: 'CategoryButton',
    component: CategoryButton,
};

export default meta;

export const Default: StoryObj<CategoryButtonProps> = {
    args: {
        category: 'shower' as EventCategory,
    },
};

export const NoCategory: StoryObj<CategoryButtonProps> = {
    args: {
        category: null,
    },
};
