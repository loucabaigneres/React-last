import Nav from "./components/Nav";
import { EventRegister } from "react-native-event-listeners";
import React, { useState, useEffect } from "react";
import ThemeContext from "./theme/themeContext";

export default function App() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const listener = EventRegister.addEventListener(
            "changeTheme",
            (data) => {
                setDarkMode(data);
            }
        );
        return () => {
            EventRegister.removeAllListeners(listener);
        };
    }, [darkMode]);

    const theme = darkMode ? "dark" : "light";

    return (
        <ThemeContext.Provider value={{ theme }}>
            <Nav />
        </ThemeContext.Provider>
    );
}
