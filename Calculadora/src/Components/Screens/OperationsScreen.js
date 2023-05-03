import React, { useState } from "react";
import { StatusBar } from 'react-native';
import { View, Text, TextInput, Alert } from "react-native";
import { createPicker } from "../PickerCreator";
import CustomButton from "../CustomButton";
import Calculator from "../MathOperations"
import AppTheme, {autoMainColor} from "../AppTheme";

export default function OperationsScreen({ navigation }) {
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [operation, setOperation] = useState("+")
    const [result, setResult] = useState("Resultado");

    const theme = AppTheme()
    const style = theme.Style
    const isDarkModeOn = theme.isDarkModeOn

    const calculate = () => {
        if (!num1 || !num2) {
            Alert.alert("Ambos os Campos devem está Preenchidos.");
            return;
        }

        setResult(Calculator(operation, parseInt(num1), parseInt(num2)))
    };

    return (
        <View
            style={[
                { flex: 1, alignItems: "center", justifyContent: "center" },
                style.autoTheme
            ]}
        >
            <StatusBar backgroundColor={isDarkModeOn ? "rgb(39, 39, 39)" : "rgb(214, 214, 214)"} barStyle={isDarkModeOn ? "light-content" : "dark-content"} />
            <TextInput
                style={[
                    style.autoTheme,
                    style.border,
                    style.borderColor2,
                    style.size1,
                    style.textBig,
                    style.textCentered,
                    style.bgColor1
                ]}
                placeholder="Número"
                keyboardType="numeric"
                onChangeText={setNum1}
                value={num1}
                placeholderTextColor={autoMainColor(isDarkModeOn)}
            />
            {createPicker(operation, setOperation,
                [style.autoTheme, style.size1, style.bgColor1],
                [
                    ["+ (Somar)", "+", "somar"],
                    ["- (Subtrair)", "-", "subtrair"],
                    ["* (Multiplicar)", "*", "multiplicar"],
                    ["/ (Dividir)", "/", "dividir"],
                ]
            )}
            <TextInput
                style={[
                    style.autoTheme,
                    style.border,
                    style.borderColor2,
                    style.size1,
                    style.textBig,
                    style.textCentered,
                    style.bgColor1
                ]}
                placeholder="Número"
                keyboardType="numeric"
                onChangeText={setNum2}
                value={num2}
                placeholderTextColor={autoMainColor(isDarkModeOn)}
            />
            <CustomButton
                buttonStyle={[style.size1, style.button1]}
                textStyle={[style.textCentered, style.textBig, {color: autoMainColor(isDarkModeOn)}]}
                title="Calcular"
                onPress={calculate}
            />
            <Text
                style={[
                    style.border,
                    style.size1,
                    style.textBig,
                    style.textCentered,
                    style.bgColor1,
                    style.borderColor1,
                    {color: autoMainColor(isDarkModeOn)}
                ]}
            >
                {result}
            </Text>
        </View>
    );
}