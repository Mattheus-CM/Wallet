import { Image, Text, View } from "react-native";

function Saidas({ saidas }) {
  return (
    <View style={{flexDirection: "row",}}>
      <View
        style={{
          borderRadius: 50,
          width: 48,
          height: 48,
          backgroundColor: "#FF0000",
        }}
      >
        <Image
          style={{
            width: 48,
            height: 48,
            resizeMode: "contain",
          }}
          source={require("../../assets/pra-baixo.png")}
        />
      </View>

      <View>
        <Text>Saídas</Text>
        <Text style={{color: '#FF0000'}}>{saidas}</Text>
      </View>
    </View>
  );
}

export default Saidas;
