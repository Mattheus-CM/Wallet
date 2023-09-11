import { Text, View } from "react-native";
import Perfil from "../components/Perfil";

const Person = {
  nome: "Mattheus",
  imagem:
    "https://img.quizur.com/f/img62dc75c68ada20.76829981.jpeg?lastEdited=1658615257",
  saldo: 1234,
  entradas: 19.0,
  saidas: 4.5,
  balanco: [5, -4.5, 14],
};

function Profile() {
  return (
    <View>
      <Text>Tela Perfil</Text>
      <Perfil nome={Person.nome} imagem={Person.imagem} />
    </View>
  );
}

export default Profile;
