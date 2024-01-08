import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import type { TypographyProps } from './Typography';
import { Typography } from './Typography';

const meta: Meta = {
    title: 'Typography',
    component: Typography,
};

export default meta;

export const Default: StoryObj<TypographyProps> = {
    render: () => (
        <View>
            <Typography variant="body">Body typography.</Typography>
            <Typography variant="body" color="secondary">
                Body typography secondary.
            </Typography>
            <Typography variant="header">Header typography.</Typography>
            <Typography variant="subheader">Subheader typography.</Typography>
        </View>
    ),
};
