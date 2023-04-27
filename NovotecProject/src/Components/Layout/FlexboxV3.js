import React from "react";
import { View, StyleSheet } from "react-native";
import Quadrado from "./Quadrado";

export default props => {
    return (
        <View style={style.FlexV3}>
            <Quadrado size={10} cor="brown"/>
            <Quadrado size={20} cor="pink"/>
            <Quadrado size={30} cor="yellow"/>
            <Quadrado size={40} cor="green"/>
            <Quadrado size={50} cor="red"/>
            <Quadrado size={60} cor="gray"/>
            <Quadrado size={70} cor="blue"/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 350,
        width: "100%",
        backgroundColor: "#000"
    }
})