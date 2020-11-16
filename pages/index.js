import { useContext } from "react";
import Head from "next/head";

import cs from "../lib/ClassSelector";
import { ThemeContext } from "../lib/Contexts";
import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout.js";
import { SideNavWraper } from "../components/SideNav";
import SkillSet from "../components/SkillSet";

const WebSkills = [
  { imgSrc: "/images/html.png", title: "HTML", value: "80" },
  { imgSrc: "/images/css.png", title: "CSS", value: "80" },
  { imgSrc: "/images/js.jpg", title: "JavaScript", value: "80" },
  { imgSrc: "/images/reactjs.png", title: "ReactJS", value: "70" },
];
const DatabaseSkills = [
  { imgSrc: "/images/mysql.jpg", title: "MySql", value: "70" },
  { imgSrc: "/images/mongodb.png", title: "MongoDB", value: "30" },
];

const LanguagesSkills = [
  { imgSrc: "/images/python.png", title: "Python", value: "50" },
  { imgSrc: "/images/js.jpg", title: "JavaScript", value: "80" },
];

export default function Home() {
  const { theme } = useContext(ThemeContext);

  let containerClass = cs({
    "container--dark": theme == "dark-theme",
    "container--light": theme == "light-theme",
  });

  return (
    <Layout header footer>
      <div className={`${styles.container} ${styles[containerClass]}`}>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <SideNavWraper active="Home">
          <main className={styles.main}>
            <div className={styles.hero}>
              <h5>HELLO WORLD</h5>
              <h1>I AM SANTHOSHKUMAR</h1>
              <p>Web Developer, Data Scientist and Programmer</p>
            </div>
            <div>
              <h1 className={styles.heading}>CAREER OBJECTIVES</h1>
              <p className={styles.para}>
                Seeking an entry level job within my chosen field that will
                challenge me and allow me to use my education, skills in a way
                that is mutually beneficial to both myself and my company and
                allow for future growth and advancement.
              </p>
            </div>

            <h1 className={styles.heading}>SKILLS</h1>

            <div className={styles.skillsets}>
              <SkillSet title="Web Development" skills={WebSkills} />
              <SkillSet title="Databases" skills={DatabaseSkills} />
              <SkillSet
                title="Programming Languages"
                skills={LanguagesSkills}
              />
            </div>
            {/* <p>
              The PL report/Holdings/Positions data is prepared based on the
              trades and information available with us, at the time of report
              generation. Zerodha Broking Ltd., does not make any warranty,
              express or implied, or assume any legal/consequential liability,
              or responsibility for the authenticity, and completeness of the
              data presented in this report/data. To double check your PL
              report/Holdings/Positions data, verify it with the Tradebook,
              Contract Notes and the Funds Statement which are available with
              you at all times.
            </p>
            <p>
              The PL report/Holdings/Positions data is prepared based on the
              trades and information available with us, at the time of report
              generation. Zerodha Broking Ltd., does not make any warranty,
              express or implied, or assume any legal/consequential liability,
              or responsibility for the authenticity, and completeness of the
              data presented in this report/data. To double check your PL
              report/Holdings/Positions data, verify it with the Tradebook,
              Contract Notes and the Funds Statement which are available with
              you at all times.
            </p>
            <p>
              The PL report/Holdings/Positions data is prepared based on the
              trades and information available with us, at the time of report
              generation. Zerodha Broking Ltd., does not make any warranty,
              express or implied, or assume any legal/consequential liability,
              or responsibility for the authenticity, and completeness of the
              data presented in this report/data. To double check your PL
              report/Holdings/Positions data, verify it with the Tradebook,
              Contract Notes and the Funds Statement which are available with
              you at all times.
            </p> */}
          </main>
        </SideNavWraper>
      </div>
    </Layout>
  );
}
