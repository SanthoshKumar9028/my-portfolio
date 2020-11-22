import { useContext } from "react";
import Head from "next/head";

import cs from "../../lib/ClassSelector";
import { ThemeContext } from "../../lib/Contexts";
import styles from "./about-me.module.scss";
import Layout from "../../components/Layout.js";
import { SideNavWraper } from "../../components/SideNav";

export default function ContactMe() {
  const { theme } = useContext(ThemeContext);

  let containerClass = cs({
    "container--dark": theme == "dark-theme",
    "container--light": theme == "light-theme",
  });

  containerClass = `${styles.container} ${styles[containerClass]}`;

  let mainClass = cs({
    "main--dark": theme == "dark-theme",
    "main--light": theme == "light-theme",
  });

  mainClass = `${styles.main} ${styles[mainClass]}`;

  return (
    <Layout header footer>
      <div className={containerClass}>
        <Head>
          <title>About Me</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <SideNavWraper active="About ME">
          <main className={mainClass}>
            <div className={styles.hero}>
              <h1>Realy Who I am i!</h1>
            </div>
            <div className={styles.intro}>
              <div>
                <h1 className={styles.intro__name}>
                  My name is santhoshkumar <span>i am a</span>
                </h1>
                <ul className={styles.intro__list}>
                  <li className={styles.intro__item}>Web Developer</li>
                  <li className={styles.intro__item}>Programmer</li>
                </ul>
              </div>
            </div>
            <h1>EDUCATIONAL CREDENTIALS</h1>
            <dl className={styles.educations}>
              <dt>M.C.A</dt>
              <dd>
                <b>COLLEGE NAME</b>: Pondicherry Engineering College.
                <span>PERCENTAGE: 75%</span>
              </dd>
              <dt>B.C.A</dt>
              <dd>
                <b>COLLEGE NAME</b>: PRIST University.
                <span>PERCENTAGE: 75%</span>
              </dd>
              <dt>HSC</dt>
              <dd>
                <b>SCHOOl NAME</b>: Indira Gandhi Govt Higher Secondary School
                Indira Nagar Puducherry
                <span>PERCENTAGE: 65.75%</span>
              </dd>
            </dl>
            <br />
            <hr />
            <br />
            <h1>PERSONAL INFORMATION</h1>
            <table className={styles.info}>
              <tr>
                <td>Father Name :</td>
                <td>
                  <span>Sivakumar</span>
                </td>
              </tr>
              <tr>
                <td>Mother name :</td>
                <td>Bhuvaneswari</td>
              </tr>
              <tr>
                <td>DOB :</td>
                <td>02/06/1999</td>
              </tr>
              <tr>
                <td>Language known :</td>
                <td>Tamil and English.</td>
              </tr>
            </table>
            <hr />
            <br />
          </main>
        </SideNavWraper>
      </div>
    </Layout>
  );
}
