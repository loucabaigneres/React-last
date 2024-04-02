import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Linking,
    ImageBackground,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

import { Header } from "../components/Header";

import { colors } from "../styles/variables";
import textStyles from "../styles/textStyles";
import layoutStyles from "../styles/layoutStyles";

const ProjectsScreen = () => {
    return (
        <ScrollView
            contentContainerStyle={layoutStyles.scrollPage}
            showsVerticalScrollIndicator={false}
        >
            <Header title="Projets" />
            <View style={styles.container}>
                <TouchableOpacity style={styles.addButton}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="add" size={24} color="#F674A2" />
                    </View>
                    <Text style={textStyles.pBoldInverted}>
                        Proposer un projet
                    </Text>
                </TouchableOpacity>
                <View style={styles.projectsContainer}>
                    <Text style={textStyles.h3}>Projets en cours</Text>
                    <TouchableOpacity style={styles.projectCard}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.projectTitle}>
                                Accusantium adipisci quam
                            </Text>
                        </View>
                        <ImageBackground
                            source={require("../assets/banner.jpg")}
                            style={styles.projectImage}
                        >
                            <LinearGradient
                                colors={[
                                    "rgba(0, 122, 157, 0.5)",
                                    "rgba(0, 122, 157, 0.5)",
                                ]}
                                style={styles.linearGradient}
                            ></LinearGradient>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.projectCard}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.projectTitle}>
                                Accusantium adipisci quam
                            </Text>
                        </View>
                        <ImageBackground
                            source={require("../assets/banner.jpg")}
                            style={styles.projectImage}
                        >
                            <LinearGradient
                                colors={[
                                    "rgba(0, 122, 157, 0.5)",
                                    "rgba(0, 122, 157, 0.5)",
                                ]}
                                style={styles.linearGradient}
                            ></LinearGradient>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <View style={styles.buttonContainer}>
                <ImageBackground
                    source={require("../assets/banner.jpg")}
                    style={styles.banner}
                >
                    <LinearGradient
                        colors={[
                            "rgba(0, 122, 157, 0.5)",
                            "rgba(0, 122, 157, 0.5)",
                        ]}
                        style={styles.banner}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                Linking.openURL(
                                    "https://participer.ville-antony.fr/fr-FR/"
                                );
                            }}
                            style={styles.buttonRed}
                        >
                            <Text style={styles.text}>Voir les projets</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </ImageBackground>
            </View> */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        alignItems: "flex-start",
        gap: 24,
    },
    addButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        backgroundColor: "#F674A2",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8,

        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 5,
    },
    iconContainer: {
        backgroundColor: "#FFF",
        borderRadius: 4,
    },
    projectsContainer: {
        width: "100%",
        gap: 12,
    },
    projectCard: {
        width: "100%",
        backgroundColor: colors.primary,
        borderRadius: 8,
        overflow: "hidden",
    },
    cardHeader: {
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    projectTitle: {
        fontSize: 20,
        fontWeight: "700",
        lineHeight: 28,
        color: colors.background,
    },
    projectImage: {
        width: "100%",
        height: 200,
        marginTop: 12,
    },
    linearGradient: {
        width: "100%",
        height: "100%",
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "#fff",
        fontSize: 40,
    },
    buttonRed: {
        alignItems: "center",
        backgroundColor: "#007A9D",
        padding: 20,
        margin: 20,
        borderRadius: 10,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 24,
    },
    h1: {
        fontSize: 48,
        fontWeight: "900",
    },
});

export default ProjectsScreen;
