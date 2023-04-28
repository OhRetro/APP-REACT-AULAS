import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import CalculatorV1 from "./Components/Screens/CalculatorV1/CalculatorV1"
import CalculatorV2 from "./Components/Screens/CalculatorV2/CalculatorV2"

function App() {
    return ( 
        <NavigationContainer>
            <CalculatorV2/>
        </NavigationContainer>
    )
}

export default App