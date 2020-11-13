import { useState } from "react";
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

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

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
        className={styles["side-bar"]}
      >
        <nav className={styles["side-bar__nav"]}>
          <ul>
            <li>
              <Link href="#">
                <a>
                  <FontAwesomeIcon icon={faHome} /> Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <FontAwesomeIcon icon={faSuitcase} /> Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <FontAwesomeIcon icon={faPhone} /> Contuct Me
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
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

export function SideNavWraper({ children }) {
  return (
    <section className={styles.wraper}>
      <section className={styles.wraper__right}>
        <SideNav />
      </section>
      <section className={styles.wraper__left}>{children}</section>
    </section>
  );
}
