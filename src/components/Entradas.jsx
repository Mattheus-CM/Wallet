import { Image, Text, View } from "react-native";

function Entradas({ entradas }) {
  return (
    <View style={{flexDirection: "row",}}>
      <View
        style={{
          borderRadius: 50,
          width: 48,
          height: 48,
          backgroundColor: "#00FF00",
        }}
      >
        <Image
          style={{
            width: 48,
            height: 48,
            resizeMode: "contain",
          }}
          source={require("../../assets/pra-cima.png")}
        />
      </View>

      <View>
        <Text>Entradas</Text>
        <Text style={{color: '#00FF00'}}>{entradas}</Text>
      </View>
    </View>
  );
}

export default Entradas;
