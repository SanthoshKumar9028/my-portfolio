import { useEffect, useState, useMemo } from "react";
import "../styles/globals.css";

import { ThemeContext } from "../lib/Contexts";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light-theme");

  useEffect(() => {
    let localTheme = localStorage.getItem("theme-style");
    if (localTheme == undefined) {
      localStorage.setItem("theme-style", "light-theme");
      localTheme = "light-theme";
    }
    if (theme != localTheme) setTheme(localTheme);
  }, []);

  const themeState = useMemo(() => {
    return {
      theme,
      toggleTheme: () => {
        let toChange = theme == "light-theme" ? "dark-theme" : "light-theme";
        localStorage.setItem("theme-style", toChange);
        setTheme(toChange);
      },
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={themeState}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default MyApp;
