import { createContext } from "react";
export const ThemeContext = createContext({
  theme: "light-theme",
  toggleTheme: () => {},
});

export default {
  ThemeContext,
};
