import colors from "../variables";

const franceConnectStyles = (colours) => ({
    container: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        gap: 60,
        padding: 24,
    },
    top: {
        alignItems: "center",
    },
    profil: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: colours.text,
        marginBottom: 24,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 100,
        elevation: 10,
    },
    bottom: {
        alignItems: "center",
        gap: 8,
    },
    link: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: colours.text,
        gap: 5,
    },
});

export default franceConnectStyles;
