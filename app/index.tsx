import { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import ListaProdutos from "./Componentes/Adaptadores/ListaProdutos";
import axios from 'axios'
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  let [produtos, setProdutos] = useState([]);

  useEffect(() => {
    carregaProdutos();
  }, [])


  function carregaProdutos() {
    axios.get('https://api-docker-2t8m.onrender.com/api/produtos')
      .then((resp) => {
        setProdutos(resp.data);
      })

  }

  return (
    <View
      style={estilo.container}
    >
      <ListaProdutos produtos={produtos}></ListaProdutos>
      <Button title={"cadastrar"}
        onPress={() => { Tela_cadastro() }}></Button>

    </View>
  );

  function Tela_cadastro() {
    router.push('/cadastro');
  }
}



const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#f5f5f5",
    paddingStart: 20,

  },
  text: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  titulo: {
    color: "#000000",
    fontSize: 30,
    textAlign: "left",
    fontWeight: "bold"

  },


});