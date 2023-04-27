import React, { useState } from "react";
import { View, Text, Button, TextInput, Alert} from "react-native";
import { Picker } from "@react-native-picker/picker";
import AppStyle from "../AppStyle";

function calculator(num1, num2, operation) {
    switch (operation) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        throw new Error(`Operação fora da Lis: ${operation}`);
    }
}

export default function SumScreen({ navigation }) {
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [operation, setOperation] = useState("+")
    const [result, setResult] = useState("");
    
    const calculate = () => {
        if (!num1 || !num2) {
          Alert.alert("Ambos os Campos devem está Preenchidos.");
          return;
        }
    
        setResult(calculator(parseInt(num1), parseInt(num2), operation))
      };


    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

            <TextInput
                style={[AppStyle.txtG, AppStyle.border1, AppStyle.size1]}
                placeholder="Número"
                keyboardType="numeric"
                onChangeText={setNum1}
                value={num1}
            />
            <Picker
                selectedValue={operation}
                onValueChange={setOperation}
                style={[{ height: 50, width: "50%" }]}
            >
                <Picker.Item label="+ (Somar)" value="+" />
                <Picker.Item label="* (Multiplicar)" value="*" />
                <Picker.Item label="/ (Dividir)" value="/" />
                <Picker.Item label="- (Subtrair)" value="-" />
            </Picker>
            <TextInput
                style={[AppStyle.txtG, AppStyle.border1, AppStyle.size1]}
                placeholder="Número"
                keyboardType="numeric"
                onChangeText={setNum2}
                value={num2}
            />
            <Button style={[AppStyle.txtG, AppStyle.border1, AppStyle.size1]} title="Calcular" onPress={calculate} />
            <Text style={[AppStyle.txtG, AppStyle.border1, AppStyle.size1]}>{result}</Text>
        </View>
    );
}