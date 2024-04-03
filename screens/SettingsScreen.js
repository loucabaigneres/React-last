import React, { useContext, useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { EventRegister } from "react-native-event-listeners";
import Ionicons from "react-native-vector-icons/Ionicons";

import themeContext from "../theme/themeContext";

import { HeaderSecondary } from "../components/Header";

import useTheme from "../theme/useTheme";
import colors from "../styles/variables";
import textStyles from "../styles/textStyles";
import layoutStyles from "../styles/layoutStyles";

const SettingsScreen = ({ navigation }) => {
    const theme = useContext(themeContext);
    const [darkMode, setDarkMode] = useState(false);

    const [areNotificationsEnabled, setAreNotificationsEnabled] =
        useState(true);
    const toggleNotifications = () =>
        setAreNotificationsEnabled((previousState) => !previousState);

    const colours = useTheme();
    const TextStyles = textStyles(colours);
    const layoutScreenStyles = layoutStyles(colours);

    return (
        <View style={layoutScreenStyles.page}>
            <Ionicons
                name="arrow-back"
                size={32}
                color={colours.text}
                style={styles.back}
                onPress={() => navigation.goBack()}
            />
            <HeaderSecondary title="Paramètres" />
            <View style={styles.container}>
                <View style={styles.setting}>
                    <View>
                        <Text style={TextStyles.h3}>Notifications</Text>
                        <Text style={TextStyles.pBold}>
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
                </View>
                <View style={styles.setting}>
                    <View>
                        <Text style={TextStyles.h3}>Contraste élevé</Text>
                        <Text style={TextStyles.pBold}>
                            Rendre l'interface plus accessible
                        </Text>
                    </View>
                    <Switch
                        // value={darkMode}
                        // onValueChange={(value) => {
                        //     setDarkMode(value);
                        //     EventRegister.emit("changeTheme", value);
                        // }}
                    />
                </View>
                <View style={styles.setting}>
                    <View>
                        <Text style={TextStyles.h3}>Mode sombre</Text>
                        <Text style={TextStyles.pBold}>
                            Rendre l'interface sombre
                        </Text>
                    </View>
                    <Switch
                        value={darkMode}
                        onValueChange={(value) => {
                            setDarkMode(value);
                            EventRegister.emit("changeTheme", value);
                        }}
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
    setting: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: 20,
    },
});

export default SettingsScreen;
