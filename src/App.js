import React from 'react';
import { Text, View } from 'react-native'
import Pri from './Components/Primeiro'
import Test, { Component1, Component2 } from './Components/Multi'

function App() {
    return( 
    <View>
        <Text>{1+1}</Text>
        {/*<Pri></Pri>*/}
        <Pri></Pri>
        <Test></Test>
        <Component1></Component1>
        <Component2></Component2>
    </View> 
    )
}

export default App