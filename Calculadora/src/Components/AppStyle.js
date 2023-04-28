import { StyleSheet, Appearance } from "react-native"

const isDarkMode = Appearance.getColorScheme() === "dark"

const colors = [10, 39, 26, 19, 80, 58]

function returnRGB(number) {
    return `rgb(${number}, ${number}, ${number})`
}
export { isDarkMode }

export default StyleSheet.create({
    autoTheme: [{
        backgroundColor: isDarkMode ? returnRGB(colors[0]) : returnRGB(colors[0]*5),
        borderColor: isDarkMode ? "white" : "black",
        color: isDarkMode ? "white" : "black",
    }],
    
    bgColor1: {
        backgroundColor: isDarkMode ? returnRGB(colors[1]) : returnRGB(colors[1]*4),
    },

    bgColor2: {
        backgroundColor: isDarkMode ? returnRGB(colors[2]) : returnRGB(colors[2]*4),
    },
    
    bgColor3: {
        backgroundColor: isDarkMode ? returnRGB(colors[3]) : returnRGB(colors[3]*4),
    },

    button1: {
        borderColor: isDarkMode ? returnRGB(colors[4]) : returnRGB(colors[4]*4),
        backgroundColor: isDarkMode ? returnRGB(colors[5]) : returnRGB(colors[5]*4),
        color: isDarkMode ? "white" : "black",
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
        borderColor: isDarkMode ? returnRGB(colors[4]) : returnRGB(colors[4]*3),
    }
})