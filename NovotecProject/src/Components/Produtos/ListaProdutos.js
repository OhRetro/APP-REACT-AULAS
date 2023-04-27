import React from "react";
import {Text} from 'react-native'
import Estilo from "../Estilo";
import Produtos from "./Produtos";

export default props => {
    function orderList() {
        return Produtos.map(p => {
            return (
                <Text key={p.id}>{p.id}) {p.nome} tem valor: R${p.valor}</Text>
            )
        })
    }
    return (
        <>
            <Text style={Estilo.txtG}>
                Lista de Produtos
            </Text>
            {orderList()}
        </>
    )
}