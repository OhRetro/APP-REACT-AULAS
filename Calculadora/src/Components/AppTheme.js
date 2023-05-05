import { StyleSheet, useColorScheme } from "react-native"
import colors from "./Colors";

export default function AppTheme() {
    const isDarkModeOn = useColorScheme() === "dark"

    function autoStyleMode(styleOnDarkMode, styleOnLightMode) {
        return isDarkModeOn ? (styleOnDarkMode || colors.rgb245) : (styleOnLightMode || colors.rgb50)
    }

    const presetStyle = {
        "bgColor": [
            autoStyleMode(colors.rgb50, colors.rgb215),
            autoStyleMode(colors.rgb25, colors.rgb145),
            autoStyleMode(colors.rgb20, colors.rgb105),
            autoStyleMode(colors.rgb30, colors.rgb235),
            autoStyleMode(colors.rgb50, colors.rgb245)
        ],
        "borderColor": [
            colors.rgb80,
            colors.rgb145,
            autoStyleMode(colors.rgb80, colors.rgb215)
        ],
    }

    return {
        "isDarkModeOn": isDarkModeOn,
        "autoStyleMode": autoStyleMode,
        "presetStyle": presetStyle,
        "style": StyleSheet.create({
            autoTheme: {
                color: autoStyleMode(),
                backgroundColor: presetStyle.bgColor[3],
                borderColor: autoStyleMode()
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
