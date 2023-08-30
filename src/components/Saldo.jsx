import { Text, View } from "react-native";

function Saldo({ saldo }) {
    return(
        <View style={{alignItems:"center"}}>
            <Text>Seu saldo é {saldo}</Text>
        </View>
    );
}

export default Saldo;