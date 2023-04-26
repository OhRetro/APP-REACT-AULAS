import React from "react";
import { View, StyleSheet } from "react-native";
import Quadrado from "./Quadrado";

export default props => {
    return (
        <View style={style.FlexV1}>
            <Quadrado cor="brown"/>
            <Quadrado cor="pink"/>
            <Quadrado cor="yellow"/>
            <Quadrado cor="green"/>
            <Quadrado cor="red"/>
            <Quadrado cor="gray"/>
            <Quadrado cor="blue"/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flexGrow: 1,
        justifyContent: "space-around",
        backgroundColor: "white"
    }
})