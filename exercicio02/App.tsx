
import {
  StyleSheet,
  Text,
  Pressable,
  FlatList,
  View,
  Image,
  TextInput
} from 'react-native';
import { useState } from 'react';


import {
  SafeAreaView,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [busca, setBusca] = useState('');

  const contatos = [
          { 
          id: '1', 
          foto: require('./assets/images/img01.png'),
          nomeContato: 'Ana', 
          mensagem: 'Amiga, você vai hoje?' 
        },

        { 
          id: '2', 
          foto: require('./assets/images/img02.png'),
          nomeContato: 'Luiza', 
          mensagem: 'Oi amiga, tudo bem?' 
        },

        { 
          id: '3', 
          foto: require('./assets/images/img03.png'),
          nomeContato: 'Mariana', 
          mensagem: 'Boa noite, filha ❤️' 
        },

        { 
          id: '4', 
          foto: require('./assets/images/img04.png'),
          nomeContato: 'Camila', 
          mensagem: 'Quando você chegar me avisa' 
        },

        { 
          id: '5', 
          foto: require('./assets/images/img05.png'),
          nomeContato: 'Beatriz', 
          mensagem: 'Amiga, vamos sair amanhã?' 
        },

        { 
          id: '6', 
          foto: require('./assets/images/img06.png'),
          nomeContato: 'Júlia', 
          mensagem: 'Estou com saudade de você ❤️' 
        },

        { 
          id: '7', 
          foto: require('./assets/images/img07.png'),
          nomeContato: 'Larissa', 
          mensagem: 'Você já fez o trabalho?' 
        },

        { 
          id: '8', 
          foto: require('./assets/images/img08.png'),
          nomeContato: 'Fernanda', 
          mensagem: 'Amiga, me liga quando puder' 
        },

        { 
          id: '9', 
          foto: require('./assets/images/img07.png'),
          nomeContato: 'Larissa', 
          mensagem: 'Você já fez o trabalho?' 
        },

        { 
          id: '10', 
          foto: require('./assets/images/img08.png'),
          nomeContato: 'Fernanda', 
          mensagem: 'Amiga, me liga quando puder' 
        }
  ];
  return (
    <SafeAreaProvider style={styles.telaPrincipal}>
      <View style={styles.cabecalho}>
        <SafeAreaView edges={["top"]} style={styles.conteudoCabecalho}>
          <View style={styles.linhaCabecalho}>
            <Text style={styles.titulo}>Conversas</Text>

            <View style={styles.grupoAcoes}>
              <Pressable style={styles.botaoAcao} accessibilityLabel="Abrir câmera">
                <Ionicons name="camera-outline" size={24} color="#000" />
              </Pressable>
              <Pressable style={styles.botaoAcao} accessibilityLabel="Mais opções">
                <Ionicons name="ellipsis-vertical" size={24} color="#000" />
              </Pressable>
            </View>
          </View>

          <View style={styles.barraPesquisa}>
            <Ionicons name="search-outline" size={21} color="#667" />
            <TextInput
              value={busca}
              onChangeText={setBusca}
              placeholder="Pesquisar"
              placeholderTextColor="#667"
              style={styles.inputPesquisa}
              accessibilityLabel="Pesquisar conversas"
            />
          </View>
        </SafeAreaView>

        </View>
      <SafeAreaView edges={["bottom"]} style={styles.areaPrincipal}>
        <FlatList
        
        data={contatos.filter((contato) =>
          contato.nomeContato.toLowerCase().includes(busca.toLowerCase())
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(contato) => contato.id}
        renderItem={({ item }) => (
          <View style={styles.linhaConversa}>
            
            <Image
            source={item.foto}
            style={styles.fotoContato}
            />
            <View>
              <Text style={styles.nomeDaConversa}>
              {item.nomeContato}
            </Text>
            <Text style={styles.mensagemDaConversa}>
              {item.mensagem}
            </Text>

            </View>
            
          </View>
        )}
      />
      <Pressable 
      style={styles.botaoNovaConversa}
      accessibilityLabel="Nova conversa">
        <Ionicons name="add" size={32} color="#fff" />
      </Pressable>
      

      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  telaPrincipal:{
    flex: 1,
    position:"relative",
  },
  areaPrincipal: {
    flex: 1,
    position: "relative",
  },
  barraPesquisa: {
    height: 42,
    marginHorizontal: 16,
    marginTop: 4,
    marginBottom: 12,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff9df",
    borderRadius: 12,
  },
  inputPesquisa: {
    flex: 1,
    height: "100%",
    marginLeft: 8,
    color: "#4a3b16",
    fontSize: 16,
  },
  linhaConversa:{
    flexDirection:"row",
    alignItems:"center",
    gap:14,
    borderBottomWidth:1,
    borderBottomColor:"#eee5b8",
    minHeight:82,
    paddingHorizontal:16,
    paddingVertical:10,
  },
  botaoNovaConversa:{
    position: "absolute",
    width:64,
    height:64,
    backgroundColor:'#d6a928',
    bottom:80,
    right:16,
    borderRadius:32,
    alignItems:"center",
    justifyContent:"center",

  },
  fotoContato:{
    objectFit:'cover',
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  cabecalho: {
    width: "100%",
    backgroundColor: "#f5f3cd",
  },
  conteudoCabecalho: {
    width: "100%",
    backgroundColor: "#f5f3cd",
  },
  linhaCabecalho: {
    minHeight: 58,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "700",
  },
  grupoAcoes: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  botaoAcao: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  nomeDaConversa: {
    fontSize: 17,
    fontWeight: "600",
  },
  mensagemDaConversa: {
    marginTop: 4,
    color: "#666",
    fontSize: 14,
  
  }
});