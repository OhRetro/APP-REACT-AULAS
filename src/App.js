import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
//import FamiliaR from './Components/Relacao/Familia'
//import MembroR from './Components/Relacao/Membro';
//import ParImpar from './Components/ParImpar'
//import PaiI from './Components/Indireta/Pai'
//import Counter from './Components/Contador'
//import MinMax from './Components/MinMax'
//import RNG from './Components/Aleatorio'
//import Title from './Components/Titulo'
//import Botao from './Components/Botao'
//import Pri from './Components/Primeiro'
//import Test, { Component1, Component2 } from './Components/Multi'

function App() {
    return ( 
        <View style={styles.App}>
            {/*
            <FamiliaR>
                <MembroR nome="Naka" sobrenome="Zone"/>
                <MembroR nome="Zone" sobrenome="Naka"/>
            </FamiliaR>

            <FamiliaR>
                <MembroR nome="Naca" sobrenome="Zone"/>
                <MembroR nome="Zone" sobrenome="Naca"/>
            </FamiliaR>
           
            <ParImpar num={2}/>
            
            <PaiI/>
            
            <Counter start={100}/>
            
            <Title 
                main="Cadastro Produto" 
                alt="Tela de Cadastro"
            />
            <Botao/>
            
            <MinMax min="3" max="20"/>
            <MinMax min="1" max="94"/>
            <RNG min='1' max='10'/>

            <Text>{1+1}</Text>
            <Pri></Pri>
            <Pri></Pri>
            <Test></Test>
            <Component1></Component1>
            <Component2></Component2>
            */}
        </View> 
    )
}

const styles = StyleSheet.create({
    App: {
        backgroundColor: "white",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})

export default App