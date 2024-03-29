import { useTheme } from '@react-navigation/native';
import type { ButtonProps as ButtonOriginalProps } from 'react-native';
import { Button as ButtonOriginal } from 'react-native';

export type ButtonProps = ButtonOriginalProps;

export const Button: React.FC<ButtonProps> = props => {
    const theme = useTheme();

    return <ButtonOriginal color={theme.colors.primary} {...props} />;
};
