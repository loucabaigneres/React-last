import { useContext } from "react";
import themeContext from "./themeContext";

const colours = {
    light: {
        primary: "#007A9D",
        secondary: "#F674A2",
        accent: "#F9A1FA",
        background: "#FFF7FE",
        text: "#03000F",
        positive: "#2BD264",
        negative: "#FF5674",
        franceConnect: "#0055A5",
    },
    dark: {
        primary: "#007A9D",
        secondary: "#F674A2",
        accent: "#F9A1FA",
        background: "#060119",
        text: "#FFF7FE",
        positive: "#2BD264",
        negative: "#FF5674",
        franceConnect: "#0055A5",
    },
};

const useTheme = () => {
    const { theme } = useContext(themeContext);
    return colours[theme];
};

export default useTheme;
