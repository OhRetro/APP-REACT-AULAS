import React from 'react';
import {Text, View} from 'react-native'
import Estilo from './Estilo';

export default ({num = 0}) => {
    //if (props.num % 2 === 0) {
    //    return (
    //        <Text style={Estilo.txtG}>Par</Text>
    //    )
    //} else {
    //    return (
    //        <Text style={Estilo.txtG}>Impar</Text>
    //    )
    //}
    <View>
        <Text style={Estilo.txtG}>O Resultado é: </Text>
        {
            num % 2 === 0
            ? <Text style={Estilo.txtG}>Par</Text>
            : <Text style={Estilo.txtG}>Impar</Text>
        }
    </View>
}