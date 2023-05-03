import React from 'react';

import { Stack, createStackScreen } from "./ScreenStacker"
import AppTheme, {autoMainColor} from './AppTheme';
import OperationsScreen from './Screens/OperationsScreen';

export default () => {
    const theme = AppTheme()
    const style = theme.Style
    const isDarkModeOn = theme.isDarkModeOn

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: [style.autoTheme, style.bgColor1],
                headerTintColor: autoMainColor(isDarkModeOn)
            }}
        >
            {createStackScreen(OperationsScreen, "Operations", "V2")}
        </Stack.Navigator>
    )
}