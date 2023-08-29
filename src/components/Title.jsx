import { View, Text } from "react-native";

function Title({ content }) {
  return (
    <View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          width: 200,
          textAlign: "center",
        }}
      >
        {content}
      </Text>
    </View>
  );
}

export default Title;