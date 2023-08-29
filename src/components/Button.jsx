import { TouchableOpacity, Text } from "react-native";

function Button({ content, onPress }) {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        backgroundColor: "#5B259F",
        padding: 25,
        borderRadius: 15,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 25,
          color: "#FFF",
        }}
      >
        {content}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;