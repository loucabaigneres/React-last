import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

import { HeaderSecondary } from "../components/Header";

import useTheme from "../theme/useTheme";
import layoutStyles from "../styles/layoutStyles";

const ContactScreen = ({ navigation }) => {
    const colours = useTheme();
    const layoutScreenStyles = layoutStyles(colours);

    const [selectedValue, setSelectedValue] = React.useState("void");

    return (
        <View style={layoutScreenStyles.page}>
            <Ionicons
                name="arrow-back"
                size={32}
                color={colours.text}
                style={styles.back}
                onPress={() => navigation.goBack()}
            />
            <HeaderSecondary title="Contact" />
            <View style={styles.container}>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={selectedValue}
                        style={styles.inputBig}
                        itemStyle={{ color: "#F674A2" }}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedValue(itemValue)
                        }
                    >
                        <Picker.Item label="Sujet" value="void" />
                        <Picker.Item label="Horaires" value="js" />
                        <Picker.Item label="Tarifs" value="ts" />
                        <Picker.Item label="Autres" value="py" />
                        <Picker.Item
                            label="Demande de partenariat"
                            value="pyp"
                        />
                        <Picker.Item label="Demande de stage" value="pys" />
                        <Picker.Item
                            label="Demande de renseignements"
                            value="pyr"
                        />
                        <Picker.Item label="Demande de devis" value="pyd" />
                        <Picker.Item
                            label="Demande de documentation"
                            value="pydd"
                        />
                    </Picker>
                </View>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={["#007A9D", "#007A9D"]}
                    style={styles.category}
                >
                    <View>
                        <View style={styles.formStyle}>
                            <TextInput
                                style={styles.inputBig}
                                placeholder="Objet du message"
                                placeholderTextColor="rgba(000, 000, 000, 0.5)"
                                backgroundColor="#fff"
                            />
                        </View>

                        <View style={styles.formStyle}>
                            <TextInput
                                style={styles.inputVeryBig}
                                placeholder="Corps du message"
                                placeholderTextColor="rgba(000, 000, 000, 0.5)"
                                backgroundColor="#fff"
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.editButton}>
                        <Ionicons name="send" size={24} color="#fff" />
                        <Text style={styles.buttonText}>Envoyer</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    formStyle: {
        marginBottom: 10,
    },
    back: {
        position: "absolute",
        top: 48,
        left: 24,
    },
    category: {
        backgroundColor: "transparent",
        padding: 20,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "flex-end",
    },
    buttonText: {
        textAlign: "center",
        color: "#fff",
        fontWeight: "600",
        fontSize: 16,
    },
    container: {
        flex: 1,
        gap: 50,
        alignItems: "center",
        padding: 16,
        marginTop: 0,
    },
    pickerContainer: {
        borderRadius: 8,
        overflow: "hidden",
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
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 20,
    },
    setting: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
        marginBottom: 20,
    },
    editButton: {
        backgroundColor: "#F674A2",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 12,
        shadowColor: "#5E35B1",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        flexDirection: "row",
        elevation: 5,
        gap: 10,
        width: "80%",
    },
    inputSmall: {
        height: 60,
        width: "80%",
        padding: 10,
        borderRadius: 8,
        color: "#000",
        fontSize: 16,
        width: 150,
    },
    inputBig: {
        height: 60,
        maxWidth: "100%",
        width: 500,
        padding: 10,
        borderRadius: 8,
        color: "#fff",
        fontSize: 16,
        backgroundColor: "#f674a2",
    },
    inputVeryBig: {
        height: 60,
        maxWidth: "100%",
        padding: 10,
        borderRadius: 8,
        color: "#000",
        fontSize: 20,
        height: 180,
        textAlignVertical: "top",
    },
});

export default ContactScreen;
