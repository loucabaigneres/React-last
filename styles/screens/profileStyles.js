import { colors } from "../variables";

const profileStyles = {
    container: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 32,
    },
    top: {
        alignItems: "center",
    },
    profil: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: colors.black,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 24,
    },
    imgProfilVoid: {
        justifyContent: "center",
        alignItems: "center",
    },
    imgProfil: {
        width: 120,
        height: 120,
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
    },
    bottom: {
        width: "100%",
    },
    inputField: {
        backgroundColor: "#FFFFFF", // Fond blanc pour se fondre avec la page
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25, // Bordures plus arrondies
        width: "100%", // Utilise la pleine largeur disponible
        fontSize: 16,
        marginBottom: 16,
        color: "#333333",
        borderWidth: 2, // Bordure plus épaisse
        borderColor: "#E0E0E0", // Couleur de bordure douce
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    saveCancelButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 12,
    },
    saveButton: {
        backgroundColor: "#4E9F3D",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        flex: 1,
        marginRight: 10,
    },
    cancelButton: {
        backgroundColor: "#D3455B",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        flex: 1,
    },
    saveButtonText: {
        color: "#FFF",
        fontWeight: "600",
        textAlign: "center",
        fontSize: 16,
    },
    cancelButtonText: {
        color: "#FFF",
        fontWeight: "600",
        textAlign: "center",
        fontSize: 16,
    },
    profilName: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8,
    },
    profilEmail: {
        fontSize: 18,
        color: "#777",
        marginBottom: 16,
    },
};

export default profileStyles;
