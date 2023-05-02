import React, { useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { createPicker } from "../../PickerCreator";
import CustomButton from "../../CustomButton";
import Calculator from "../../MathOperations"
import AppStyle from "../../AppStyle";

export default function OperationsScreen({ navigation }) {
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [operation, setOperation] = useState("+")
    const [result, setResult] = useState("Resultado");

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
                AppStyle.autoTheme
            ]}
        >
            <TextInput
                style={[
                    AppStyle.autoTheme,
                    AppStyle.border,
                    AppStyle.size1,
                    AppStyle.textBig,
                    AppStyle.textCentered,
                    AppStyle.bgColor1
                ]}
                placeholder="Número"
                keyboardType="numeric"
                onChangeText={setNum1}
                value={num1}
            />
            {createPicker(
                { operation },
                { setOperation },
                [AppStyle.size1, AppStyle.bgColor1],
                [
                    ["+ (Somar)", "+"],
                    ["* (Multiplicar)", "*"],
                    ["/ (Dividir)", "/"],
                    ["- (Subtrair)", "-"]
                ]

            )}
            <TextInput
                style={[
                    AppStyle.autoTheme,
                    AppStyle.border,
                    AppStyle.size1,
                    AppStyle.textBig,
                    AppStyle.textCentered,
                    AppStyle.bgColor1
                ]}
                placeholder="Número"
                keyboardType="numeric"
                onChangeText={setNum2}
                value={num2}
            />
            <CustomButton
                buttonStyle={[AppStyle.size1, AppStyle.button1]}
                textStyle={[AppStyle.textCentered, AppStyle.textBig]}
                title="Calcular"
                onPress={calculate}
            />
            <Text
                style={[
                    AppStyle.border,
                    AppStyle.size1,
                    AppStyle.textBig,
                    AppStyle.textCentered,
                    AppStyle.bgColor1,
                    AppStyle.borderColor1
                ]}
            >
                {result}
            </Text>
        </View>
    );
}