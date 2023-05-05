import React, { useState } from "react";
import { StatusBar } from 'react-native';
import { View, Text, TextInput, Alert} from "react-native";
import { createPicker } from "../PickerCreator";
import CustomButton from "../CustomButton";
import Calculator from "../MathOperations"
import AppTheme from "../AppTheme";

export default function OperationsScreen({ navigation }) {
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [operation, setOperation] = useState("+")
    const [result, setResult] = useState("Resultado");

    const theme = AppTheme()
    const autoStyle = theme.autoStyleFunction
    const style = theme.style
    const presetStyle = theme.presetStyle

    const calculate = () => {
        if (!num1 || !num2) {
            Alert.alert("Ambos os Campos devem está Preenchidos.");
            return;
        }

        const res = Calculator(operation, parseFloat(num1), parseFloat(num2))

        if (!res && res != 0 ) {
            Alert.alert("Operação Inválida");
            return;
        }

        setResult(res)
    };

    return (
        <View
            style={[
                { flex: 1, alignItems: "center", justifyContent: "center" },
                style.autoTheme
            ]}
        >
            <StatusBar 
                backgroundColor={presetStyle.bgColor[0]} 
                barStyle={autoStyle("light-content", "dark-content")}
            />
            <TextInput
                style={[
                    style.autoTheme,
                    {backgroundColor: presetStyle.bgColor[4]},
                    style.border,
                    {borderColor: presetStyle.borderColor[2]},
                    style.size1,
                    style.textBig,
                    style.textCentered,
                ]}
                placeholder="Número"
                keyboardType="numeric"
                onChangeText={setNum1}
                value={num1}
                placeholderTextColor={autoStyle()}
            />
            {createPicker(operation, setOperation, [
                    style.autoTheme,
                    {backgroundColor: presetStyle.bgColor[0]},
                    style.size1,
                ], [
                    ["+ (Somar)", "+", "somar"],
                    ["- (Subtrair)", "-", "subtrair"],
                    ["* (Multiplicar)", "*", "multiplicar"],
                    ["/ (Dividir)", "/", "dividir"],
                ]
            )}
            <TextInput
                style={[
                    style.autoTheme,
                    {backgroundColor: presetStyle.bgColor[4]},
                    style.border,
                    {borderColor: presetStyle.borderColor[2]},
                    style.size1,
                    style.textBig,
                    style.textCentered,
                ]}
                placeholder="Número"
                keyboardType="numeric"
                onChangeText={setNum2}
                value={num2}
                placeholderTextColor={autoStyle()}
            />
            <CustomButton
                buttonColor={autoStyle("purple", "green")}
                buttonStyle={[style.size1]}
                textStyle={[style.textBig]}
                title="Calcular"
                onPress={calculate}
            />
            <Text
                style={[
                    {backgroundColor: presetStyle.bgColor[0]},
                    style.border,
                    {borderColor: presetStyle.borderColor[0]},
                    style.size1,
                    style.textBig,
                    style.textCentered,
                    {color: autoStyle()}
                ]}
            >
                {result}
            </Text>
        </View>
    );
}