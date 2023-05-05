import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import colors from './Colors';

export default props => {
    const buttonColor = props.buttonColor || colors.blue_var1

    return (
        <TouchableOpacity 
            style={[
                {
                    borderColor: buttonColor,
                    backgroundColor: buttonColor,
                    padding: 3.5,
                    borderWidth: 4,
                    borderRadius: 3,
                    alignItems: "center",
                    justifyContent: "center"
                },
                props.style,
                props.buttonStyle
            ]} 
            onPress={props.onPress}
        >
            <Text 
                style={[
                    {
                        color: "white",
                        fontSize: 15,
                        textAlign: "center",
                    },
                    props.style,
                    props.textStyle
                ]}
            >{props.title.toUpperCase()}</Text>
        </TouchableOpacity>
    );
};
