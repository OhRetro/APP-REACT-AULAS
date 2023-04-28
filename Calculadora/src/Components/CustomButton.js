import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default props => {
    return (
        <TouchableOpacity style={props.buttonStyle} onPress={props.onPress}>
            <Text style={props.textStyle}>{props.title}</Text>
        </TouchableOpacity>
    );
};
