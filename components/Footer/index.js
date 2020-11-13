import {
  faFacebook,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>all copyright&copy; goes to santhoshkumar</p>
      <ul className={styles.icons}>
        <li>
          <a href="#" target="_blank" className={styles.icons__icon}>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" className={styles.icons__icon}>
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" className={styles.icons__icon}>
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
