const textStyles = (colours) => ({
    h1: {
        fontSize: 48,
        fontWeight: "900",
        lineHeight: 56,
        color: colours.text,
    },
    h2: {
        fontSize: 32,
        fontWeight: "700",
        lineHeight: 40,
        color: colours.text,
    },
    h3: {
        fontSize: 24,
        fontWeight: "600",
        lineHeight: 32,
        color: colours.text,
    },
    h4: {
        fontSize: 20,
        fontWeight: "400",
        lineHeight: 28,
        color: colours.text,
        textAlign: "center",
    },
    h4Inverted: {
        fontSize: 20,
        fontWeight: "400",
        lineHeight: 28,
        color: colours.background,
        textAlign: "center",
    },
    p: {
        fontSize: 16,
        lineHeight: 24,
        color: colours.text,
    },
    pInverted: {
        fontSize: 16,
        lineHeight: 24,
        color: colours.background,
    },
    pBold: {
        fontSize: 16,
        fontWeight: "700",
        lineHeight: 24,
        color: colours.text,
    },
    pBoldInverted: {
        fontSize: 16,
        fontWeight: "700",
        lineHeight: 24,
        color: colours.background,
    },
    h5: {
        fontSize: 14,
        fontWeight: "700",
        lineHeight: 18,
        color: colours.background,
    },
    h6: {
        fontSize: 10,
        lineHeight: 14,
        color: colours.background,
    },
});

export default textStyles;
