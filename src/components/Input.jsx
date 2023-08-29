import { View, Text, TextInput } from "react-native";

function Input({ placeholder }) {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        style={{ 
            backgroundColor: '#f2f2f2',
            height: 50,
            borderRadius: 30,
            width: 300,
        }} />
    </View>
  );
}

export default Input;
