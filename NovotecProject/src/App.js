import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './Components/Screens/HomeScreen';
import DetailsScreen from './Components/Screens/DetailsScreen';

const Stack = createNativeStackNavigator()

function App() {
    return ( 
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{title: "Home Screen New"}}/>
                <Stack.Screen name="Details" component={DetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
        
    )
}

const styles = StyleSheet.create({
    App: {
        backgroundColor: "white",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})

export default App