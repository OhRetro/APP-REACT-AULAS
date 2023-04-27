import React from 'react';
import { Text } from 'react-native';
import Estilo from './Estilo';

export default (param) => { 
    console.warn(param);
    return (
        <Text style={Estilo.txtG}>
            O valor do {param.min} é maior que {param.max}
        </Text> 
    )
}