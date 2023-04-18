import React, { useState } from "react";
import {Text, Button} from 'react-native'
import Estilo from './Estilo'

export default props => {
    const [numero, setNum] = useState(props.start)

    const inc = () => setNum(numero + 1)
    const dec = () => setNum(numero - 1)

    return (
        <>
            <Text>{numero}</Text>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={dec}/>
        </>
    )
}