import { useContext } from "react";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import cs from "../lib/ClassSelector";
import { ThemeContext } from "../lib/Contexts";
import styles from "../styles/projects.module.scss";
import Layout from "../components/Layout.js";
import { SideNavWraper } from "../components/SideNav";
import ProjectCard from "../components/ProjectCard";

let projects = [
  {
    title: "Facebook",
    imgSrc: "/images/hero-bg.jpg",
    icons: [
      {
        name: "github",
        link: "/",
      },
    ],
  },
  {
    title: "Google",
    imgSrc: "/images/hero-bg.jpg",
    icons: [
      {
        name: "github",
        link: "/",
      },
    ],
  },
  {
    title: "DoDoApp",
    imgSrc: "/images/hero-bg.jpg",
    icons: [
      {
        name: "github",
        link: "/",
      },
    ],
  },
  {
    title: "Blog",
    imgSrc: "/images/hero-bg.jpg",
    icons: [
      {
        name: "github",
        link: "/",
      },
    ],
  },
];

function getIconFor(name) {
  if (name == "github") return faGithub;
}

projects = projects.map((project) => {
  let links = project.icons.map((icon) => {
    return {
      name: icon.name,
      icon: (
        <a href="/">
          <FontAwesomeIcon icon={getIconFor(icon.name)} size="2x" />
        </a>
      ),
    };
  });
  return { ...project, links, icons: undefined };
});

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
          <title>Projects</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <SideNavWraper active="Projects">
          <main className={styles.main}>
            <h1 className={styles.heading}>WHAT I DID</h1>
            <div className={styles.projectsContainer}>
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  className={styles.projectCard}
                  {...project}
                />
              ))}
            </div>
          </main>
        </SideNavWraper>
      </div>
    </Layout>
  );
}
