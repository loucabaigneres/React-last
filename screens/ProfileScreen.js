import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
    Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";

import { Header } from "../components/Header";

import colors from "../styles/variables";
import textStyles from "../styles/textStyles";
import layoutStyles from "../styles/layoutStyles";
import profileStyles from "../styles/screens/profileStyles";
import {
    editButtonStyles,
    logoutButtonStyles,
} from "../styles/components/buttonStyles";

const ProfileScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [profileImage, setProfileImage] = useState(null);
    const [originalProfileImage, setOriginalProfileImage] = useState(null);
    const [name, setName] = useState("");
    const [originalName, setOriginalName] = useState("");
    const [email, setEmail] = useState("");
    const [originalEmail, setOriginalEmail] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } =
                await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== "granted") {
                Alert.alert(
                    "Permission refusée",
                    "Désolé, nous avons besoin des permissions de la bibliothèque de photos pour faire fonctionner cette fonctionnalité!"
                );
            }
        })();
    }, []);

    useEffect(() => {
        if (route.params?.name) {
            setName(route.params.name);
            setOriginalName(route.params.name);
        }
        if (route.params?.email) {
            setEmail(route.params.email);
            setOriginalEmail(route.params.email);
        }
    }, [route.params]);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled && result.assets && result.assets.length > 0) {
            setProfileImage(result.assets[0].uri);
            if (!isEditing) {
                setOriginalProfileImage(result.assets[0].uri);
            }
        }
    };

    const toggleEditProfile = () => {
        setIsEditing(!isEditing);
        if (!isEditing) {
            setOriginalName(name);
            setOriginalEmail(email);
            setOriginalProfileImage(profileImage);
        }
    };

    const saveProfileChanges = () => {
        if (email.includes("@")) {
            setIsEditing(false);
        } else {
            Alert.alert(
                "Erreur",
                'Veuillez entrer une adresse e-mail valide avec un "@".'
            );
        }
    };

    const cancelProfileChanges = () => {
        setName(originalName);
        setEmail(originalEmail);
        setProfileImage(originalProfileImage);
        setIsEditing(false);
    };

    const logout = () => {
        setProfileImage(null);
        setName("");
        setEmail("");
        setIsEditing(false);
        navigation.navigate("FranceConnect");
    };

    return (
        <View style={layoutStyles.page}>
            <Header title="Profil" navigation={navigation} />
            <View style={profileStyles.container}>
                <View style={profileStyles.top}>
                    <TouchableOpacity
                        onPress={pickImage}
                        style={profileStyles.profil}
                    >
                        {profileImage ? (
                            <Image
                                source={{ uri: profileImage }}
                                style={profileStyles.imgProfil}
                            />
                        ) : (
                            <Ionicons
                                name="person"
                                size={80}
                                color={colors.background}
                                style={profileStyles.imgProfilVoid}
                            />
                        )}
                    </TouchableOpacity>
                    <Text style={profileStyles.profilName}>{name}</Text>
                    <Text style={profileStyles.profilEmail}>{email}</Text>
                </View>
                {isEditing ? (
                    <>
                        <TextInput
                            style={profileStyles.inputField}
                            value={name}
                            onChangeText={setName}
                            placeholder="Nom"
                            autoFocus={true}
                        />
                        <TextInput
                            style={profileStyles.inputField}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Adresse e-mail"
                        />
                        <View style={profileStyles.saveCancelButtons}>
                            <TouchableOpacity
                                onPress={saveProfileChanges}
                                style={profileStyles.saveButton}
                            >
                                <Text style={profileStyles.saveButtonText}>
                                    Enregistrer
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={cancelProfileChanges}
                                style={profileStyles.cancelButton}
                            >
                                <Text style={profileStyles.cancelButtonText}>
                                    Annuler
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                ) : (
                    <View style={profileStyles.bottom}>
                        <TouchableOpacity
                            style={editButtonStyles}
                            onPress={toggleEditProfile}
                        >
                            <Text style={textStyles.h4Inverted}>
                                Modifier mon profil
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={logoutButtonStyles}
                            onPress={logout}
                        >
                            <Text style={textStyles.h4Inverted}>
                                Déconnexion
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    );
};

export default ProfileScreen;
