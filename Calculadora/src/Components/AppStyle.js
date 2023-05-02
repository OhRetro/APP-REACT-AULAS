import React, { useState } from "react"
import { StyleSheet, Appearance } from "react-native"

const isDarkModeOn = Appearance.getColorScheme() === "dark"
//const [isDarkModeOn, setIsDarkModeOn] = useState(Appearance.getColorScheme() === "dark")


const colors = [10, 39, 26, 19, 80, 58]

function returnRGB(number) {
    return `rgb(${number}, ${number}, ${number})`
}
export { isDarkModeOn }

export default StyleSheet.create({
    autoTheme: [{
        backgroundColor: isDarkModeOn ? returnRGB(colors[0]) : returnRGB(colors[0]*23.5),
        borderColor: isDarkModeOn ? "white" : "black",
        color: isDarkModeOn ? "white" : "black",
    }],
    
    bgColor1: {
        backgroundColor: isDarkModeOn ? returnRGB(colors[1]) : returnRGB(colors[1]*5.5),
    },

    bgColor2: {
        backgroundColor: isDarkModeOn ? returnRGB(colors[2]) : returnRGB(colors[2]*5.5),
    },
    
    bgColor3: {
        backgroundColor: isDarkModeOn ? returnRGB(colors[3]) : returnRGB(colors[3]*5.5),
    },

    button1: {
        borderColor: isDarkModeOn ? returnRGB(colors[4]) : returnRGB(colors[4]*2.7),
        backgroundColor: isDarkModeOn ? returnRGB(colors[5]) : returnRGB(colors[5]*4.25),
        color: isDarkModeOn ? "white" : "black",
        borderRadius: 5,
        borderWidth: 4,
    },

    textBig: {
        fontSize: 32,
    },

    textCentered: {
        textAlign: "center",
    },
    
    size1: {
        height: 60,
        width: "85%",
        margin: 5,
    },

    border: {
        borderWidth: 4,
        borderRadius: 7,
        padding: 10,
    },

    borderColor1: {
        borderColor: isDarkModeOn ? returnRGB(colors[4]) : returnRGB(colors[4]),
    }
})