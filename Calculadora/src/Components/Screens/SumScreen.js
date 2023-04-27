import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import Style from '../Style';

export default function SumScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <TextInput
            style={Style.input}
            placeholder="Número"
            keyboardType="numeric"
        />
        <Text style={Style.txtG}>+</Text>
        <TextInput
            style={Style.input}
            placeholder="Número"
            keyboardType="numeric"
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      </View>
    );
}

