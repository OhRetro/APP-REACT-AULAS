import * as React from 'react';
import { View, Button } from 'react-native';
import AppStyle from '../../AppStyle';

export default function HomeScreen({ navigation }) {
    function createButton(name, display) {
        return (
            <Button
                title={display}
                onPress={() => navigation.navigate({ name })}
            />
        )
    }

    return (
        <View style={[{flex: 1, alignItems: "center", justifyContent: "center"}, AppStyle.autoTheme]}>
            {createButton("Sum", "Somar")}
            {createButton("Multiply", "Multiplicar")}
            {createButton("Divide", "Dividir")}
            {createButton("Subtract", "Subtrair")}
        </View>
    );
}