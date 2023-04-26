import React from "react";
import { View, StyleSheet } from "react-native";
import Quadrado from "./Quadrado";

export default props => {
    return (
        <View style={style.FlexV2}>
            <Quadrado cor="brown"/>
            <Quadrado cor="pink"/>
            <Quadrado cor="yellow"/>
            <Quadrado cor="green"/>
            <Quadrado cor="red"/>
            <Quadrado cor="gray"/>
            <Quadrado cor="lightblue"/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        flex: 1,
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000"
    }
})