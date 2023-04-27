import React from "react";
import {View, StyleSheet} from "react-native";

export default props => {
    const size = props.size || 45

    return (
        <View style={{
            height: size,
            width: size,
            backgroundColor: props.cor || 'black'
            }}>     
        </View>
    )
}