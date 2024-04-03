import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import useTheme from "../theme/useTheme";
import textStyles from "../styles/textStyles";
import headerStyles from "../styles/components/headerStyles";

const Header = ({ title, navigation }) => {
    const colours = useTheme();
    const HeaderStyles = headerStyles(colours);
    const TextStyles = textStyles(colours);

    return (
        <View style={HeaderStyles.header}>
            <Text style={TextStyles.h1}>{title}</Text>
            <View style={HeaderStyles.row}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Contact")}
                >
                    <Ionicons
                        name={"person-add"}
                        size={32}
                        style={HeaderStyles.headerIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Parametres")}
                >
                    <Ionicons
                        name={"settings"}
                        size={32}
                        style={HeaderStyles.headerIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const HeaderSecondary = ({ title }) => {
    const colours = useTheme();
    const HeaderStyles = headerStyles(colours);
    const TextStyles = textStyles(colours);

    return (
        <View style={HeaderStyles.headerSecondary}>
            <Text style={TextStyles.h1}>{title}</Text>
        </View>
    );
};

export { Header, HeaderSecondary };
