import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Linking,
    StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";

import { HeaderSecondary } from "../components/Header";

import useTheme from "../theme/useTheme";
import layoutStyles from "../styles/layoutStyles";
import textStyles from "../styles/textStyles";
import { franceConnectButtonStyles } from "../styles/components/buttonStyles";
import franceConnectStyles from "../styles/screens/franceConnectStyles";
import colors from "../styles/variables";

const FranceConnectScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();

    const colours = useTheme();
    const TextStyles = textStyles(colours);
    const layoutScreenStyles = layoutStyles(colours);
    const FranceConnectStyles = franceConnectStyles(colours);

    const goToLogIn = () => {
        navigation.navigate("Login"); // Redirection vers la page des paramètres
    };

    const goToFranceConnect = () => {
        Linking.openURL("https://franceconnect.gouv.fr/");
    };

    return (
        <View style={layoutScreenStyles.page}>
            <HeaderSecondary title="Connexion" />
            <View style={FranceConnectStyles.container}>
                <View style={FranceConnectStyles.top}>
                    <View style={FranceConnectStyles.profil}>
                        <Ionicons
                            name="help-outline"
                            size={100}
                            color={colours.background}
                        />
                    </View>
                    <Text style={TextStyles.h2}>Utilisateur</Text>
                    <Text style={TextStyles.h4}>
                        Connectez-vous pour accéder à toutes les
                        fonctionnalités.
                    </Text>
                </View>
                <View style={FranceConnectStyles.bottom}>
                    <TouchableOpacity
                        style={franceConnectButtonStyles.franceConnectButton}
                        onPress={goToLogIn}
                    >
                        <Image
                            source={require("../assets/franceConnect.png")}
                            style={franceConnectButtonStyles.buttonImage}
                        />
                        <View
                            style={
                                franceConnectButtonStyles.buttonTextContainer
                            }
                        >
                            <Text style={styles.pInverted}>
                                S'identifier avec
                            </Text>
                            <Text style={styles.pBoldInverted}>
                                FranceConnect
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={FranceConnectStyles.link}
                        onPress={goToFranceConnect}
                    >
                        <Text style={TextStyles.p}>
                            Qu'est-ce que FranceConnect ?
                        </Text>
                        <Ionicons
                            name="arrow-redo-circle-outline"
                            size={16}
                            color={colours.text}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default FranceConnectScreen;

const styles = StyleSheet.create({
    pInverted: {
        fontSize: 16,
        lineHeight: 24,
        color: colors.background,
    },
    pBoldInverted: {
        fontSize: 16,
        fontWeight: "700",
        lineHeight: 24,
        color: colors.background,
    },
});
