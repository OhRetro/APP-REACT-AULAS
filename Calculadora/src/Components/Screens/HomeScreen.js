import * as React from 'react';
import { View, Button } from 'react-native';

export default function HomeScreen({navigation}) {
    function createButton(name, display) {
        return (
            <Button
                title={display}
                onPress={() => navigation.navigate({name})}
            />
        )
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {createButton("Operations", "Operações")}
        {createButton("Sum", "Somar")}
        {createButton("Multiply", "Multiplicar")}
        {createButton("Divide", "Dividir")}
        {createButton("Subtract", "Subtrair")}
      </View>
    );
  }