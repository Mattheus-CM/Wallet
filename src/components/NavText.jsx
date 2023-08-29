import { TouchableOpacity, Text, View } from "react-native";

function NavText({ content, link, onPress }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={{ color: "#BDBDBD", fontSize: 13 }}>{content}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={{ color: "#81C2FF", fontSize: 13 }}> {link}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default NavText;
