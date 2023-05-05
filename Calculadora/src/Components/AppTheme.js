import { StyleSheet, useColorScheme } from "react-native"
import colors from "./Colors";

export default function AppTheme() {
    const isDarkModeOn = useColorScheme() === "dark"

    function autoStyle(styleOnDarkMode, styleOnLightMode) {
        return isDarkModeOn ? (styleOnDarkMode || colors.white246) : (styleOnLightMode || colors.black39)
    }

    const presetStyle = {
        "bgColor": [
            autoStyle(colors.black39, colors.white214),
            autoStyle(colors.black26, colors.gray143),
            autoStyle(colors.black19, colors.gray104),
            autoStyle(colors.black27, colors.white235),
            autoStyle(colors.gray58, colors.white246)
        ],
        "borderColor": [
            colors.gray80,
            colors.gray143,
            autoStyle(colors.gray80, colors.white216)
        ],
    }

    return {
        "isDarkModeOn": isDarkModeOn,
        "autoStyleFunction": autoStyle,
        "presetStyle": presetStyle,
        "style": StyleSheet.create({
            autoTheme: {
                color: autoStyle(),
                backgroundColor: presetStyle.bgColor[3],
                borderColor: autoStyle()
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
        }),
    }
}
