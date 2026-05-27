import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Button} from 'react-native';
import AppButton from './src/components/AppButton.js';
import ResultCard from './src/components/ResultCard.js';


export default function App() {
  const [etanol, definirEtanol] = useState('')
  const [gasolina, definirGasolina] = useState('')
  const [resultado, setResultado] = useState('')
  function calcularVantagem(etanol, gasolina) {
    const comparacao = etanol / gasolina
    if (comparacao <= 0.70) {
      return "Etanol vale mais a pena!"
    } 
    else {
      return "Gasolina vale mais a pena!"
    }
  }
  function verificar() {
    const resultado = calcularVantagem(etanol, gasolina)
    setResultado(resultado)
  }
  return (
     
    <View style={styles.container}>
      <Text style={styles.titulo}>Álcool ou gasolina</Text>
            <Image style={styles.imagem}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/5900/5900376.png',
        }} 
      />
      <Text style={styles.texto}>Preço do etanol</Text>
       <TextInput
          style={styles.input}
          placeholder="valor"
          keyboardType="numeric"
          value={etanol}
          onChangeText={definirEtanol}/> 
      <StatusBar style="auto" />
      <Text  style={styles.texto}>Preço da gasolina</Text>
       <TextInput
          style={styles.input}
          placeholder="valor"
          keyboardType="numeric"
          value={gasolina}
          onChangeText={definirGasolina}/>
      <AppButton
        title="verificar vantagem"
        onPress={verificar}
      />
      <ResultCard resultado={resultado} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titulo: {
    padding: 15,
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  texto: {
    color: 'white',
    padding: 5,
    fontSize: 13,
  },
  imagem: {
    width: 190,
    height: 190,
    resizeMode: 'stretch'
  
  },
  input: {
    width: "50%",
    height: 20,
    alignContent: 'left',
    alignItems: 'left',
    borderWidth: 1,
    margin:5,
    color: 'white',
    backgroundColor: '#2c2c2c',
    borderColor: '#464646',
  }
});