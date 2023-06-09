import React from "react";
import { Text, FlatList } from "react-native";
import Estilo from "../Estilo";
import produtos from "./Produtos";

export default props => {
    const produtoRender = ({item: p}) => {
        return <Text> {p.id} {p.nome} - R$ {p.valor}</Text>
    }
    return (
        <>
            <Text style={Estilo.txtG}>
                Lista de Produtos V2
            </Text>
            <FlatList
                data={produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={produtoRender}
            />
        </>
    )
}