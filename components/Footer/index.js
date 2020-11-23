import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHackerrank, faGithub } from "@fortawesome/free-brands-svg-icons";
import { SoloLearn } from "../../lib/SvgIcons";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>all copyright&copy; goes to santhoshkumar</p>
      <ul className={styles.icons}>
        <li>
          <a
            href="https://www.sololearn.com/Profile/14394142?ref=app"
            target="_blank"
            className={styles.icons__icon}
          >
            <SoloLearn style={{ fill: "white", marginBottom: "-4px" }} />
          </a>
        </li>
        <li>
          <a
            href="https://www.hackerrank.com/santhoshkumar902"
            target="_blank"
            className={styles.icons__icon}
          >
            <FontAwesomeIcon icon={faHackerrank} size="2x" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/SanthoshKumar9028"
            target="_blank"
            className={styles.icons__icon}
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
