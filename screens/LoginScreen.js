import React, { useState } from "react";
import {
    View,
    TextInput,
    Image,
    StyleSheet,
    Alert,
    TouchableOpacity,
    Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { HeaderSecondary } from "../components/Header";

import useTheme from "../theme/useTheme";
import layoutStyles from "../styles/layoutStyles";
import textStyles from "../styles/textStyles";
import loginStyles from "../styles/screens/loginStyles";

const LoginScreen = () => {
    const colours = useTheme();
    const TextStyles = textStyles(colours);
    const layoutScreenStyles = layoutStyles(colours);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const navigation = useNavigation();

    const passwordValidation = (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumber = /\d/.test(password);
        return hasUpperCase && hasNumber;
    };

    const handleLogin = () => {
        if (!email.includes("@")) {
            Alert.alert(
                "Invalid Credentials",
                "Please enter a valid email address."
            );
            return;
        }
        if (!passwordValidation(password)) {
            Alert.alert(
                "Invalid Password",
                "Password must contain at least one uppercase letter and one number."
            );
            return;
        }
        if (!name) {
            Alert.alert("Invalid Credentials", "Please enter your name.");
            return;
        }
        navigation.navigate("Profilsq", { email: email, name: name });
    };

    return (
        <View style={layoutScreenStyles.page}>
            <HeaderSecondary title={"Connexion"} />
            <View style={loginStyles.container}>
                <Image
                    source={require("../assets/franceConnect.png")}
                    style={loginStyles.loginImage}
                />
                <View style={loginStyles.form}>
                    <TextInput
                        style={loginStyles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={loginStyles.input}
                        placeholder="Nom"
                        value={name}
                        onChangeText={setName}
                        autoCapitalize="words"
                    />
                    <TextInput
                        style={loginStyles.input}
                        placeholder="Mot de passe"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <TouchableOpacity
                        onPress={handleLogin}
                        style={loginStyles.loginButton}
                    >
                        <Text style={TextStyles.h4Inverted}>Se connecter</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;
