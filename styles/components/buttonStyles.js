import colors from "../variables";

const franceConnectButtonStyles = {
    franceConnectButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: 24,
        backgroundColor: colors.franceConnect,
        paddingVertical: 8,
        paddingHorizontal: 40,
        borderRadius: 8,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 10,
    },
    buttonImage: {
        width: 40,
        aspectRatio: 600 / 691,
    },
    buttonTextContainer: {
        alignItems: "center",
    },
};

const editButtonStyles = {
    backgroundColor: "#4E9F3D", // Couleur plus vibrante pour le bouton
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30, // Boutons arrondis
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
};

const logoutButtonStyles = {
    backgroundColor: "#D3455B", // Couleur qui attire l'attention pour la déconnexion
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
};

export { franceConnectButtonStyles, editButtonStyles, logoutButtonStyles };
