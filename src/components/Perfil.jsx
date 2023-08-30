import { Text, TouchableOpacity, View } from "react-native";
import FotoPerfil from "./FotoPerfil";

function Perfil({ nome, imagem }) {
  return (
    <TouchableOpacity>
      <View style={{flexDirection: "row", justifyContent: "space-between"}}>
        <View>
            <Text>{nome}</Text>
            <Text>Ativo</Text>
        </View>
        <FotoPerfil imagem={imagem} />
      </View>
    </TouchableOpacity>
  );
}

export default Perfil;
