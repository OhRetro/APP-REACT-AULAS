import React, { useState } from "react";
import { View, Text, Button, TextInput, Alert } from "react-native";
import AppStyle from "../AppStyle";

export default function SumScreen({ navigation }) {
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [result, setResult] = useState('');
    
    const calculate = () => {
        if (!num1 || !num2) {
          Alert.alert("Ambos ou Um dos campos estão vazios.");
          return;
        }
    
        const sum = parseInt(num1) + parseInt(num2);
        setResult(sum)
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
            <Text style={AppStyle.txtG}>+</Text>
            <TextInput
                style={[AppStyle.txtG, AppStyle.border1, AppStyle.size1]}
                placeholder="Número"
                keyboardType="numeric"
                onChangeText={setNum2}
                value={num2}
            />
            <Button style={[AppStyle.txtG, AppStyle.border1, AppStyle.size1]} title="      =      " onPress={calculate} />
            <Text style={[AppStyle.txtG, AppStyle.border1, AppStyle.size1]}>{result}</Text>
        </View>
    );
}

