import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import Register from "./src/screens/Register";
import Profile from "./src/screens/Profile";
import Transferencia from "./src/screens/Transferencia";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Transferencia" component={Transferencia} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
