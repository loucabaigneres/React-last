const headerStyles = (colours) => ({
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerSecondary: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    row: {
        flexDirection: "row",
        gap: 12,
    },
    headerIcon: {
        color: colours.text,
    },
});

export default headerStyles;
