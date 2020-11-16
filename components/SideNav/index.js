import { useState, useContext } from "react";
import Link from "next/link";
import {
  faHome,
  faSuitcase,
  faPhone,
  faInfo,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./SideNav.module.scss";
import cs from "../../lib/ClassSelector";
import { ThemeContext } from "../../lib/Contexts";

const links = {
  Home: "",
  Projects: "",
  "Contuct Me": "",
  "About Me": "",
};

export default function SideNav({ active }) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  let assideClass = cs({
    "side-bar--dark": theme == "dark-theme",
    "side-bar--light": theme == "light-theme",
  });

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const addActiveClass = { ...links, [active]: "active" };

  return (
    <>
      <div
        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        onClick={toggleIsOpen}
        className={styles["side-bar__toggle-but"]}
      >
        <FontAwesomeIcon icon={faArrowLeft} size="2x" />
      </div>
      <aside
        style={{ left: isOpen ? 0 : "100%" }}
        className={`${styles["side-bar"]} ${styles[assideClass]}`}
      >
        <nav className={styles["side-bar__nav"]}>
          <ul>
            <li>
              <Link href="#">
                <a className={styles[addActiveClass["Home"]]}>
                  <FontAwesomeIcon icon={faHome} /> Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className={styles[addActiveClass["Projects"]]}>
                  <FontAwesomeIcon icon={faSuitcase} /> Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className={styles[addActiveClass["Contuct Me"]]}>
                  <FontAwesomeIcon icon={faPhone} /> Contuct Me
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className={styles[addActiveClass["About ME"]]}>
                  <FontAwesomeIcon icon={faInfo} /> About Me
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export function SideNavWraper(props) {
  const { theme } = useContext(ThemeContext);

  let rightWraperClass = cs({
    "wraper__right--dark": theme == "dark-theme",
    "wraper__right--light": theme == "light-theme",
  });

  const { children, ...rest } = props;
  return (
    <section className={styles.wraper}>
      <section
        className={`${styles.wraper__right} ${styles[rightWraperClass]}`}
      >
        <SideNav {...rest} />
      </section>
      <section className={styles.wraper__left}>{children}</section>
    </section>
  );
}
