import { View } from "react-native";
import Entradas from "./Entradas";
import Saidas from "./Saidas";

function Balanco({ entradas, saidas }) {
    return(
        <View style={{flexDirection:"row", justifyContent:"space-around"}}>
            <Entradas entradas={entradas} />
            <Saidas saidas={saidas} />
        </View>
    );
}

export default Balanco;