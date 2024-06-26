import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

import useTheme from "../theme/useTheme";
import colors from "../styles/variables";
import textStyles from "../styles/textStyles";
import cardStyles from "../styles/components/cardStyles";

const HomeCard = ({ title, description, cardSize }) => {
    const colours = useTheme();
    const TextStyles = textStyles(colours);

    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            // colors={["rgba(246, 116, 162, 1)", "rgba(230, 111, 153, 0.72)"]}
            colors={["#F674A2", "#F674A2"]}
            style={[cardStyles.category, cardStyles[cardSize]]}
        >
            <Ionicons name={"book"} size={24} color={colors.background} />
            <View>
                <Text style={styles.h5}>{title}</Text>
                <Text style={styles.h6}>{description}</Text>
            </View>
        </LinearGradient>
    );
};

export default HomeCard;

const styles = StyleSheet.create({
    h5: {
        fontSize: 14,
        fontWeight: "700",
        lineHeight: 18,
        color: "#FFF7FE",
    },
    h6: {
        fontSize: 10,
        lineHeight: 14,
        color: "#FFF7FE",
    },
});
