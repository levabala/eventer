/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { STORYBOOK_ON } from '@env';

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainPage } from './src/pages/MainPage';
import { RootStackParamList } from './src/pages/types';

import Storybook from './.storybook';
import { NavigationContainerThemed } from './src/theme/NavigationContainerThemed';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
    return (
        <NavigationContainerThemed>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={MainPage} />
            </Stack.Navigator>
        </NavigationContainerThemed>
    );
}

function AppStorybook() {
    return (
        <NavigationContainerThemed>
            <Storybook />
        </NavigationContainerThemed>
    );
}

const currentExport = STORYBOOK_ON === 'true' ? AppStorybook : App;

export default currentExport;
