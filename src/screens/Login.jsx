import { View } from "react-native";
import Input from "../components/Input";
import Titulo from "../components/Titulo";
import Button from "../components/Button";
import NavText from "../components/NavText";

function Login({ navigation }) {

  const handleLogin = () => {
    navigation.navigate("Home");
  }

  const handleRegister = () => {
    navigation.navigate("Register");
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Titulo content="Bem Vindo ao MM-Wallet" />
      <Input placeholder={"Username"} />
      <Input placeholder={"Password"} />
      <Button content="Login" onPress={handleLogin} />
      <NavText content={"Ainda não tem conta?"} link={"Registrar"} onPress={handleRegister}/>
    </View>
  );
}

export default Login;