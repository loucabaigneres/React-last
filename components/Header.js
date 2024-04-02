import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import textStyles from "../styles/textStyles";
import headerStyles from "../styles/components/headerStyles";

const Header = ({ title, navigation }) => {
    return (
        <View style={headerStyles.header}>
            <Text style={textStyles.h1}>{title}</Text>
            <View style={headerStyles.row}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Contact")}
                >
                    <Ionicons
                        name={"person-add"}
                        size={32}
                        style={headerStyles.headerIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Parametres")}
                >
                    <Ionicons
                        name={"settings"}
                        size={32}
                        style={headerStyles.headerIcon}
                    />
                </TouchableOpacity>
            </View>
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
