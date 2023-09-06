import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
    Image,

} from 'react-native';
import { Header } from 'react-native-elements';
// importe algo chamado db de um arquivo chamado localdb.js
//passo 1


export default class App extends React.Component {

  // configurando o estado inicial do componente com algumas propriedades vazias que podem ser usadas para armazenar informações e atualizar a interface do usuário conforme necessário.
  //passo 2
 
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Macaquinho Fofo',
            style: { color: '#fff', fontSize: 20 },
          }}
        />


        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
        />
      //quando você pressiona o botão "IR", ele pega um texto que você digitou, procura informações relacionadas a esse texto em um banco de dados e exibe essas informações em algum lugar do aplicativo. É como se o botão fosse uma espécie de busca que mostra resultados com base no que você digitou.
      //passo 3
        <View>
          {this.state.chunks.map(item => {
            return (
              <TouchableOpacity>
              <Text style={styles.displayText}>{item}</Text>
              </TouchableOpacity>
              );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  }, 
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },
});
