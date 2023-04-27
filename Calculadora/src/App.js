import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './Components/Screens/HomeScreen';
import SumScreen from './Components/Screens/SumScreen';
import MultiplyScreen from './Components/Screens/MultiplyScreen'
import DivideScreen from './Components/Screens/DivideScreen';
import SubtractScreen from './Components/Screens/SubtractScreen'

const Stack = createNativeStackNavigator()

function createStackScreen(nome, display, screenClass) {
    return (
        <Stack.Screen name={nome} component={screenClass} options={{title: `Calculadora: ${display}`}}/>
    )
}

function App() {
    return ( 
        <NavigationContainer>
            <Stack.Navigator>
                {createStackScreen("Home", "Home", HomeScreen)}
                {createStackScreen("Sum", "Somar", SumScreen)}
                {createStackScreen("Multiply", "Multiplicar", MultiplyScreen)}
                {createStackScreen("Divide", "Dividir", DivideScreen)}
                {createStackScreen("Subtract", "Subtrair", SubtractScreen)}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App