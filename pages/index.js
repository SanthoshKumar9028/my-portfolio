import Head from "next/head";

import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout.js";

export default function Home() {
  return (
    <Layout header footer>
      <div className={styles.container}>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}></main>
      </div>
    </Layout>
  );
}
