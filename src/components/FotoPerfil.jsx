import { Image, View } from "react-native";

function FotoPerfil({ imagem }) {
  return (
    <View>
      <Image
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          resizeMode: "contain",
        }}
        source={{
            uri: imagem
        }}
      />
    </View>
  );
}

export default FotoPerfil;
