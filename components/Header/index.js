import { useContext } from "react";
import Link from "next/link";

import styles from "./Header.module.scss";
import cs from "../../lib/ClassSelector";
import { ThemeToggle } from "../ToggleButtons";
import { ThemeContext } from "../../lib/Contexts";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = cs({
    "header--dark": theme == "dark-theme",
    "header--light": theme == "light-theme",
  });

  return (
    <>
      <header className={`${styles.header} ${styles[style]}`}>
        <Link href="/">
          <a className={styles.title}>
            S<span>anthosh</span>K<span>umar</span>
          </a>
        </Link>
        <ThemeToggle toggleHandler={toggleTheme} />
      </header>
    </>
  );
}
