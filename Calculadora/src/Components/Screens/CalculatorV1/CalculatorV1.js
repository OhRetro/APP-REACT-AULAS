import React from 'react';
import { Stack, createStacksScreens } from "../../ScreenStacker"
import HomeScreen from './HomeScreen';
import SumScreen from './SumScreen';
import MultiplyScreen from './MultiplyScreen'
import DivideScreen from './DivideScreen';
import SubtractScreen from './SubtractScreen'

export default () => {
    return (
        <Stack.Navigator>
            {createStacksScreens([
                [HomeScreen, "Home", "V1"],
                [SumScreen, "Sum", "Somar"],
                [MultiplyScreen, "Multiply", "Multiplicar"],
                [DivideScreen, "Divide", "Dividir"],
                [SubtractScreen, "Subtract", "Subtrair"]
            ])}
        </Stack.Navigator>
    )
}