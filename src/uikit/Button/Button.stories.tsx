import type { Meta, StoryObj } from '@storybook/react-native';
import type { ButtonProps } from './Button';
import { Button } from './Button';

const meta: Meta = {
    title: 'Button',
    component: Button,
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {
    args: { title: 'Button primary' },
};
