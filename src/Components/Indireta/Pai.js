import React, { useState } from 'react';
import Filho from './Filho'
import {Text} from 'react-native'

export default props => {
    const [num, setNum] = useState(0)
    function showValue(number) {
        setNum(number)
    }

    return (
        <>
            <Text>{num}</Text>
            <Filho min={1} max={60} function={showValue}/>
        </>
    )
}

