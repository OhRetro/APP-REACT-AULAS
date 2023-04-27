import React from 'react';
import { Text } from 'react-native';
import Estilo from './Estilo';

export default ({min, max}) => { 
    const delta = max - min
    const random = parseInt(Math.random() * delta) + min
    return (
        <Text style={Estilo.txtG}>
            O valor aleatorio é {random}
        </Text> 
    )
}