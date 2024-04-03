const homeStyles = (colours) => ({
    categories: {
        width: "100%",
        gap: 12,
    },
    row: {
        flexDirection: "row",
        gap: 12,
    },
    col: {
        flexDirection: "column",
        flex: 1,
        gap: 12,
    },
    more: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        backgroundColor: colours.primary,
        paddingVertical: 8,
        borderRadius: 8,
    },
});

export default homeStyles;
