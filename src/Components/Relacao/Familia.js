import React from 'react';
import { Text } from 'react-native';
import Estilo from '../Estilo';

export default props => {
    return (
        <>
            <Text style={Estilo.txtG}>[Inicio] Membros da Família: </Text>
            {props.children}
            <Text style={Estilo.txtG}>[Fim] Membros da Família</Text>
        </>
    )
}