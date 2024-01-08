/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { STORYBOOK_ON } from '@env';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Storybook from './.storybook';
import { MainPage } from './src/pages/MainPage';
import type { RootStackParamList } from './src/pages/types';

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
