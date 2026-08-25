
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  Pressable,
  FlatList,
  View,
  Button
} from 'react-native';

import {
  SafeAreaView,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

export default function App() {

  const contatos = [
   { id: '1', foto: '1', nomeContato: 'Pet', mensagem: "Oi" },
{ id: '2', foto: '2', nomeContato: 'Luiz', mensagem: "Oi amor da minha vida" },
{ id: '3', foto: '3', nomeContato: 'Pai', mensagem: "Boa noite filha" },
{ id: '4', foto: '4', nomeContato: 'Mãe', mensagem: "Boa noite filha" },

{ id: '5', foto: '1', nomeContato: 'Pet', mensagem: "Oi" },
{ id: '6', foto: '2', nomeContato: 'Luiz', mensagem: "Oi amor da minha vida" },
{ id: '7', foto: '3', nomeContato: 'Pai', mensagem: "Boa noite filha" },
{ id: '8', foto: '4', nomeContato: 'Mãe', mensagem: "Boa noite filha" },

{ id: '9', foto: '1', nomeContato: 'Pet', mensagem: "Oi" },
{ id: '10', foto: '2', nomeContato: 'Luiz', mensagem: "Oi amor da minha vida" },
{ id: '11', foto: '3', nomeContato: 'Pai', mensagem: "Boa noite filha" },
{ id: '12', foto: '4', nomeContato: 'Mãe', mensagem: "Boa noite filha" },

{ id: '13', foto: '1', nomeContato: 'Pet', mensagem: "Oi" },
{ id: '14', foto: '2', nomeContato: 'Luiz', mensagem: "Oi amor da minha vida" },
{ id: '15', foto: '3', nomeContato: 'Pai', mensagem: "Boa noite filha" },
{ id: '16', foto: '4', nomeContato: 'Mãe', mensagem: "Boa noite filha" },

{ id: '17', foto: '1', nomeContato: 'Pet', mensagem: "Oi" },
{ id: '18', foto: '2', nomeContato: 'Luiz', mensagem: "Oi amor da minha vida" },
{ id: '19', foto: '3', nomeContato: 'Pai', mensagem: "Boa noite filha" },
{ id: '20', foto: '4', nomeContato: 'Mãe', mensagem: "Boa noite filha" },

{ id: '21', foto: '1', nomeContato: 'Pet', mensagem: "Oi" },
{ id: '22', foto: '2', nomeContato: 'Luiz', mensagem: "Oi amor da minha vida" },
{ id: '23', foto: '3', nomeContato: 'Pai', mensagem: "Boa noite filha" },
{ id: '24', foto: '4', nomeContato: 'Mãe', mensagem: "Boa noite filha" },

{ id: '25', foto: '1', nomeContato: 'Pet', mensagem: "Oi" },
{ id: '26', foto: '2', nomeContato: 'Luiz', mensagem: "Oi amor da minha vida" },
{ id: '27', foto: '3', nomeContato: 'Pai', mensagem: "Boa noite filha" },
{ id: '28', foto: '4', nomeContato: 'Mãe', mensagem: "Boa noite filha" },

{ id: '29', foto: '1', nomeContato: 'Pet', mensagem: "Oi" },
{ id: '30', foto: '2', nomeContato: 'Luiz', mensagem: "Oi amor da minha vida" },
{ id: '31', foto: '3', nomeContato: 'Pai', mensagem: "Boa noite filha" },
{ id: '32', foto: '4', nomeContato: 'Mãe', mensagem: "Boa noite filha" },

{ id: '33', foto: '1', nomeContato: 'Pet', mensagem: "Oi" },
{ id: '34', foto: '2', nomeContato: 'Luiz', mensagem: "Oi amor da minha vida" },
{ id: '35', foto: '3', nomeContato: 'Pai', mensagem: "Boa noite filha" },
{ id: '36', foto: '4', nomeContato: 'Mãe', mensagem: "Boa noite filha" },

{ id: '37', foto: '1', nomeContato: 'Pet', mensagem: "Oi" },
{ id: '38', foto: '2', nomeContato: 'Luiz', mensagem: "Oi amor da minha vida" },
{ id: '39', foto: '3', nomeContato: 'Pai', mensagem: "Boa noite filha" },
{ id: '40', foto: '4', nomeContato: 'Mãe', mensagem: "Boa noite filha" },

{ id: '41', foto: '2', nomeContato: 'Luiz', mensagem: "Oi amor da minha vida" },
{ id: '42', foto: '3', nomeContato: 'Pai', mensagem: "Boa noite filha" },
{ id: '43', foto: '4', nomeContato: 'Mãe', mensagem: "Boa noite filha" },
{ id: '44', foto: '1', nomeContato: 'Pet', mensagem: "Oi" },

{ id: '45', foto: '2', nomeContato: 'Luiz', mensagem: "Oi amor da minha vida" },
{ id: '46', foto: '3', nomeContato: 'Pai', mensagem: "Boa noite filha" },
{ id: '47', foto: '4', nomeContato: 'Mãe', mensagem: "Boa noite filha" },
{ id: '48', foto: '1', nomeContato: 'Pet', mensagem: "Oi" },

{ id: '49', foto: '2', nomeContato: 'Luiz', mensagem: "Oi amor da minha vida" },
{ id: '50', foto: '3', nomeContato: 'Pai', mensagem: "Boa noite filha" },
{ id: '51', foto: '4', nomeContato: 'Mãe', mensagem: "Boa noite filha" },
{ id: '52', foto: '1', nomeContato: 'Pet', mensagem: "Oi" },

{ id: '53', foto: '2', nomeContato: 'Luiz', mensagem: "Oi amor da minha vida" },
{ id: '54', foto: '3', nomeContato: 'Pai', mensagem: "Boa noite filha" },
{ id: '55', foto: '4', nomeContato: 'Mãe', mensagem: "Boa noite filha" },
{ id: '56', foto: '1', nomeContato: 'Pet', mensagem: "Oi" },

{ id: '57', foto: '2', nomeContato: 'Luiz', mensagem: "Oi amor da minha vida" },
{ id: '58', foto: '3', nomeContato: 'Pai', mensagem: "Boa noite filha" },
{ id: '59', foto: '4', nomeContato: 'Mãe', mensagem: "Boa noite filha" },
{ id: '60', foto: '1', nomeContato: 'Pet', mensagem: "Oi" },
  ];
  return (
    <SafeAreaProvider style={styles.relativo}>
      <SafeAreaView style={styles.backGroundTelaInteira}> 
        <FlatList
        
        data={contatos}
        keyExtractor={(contato) => contato.id}
        renderItem={({ item }) => (
          <View style={styles.conversa}>
            <Text>
              {item.foto}
            </Text>
            <Text>
              {item.nomeContato}
            </Text>
            <Text>
              {item.mensagem}
            </Text>
          </View>
        )}
      />
      <Pressable 
      style={styles.novaConversa}>
        <Text>Nova conversa</Text>
      </Pressable>
      

      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  relativo:{
    position:"relative",
    margin:30
  },
  backGroundTelaInteira: {
    flex: 1,
  },
  conversa:{
    flex:1,
    flexDirection:"row"
  },
  novaConversa:{
    position: "absolute",
    width:100,
    height:100,
    backgroundColor:'red',
    bottom:40,
    right:15,

  }
});