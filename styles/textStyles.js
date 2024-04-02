import colors from "./variables";

const textStyles = {
    h1: {
        fontSize: 48,
        fontWeight: "900",
        lineHeight: 56,
        color: colors.text,
    },
    h2: {
        fontSize: 32,
        fontWeight: "700",
        lineHeight: 40,
        color: colors.text,
    },
    h3: {
        fontSize: 24,
        fontWeight: "600",
        lineHeight: 32,
        color: colors.text,
    },
    h4: {
        fontSize: 20,
        fontWeight: "400",
        lineHeight: 28,
        color: colors.text,
        textAlign: "center",
    },
    h4Inverted: {
        fontSize: 20,
        fontWeight: "400",
        lineHeight: 28,
        color: colors.background,
        textAlign: "center",
    },
    p: {
        fontSize: 16,
        lineHeight: 24,
        color: colors.text,
    },
    pInverted: {
        fontSize: 16,
        lineHeight: 24,
        color: colors.background,
    },
    pBold: {
        fontSize: 16,
        fontWeight: "700",
        lineHeight: 24,
        color: colors.text,
    },
    pBoldInverted: {
        fontSize: 16,
        fontWeight: "700",
        lineHeight: 24,
        color: colors.background,
    },
    h5: {
        fontSize: 14,
        fontWeight: "700",
        lineHeight: 18,
        color: colors.background,
    },
    h6: {
        fontSize: 10,
        lineHeight: 14,
        color: colors.background,
    },
};

export default textStyles;
