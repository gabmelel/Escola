import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Álcool ou gasolina</Text>
            <Image style={styles.imagem}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text style={styles.texto}>Preço do etanol</Text>
       <TextInput
          style={styles.input}
          placeholder="valor"
          keyboardType="numeric"/>
      <StatusBar style="auto" />
      <Text  style={styles.texto}>Preço da gasolina</Text>
       <TextInput
          style={styles.input}
          placeholder="valor"
          keyboardType="numeric"/>
      <View style={{margin: 10}}>
        <Button style={styles.button}
          title="Verificar Vantagem"
          />
      </View>
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
    width: 290,
    height: 200,
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
  },
  button: {
    paddingVertical: 12
  }
});
