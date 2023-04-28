import React from 'react';
import { Stack, createStackScreen } from "../../ScreenStacker"
import AppStyle from '../../AppStyle';
import OperationsScreen from './OperationsScreen';

export default () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: [AppStyle.autoTheme, AppStyle.bgColor1],
                headerTintColor: [AppStyle.autoTheme]
            }}
        >
            {createStackScreen(OperationsScreen, "Operations", "V2")}
        </Stack.Navigator>
    )
}