import Head from "next/head";

import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout.js";
import SideNav, { SideNavWraper } from "../components/SideNav";

export default function Home() {
  return (
    <Layout header footer>
      <div className={styles.container}>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <SideNavWraper>
          <main className={styles.main}>
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
          </main>
        </SideNavWraper>
      </div>
    </Layout>
  );
}
