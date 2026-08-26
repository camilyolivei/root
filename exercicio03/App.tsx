import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";

const indicadores = [
  {
    titulo: "Contas a Pagar",
    descricao: "Lorem ipsum dolor sit amet.",
  },
  {
    titulo: "Contas a Receber",
    descricao: "Lorem ipsum dolor sit amet.",
  },
  {
    titulo: "Investimentos",
    descricao: "Lorem ipsum dolor sit amet.",
  },
  {
    titulo: "Saldo no Banco",
    descricao: "Lorem ipsum dolor sit amet.",
  },
];

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.estiloTelaPrincipal}>
        <ScrollView
          style={styles.estiloAreaRolagem}
          contentContainerStyle={styles.estiloConteudoRolagem}
        >
          <View style={styles.estiloConteudoPrincipal}>
            <Text style={styles.estiloTituloPrincipal}>
              Missão 03: A Matriz Financeira
            </Text>
            <Text style={styles.estiloSubtituloPrincipal}>Dashboard</Text>

            <View style={styles.estiloPainelFinanceiro}>
              {indicadores.map((indicador) => (
                <View
                  key={indicador.titulo}
                  style={styles.estiloCartaoIndicador}
                >
                  <Text
                    style={styles.estiloTituloCartaoIndicador}
                    numberOfLines={1}
                  >
                    {indicador.titulo.toUpperCase()}
                  </Text>
                  <Text
                    style={styles.estiloDescricaoCartaoIndicador}
                    numberOfLines={1}
                  >
                    {indicador.descricao}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  estiloTelaPrincipal: {
    flex: 1,
    backgroundColor: "#17232f",
  },
  estiloAreaRolagem: {
    flex: 1,
  },
  estiloConteudoRolagem: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  estiloConteudoPrincipal: {
    flex: 1,
    maxWidth: 980,
    alignSelf: "center",
    paddingHorizontal: 24,
    paddingTop: 56,
  },
  estiloTituloPrincipal: {
    color: "#e7f1fb",
    fontSize: 32,
    fontWeight: "800",
    textAlign: "center",
    letterSpacing: 0,
  },
  estiloSubtituloPrincipal: {
    marginTop: 6,
    color: "#8ca9c5",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  estiloPainelFinanceiro: {
    marginTop: 42,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 28,
    padding: 28,
    borderWidth: 2,
    borderColor: "#901aa3",
    borderRadius: 12,
    backgroundColor: "#1d2c3a",
  },
  estiloCartaoIndicador: {
    minHeight: 132,
    padding: 24,
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#29404a",
  },
  estiloTituloCartaoIndicador: {
    color: "#f2f6fa",
    fontSize: 20,
    fontWeight: "800",
  },
  estiloDescricaoCartaoIndicador: {
    marginTop: 12,
    color: "#b8c9d5",
    fontSize: 16,
    lineHeight: 23,
  },
});
