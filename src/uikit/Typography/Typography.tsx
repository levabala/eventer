import type React from 'react';

import { StyleSheet, Text } from 'react-native';
import { useStyleSheetThemed } from '../../theme/styleSheetThemed';
import type { ThemeExtended } from '../../theme/themes';

export type TypographyVariant = 'body' | 'header' | 'subheader';
export type TypographyColor = 'primary' | 'secondary';

const createStyles = (theme: ThemeExtended) => {
    return StyleSheet.create({
        body: {
            fontSize: 20,
        },
        header: {
            fontSize: 26,
            fontWeight: 'bold',
        },
        subheader: {
            fontSize: 22,
            fontWeight: 'bold',
        },
        primary: {
            color: theme.colors.text.primary,
        },
        secondary: {
            color: theme.colors.text.secondary,
        },
    });
};

export type TypographyProps = {
    variant?: TypographyVariant;
    color?: TypographyColor;
} & React.PropsWithChildren;

export const Typography: React.FC<TypographyProps> = ({
    variant = 'body',
    color = 'primary',
    children,
}) => {
    const styles = useStyleSheetThemed(createStyles);

    return <Text style={[styles[variant], styles[color]]}>{children}</Text>;
};
