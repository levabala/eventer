import type React from 'react';

import type { Theme } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { ThemeDark, ThemeLight } from './themes';

export const NavigationContainerThemed: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    const scheme = useColorScheme();
    const theme = scheme === 'dark' ? ThemeDark : ThemeLight;

    return (
        // @react-navigation does not support theme type overriding
        <NavigationContainer theme={theme as unknown as Theme}>
            {children}
        </NavigationContainer>
    );
};
