import { StyleSheet, useColorScheme } from "react-native"

const colorScheme = {
    "dark": [
        "rgb(10, 10, 10)",
        "rgb(39, 39, 39)",
        "rgb(26, 26, 26)",
        "rgb(19, 19, 19)",
        "rgb(80, 80, 80)",
        "rgb(58, 58, 58)",
        "rgb(27, 27, 27)"
    ],
    "light": [
        "rgb(235, 235, 235)",
        "rgb(214, 214, 214)",
        "rgb(143, 143, 143)",
        "rgb(104, 104, 104)",
        "rgb(216, 216, 216)",
        "rgb(246, 246, 246)"
    ]
}

function autoMainColor(isDarkModeOn) {
    return isDarkModeOn ? "white": "black"
}

export { autoMainColor }
export default function AppTheme() {
    const isDarkModeOn = useColorScheme() === "dark"

    return {
        "isDarkModeOn": isDarkModeOn,
        "Style": StyleSheet.create({
            autoTheme: {
                color: autoMainColor(isDarkModeOn),
                backgroundColor: isDarkModeOn ? colorScheme.dark[6] : colorScheme.light[0],
                borderColor: autoMainColor(isDarkModeOn)
            },
    
            bgColor1: {
                backgroundColor: isDarkModeOn ? colorScheme.dark[1] : colorScheme.light[1],
            },
    
            bgColor2: {
                backgroundColor: isDarkModeOn ? colorScheme.dark[2] : colorScheme.light[2],
            },
    
            bgColor3: {
                backgroundColor: isDarkModeOn ? colorScheme.dark[3] : colorScheme.light[3],
            },
    
            button1: {
                borderColor: isDarkModeOn ? colorScheme.dark[4] : colorScheme.light[4],
                backgroundColor: isDarkModeOn ? colorScheme.dark[5] : colorScheme.light[5],
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
                borderColor: "rgb(80, 80, 80)",
            },
    
            borderColor2: {
                borderColor: "rgb(143, 143, 143)",
            }
        }),
    }
    //return toReturn
}
