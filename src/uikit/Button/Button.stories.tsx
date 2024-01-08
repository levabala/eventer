import { Meta, StoryObj } from '@storybook/react-native';
import { Button, ButtonProps } from './Button';

const meta: Meta = {
    title: 'Button',
    component: Button,
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {
    args: { title: 'Button primary' },
};
