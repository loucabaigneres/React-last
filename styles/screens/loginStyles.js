import colors from "../variables";

const loginStyles = (colours) => ({
    container: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        gap: 48,
        padding: 24,
    },
    loginImage: {
        width: 100,
        height: 100 * (69.1 / 60),
    },
    form: {
        width: "100%",
        gap: 16,
        alignItems: "center",
    },
    input: {
        width: "100%",
        borderWidth: 2,
        borderColor: colours.text,
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 4,
        fontSize: 16,
    },
    loginButton: {
        width: "100%",
        paddingVertical: 16,
        backgroundColor: colors.franceConnect,
        borderRadius: 4,
        marginTop: 24,
    },
});

export default loginStyles;
