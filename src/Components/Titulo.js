import React from "react";
import {View, Text} from 'react-native'
import Estilo from "./Estilo";

export default props => (
    <React.Fragment>
        <Text style={Estilo.txtG}>{props.main}</Text>
        <Text>{props.alt}</Text>
    </React.Fragment>
)