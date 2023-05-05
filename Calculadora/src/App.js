import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { Stack, createStackScreen } from "./Components/ScreenStacker"
import AppTheme from './Components/AppTheme';
import OperationsScreen from './Components/Screens/OperationsScreen';

function App() {
    const theme = AppTheme()
    const autoStyle = theme.autoStyleFunction
    const presetStyle = theme.presetStyle

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: presetStyle.bgColor[0] },
                    headerTintColor: autoStyle()
                }}
            >
                {createStackScreen(OperationsScreen, "Operations", "Calculadora")}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App