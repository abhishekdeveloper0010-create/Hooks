import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("pink");

  const themes = {
    pink: {
      primary: "#e91e63",
      secondary: "#fce4ec",
      text: "#333",
      background: "#fff",
    },

    blue: {
      primary: "#2196f3",
      secondary: "#e3f2fd",
      text: "#222",
      background: "#fff",
    },

    green: {
      primary: "#4caf50",
      secondary: "#e8f5e9",
      text: "#222",
      background: "#fff",
    },

    dark: {
      primary: "#bb86fc",
      secondary: "#222",
      text: "#fff",
      background: "#121212",
    },
  };

  return (
    <ThemeContext.Provider
      value={{
        colors: themes[theme],
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}