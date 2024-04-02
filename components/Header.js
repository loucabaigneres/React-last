import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import textStyles from "../styles/textStyles";
import headerStyles from "../styles/components/headerStyles";

const Header = ({ title, navigation }) => {
    return (
        <View style={headerStyles.header}>
            <Text style={textStyles.h1}>{title}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Parametres")}>
                <Ionicons
                    name={"settings"}
                    size={32}
                    style={headerStyles.headerIcon}
                />
            </TouchableOpacity>
        </View>
    );
};

const HeaderSecondary = ({ title }) => {
    return (
        <View style={headerStyles.headerSecondary}>
            <Text style={textStyles.h1}>{title}</Text>
        </View>
    );
};

export { Header, HeaderSecondary };
