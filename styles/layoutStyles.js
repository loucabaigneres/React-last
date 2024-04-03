import colors from "./variables";

const layoutStyles = (colours) => ({
    page: {
        width: "100%",
        flex: 1,
        alignItems: "flex-start",
        backgroundColor: colours.background,
        paddingTop: 96,
        padding: 24,
        gap: 48,
    },
    scrollPage: {
        width: "100%",
        minHeight: "100%",
        alignItems: "flex-start",
        backgroundColor: colours.background,
        paddingTop: 96,
        padding: 24,
        gap: 48,
    },
});

export default layoutStyles;
