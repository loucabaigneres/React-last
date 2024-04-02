import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Switch,
    Appearance,
    useColorScheme,
    StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { HeaderSecondary } from "../components/Header";

import { colours } from "../styles/variables";
import textStyles from "../styles/textStyles";
import layoutStyles from "../styles/layoutStyles";

const SettingsScreen = ({ navigation }) => {
    const colorScheme = useColorScheme();
    const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");

    useEffect(() => {
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            setIsDarkMode(colorScheme === "dark");
        });
        return () => subscription.remove();
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode((previousState) => !previousState);
        // Logique supplémentaire pour sauvegarder le mode préféré
    };

    // const toggleNotifications = () =>
    //     setAreNotificationsEnabled((previousState) => !previousState);

    return (
        <View style={layoutStyles.page}>
            <Ionicons
                name="arrow-back"
                size={32}
                color="#000"
                style={styles.back}
                onPress={() => navigation.goBack()}
            />
            <HeaderSecondary title="Paramètres" />
            <View style={styles.container}>
                {/* <View style={styles.setting}>
                    <View>
                        <Text style={textStyles.h3}>Notifications</Text>
                        <Text style={textStyles.pBold}>
                            Pour vos événements épinglés
                        </Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={
                            areNotificationsEnabled ? "#f5dd4b" : "#f4f3f4"
                        }
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleNotifications}
                        value={areNotificationsEnabled}
                    />
                </View> */}
                {/* <View style={styles.setting}>
                    <View>
                        <Text style={textStyles.h3}>Contraste élevé</Text>
                        <Text style={textStyles.pBold}>
                            Rendre l'interface plus accessible
                        </Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isDarkTheme ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleTheme}
                        value={isDarkTheme}
                    />
                </View> */}
                <View style={styles.setting}>
                    <View>
                        <Text style={textStyles.h3}>Mode sombre</Text>
                        <Text style={textStyles.pBold}>
                            Rendre l'interface sombre
                        </Text>
                    </View>
                    <Switch
                        trackColor={{
                            false: colours.light.primary,
                            true: colours.dark.primary,
                        }}
                        thumbColor={
                            isDarkMode
                                ? colours.dark.accent
                                : colours.light.accent
                        }
                        ios_backgroundColor={colours.light.primary}
                        onValueChange={toggleDarkMode}
                        value={isDarkMode}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    back: {
        position: "absolute",
        top: 48,
        left: 24,
    },
    container: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 16,
    },
    containerDark: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#333333", // Couleur de fond sombre
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        color: "#000000", // Couleur du texte clair
    },
    textDark: {
        fontSize: 18,
        color: "#FFFFFF", // Couleur du texte sombre
    },
    setting: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: 20,
    },
});

export default SettingsScreen;
