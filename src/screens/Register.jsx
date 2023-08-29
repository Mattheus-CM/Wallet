import { View } from "react-native";
import Input from "../components/Input";
import Title from "../components/Title";
import Button from "../components/Button";
import NavText from "../components/NavText";

function Register({ navigation }) {
  const handleRegister = () => {
    navigation.navigate("Login");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Title content="Registre-se agora e começe a controlar todas as suas contas em um só lugar!" />
      <Input placeholder={"Username"} />
      <Input placeholder={"Email"} />
      <Input placeholder={"Password"} />
      <Button content="Registrar" onPress={handleRegister} />
      <NavText content={"Já possui conta?"} link={"Login"} onPress={handleRegister}/>
    </View>
  );
}

export default Register;
