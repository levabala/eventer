import { Meta, StoryObj } from '@storybook/react-native';
import { Typography, TypographyProps } from './Typography';
import { View } from 'react-native';

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
