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

import layoutStyles from "../styles/layoutStyles";
import textStyles from "../styles/textStyles";
import { franceConnectButtonStyles } from "../styles/components/buttonStyles";
import franceConnectStyles from "../styles/screens/franceConnectStyles";
import colors from "../styles/variables";

const FranceConnectScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();

    const goToLogIn = () => {
        navigation.navigate("Login"); // Redirection vers la page des paramètres
    };

    const goToFranceConnect = () => {
        Linking.openURL("https://franceconnect.gouv.fr/");
    };

    return (
        <View style={layoutStyles.page}>
            <HeaderSecondary title="Connexion" />
            <View style={franceConnectStyles.container}>
                <View style={franceConnectStyles.top}>
                    <View style={franceConnectStyles.profil}>
                        <Ionicons
                            name="help-outline"
                            size={100}
                            color={colors.background}
                        />
                    </View>
                    <Text style={textStyles.h2}>Utilisateur</Text>
                    <Text style={textStyles.h4}>
                        Connectez-vous pour accéder à toutes les
                        fonctionnalités.
                    </Text>
                </View>
                <View style={franceConnectStyles.bottom}>
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
                            <Text style={textStyles.pInverted}>
                                S'identifier avec
                            </Text>
                            <Text style={textStyles.pBoldInverted}>
                                FranceConnect
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={franceConnectStyles.link}
                        onPress={goToFranceConnect}
                    >
                        <Text style={textStyles.p}>
                            Qu'est-ce que FranceConnect ?
                        </Text>
                        <Ionicons
                            name="arrow-redo-circle-outline"
                            size={16}
                            color={colors.text}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default FranceConnectScreen;
