import React from 'react';
import { Stack, createStackScreen } from "./ScreenStacker"
import AppTheme from './AppTheme';
import OperationsScreen from './Screens/OperationsScreen';

export default () => {
    const theme = AppTheme()
    const autoStyle = theme.autoStyleFunction
    const presetStyle = theme.presetStyle

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: presetStyle.bgColor[0]},
                headerTintColor: autoStyle()
            }}
        >
            {createStackScreen(OperationsScreen, "Operations", "V2")}
        </Stack.Navigator>
    )
}