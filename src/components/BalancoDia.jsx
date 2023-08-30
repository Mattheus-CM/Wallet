import { Text, View } from "react-native";

function BalancoDia({ transferencia }) {
  return (
    <View>
      <Text>Sábado, 19</Text>
      <View style={{flexDirection: "row", justifyContent:"space-between"}}>
        <Text>Detalhe Transferência</Text>
        <Text>R$ {transferencia}</Text>
      </View>
    </View>
  );
}

export default BalancoDia;
