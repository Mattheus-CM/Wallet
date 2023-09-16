import { FlatList, Text, View } from "react-native";
import Perfil from "../components/Perfil";
import Saldo from "../components/Saldo";
import Balanco from "../components/Balanco";
import BalancoDia from "../components/BalancoDia";
import Transferencia from "./Transferencia";
import Profile from "./Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Person = {
  nome: "Mattheus",
  imagem:
    "https://img.quizur.com/f/img62dc75c68ada20.76829981.jpeg?lastEdited=1658615257",
  saldo: 1234,
  entradas: 19.0,
  saidas: 4.5,
  balanco: [5, -4.5, 14],
};

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <View>
      <Perfil nome={Person.nome} imagem={Person.imagem} />
      <Saldo saldo={Person.saldo} />
      <Balanco entradas={Person.entradas} saidas={Person.saidas} />
      {/* <FlatList
        data={Person.balanco}
        renderItem={({transferencia}) => <BalancoDia transferencia={transferencia} />}
      /> */}
      <BalancoDia transferencia={Person.balanco[0]} />
      <BalancoDia transferencia={Person.balanco[1]} />
      <BalancoDia transferencia={Person.balanco[2]} />

      
    </View>
  );
}

export default Home;