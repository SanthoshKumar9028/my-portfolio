import { useCallback, useContext, useState } from "react";
import Head from "next/head";

import cs from "../../lib/ClassSelector";
import { ThemeContext } from "../../lib/Contexts";
import styles from "./contact-me.module.scss";
import Layout from "../../components/Layout.js";
import { SideNavWraper } from "../../components/SideNav";

async function handleOnSubmit(e, fname, lname, msg, reset) {
  e.preventDefault();
  let data = { fname, lname, msg };
  try {
    let response = await fetch("/api/add-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    response = await response.text();
    if (response.indexOf("sent") != -1) {
      alert("Message sent sucessfully.");
      return;
    }
    throw new Error("unsucessfull");
  } catch {
    alert("Unsucessfully, try again later.");
  } finally {
    reset();
  }
}

export default function ContactMe() {
  const { theme } = useContext(ThemeContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const reset = useCallback(() => {
    setFirstName("");
    setLastName("");
    setMessage("");
    setIsLoading(false);
  }, []);

  let containerClass = cs({
    "container--dark": theme == "dark-theme",
    "container--light": theme == "light-theme",
  });

  containerClass = `${styles.container} ${styles[containerClass]}`;

  let formClass = cs({
    "form--dark": theme == "dark-theme",
    "form--light": theme == "light-theme",
  });

  formClass = `${styles.form} ${styles[formClass]}`;

  return (
    <Layout header footer>
      <div className={containerClass}>
        <Head>
          <title>Contact Me</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <SideNavWraper active="Contact Me">
          <main className={styles.main}>
            <div className={styles.hero}>
              <h1 className={styles.heading}>How To Contact</h1>
              <p className={styles.para}>
                Please do not send any unnessary data to me. It will reduce
                confusition among the one who is realy trying to contact me.
              </p>
            </div>
            <div className={styles.details}>
              <div>
                <h2 className={styles.heading}>ADDRESS</h2>
                <address className={styles.details__address}>
                  No: 40, Gandhi st, V.P Sing Nagar, shanmugapuram, puducherry -
                  9
                </address>
              </div>
              <div>
                <h2 className={styles.heading}>EMAIL ADDRESS</h2>
                <a
                  href="mailto:santhoshkumar9028@pec.edu"
                  className={styles.link}
                >
                  santhoshkumar9028@pec.edu
                </a>
              </div>
              <div>
                <h2 className={styles.heading}>PHONE NUMBER</h2>
                <a href="tel:9080024160" className={styles.link}>
                  9080024160
                </a>
              </div>
            </div>
            <form
              action="/api/add-message"
              method="POST"
              className={formClass}
              onSubmit={(e) => {
                setIsLoading(true);
                handleOnSubmit(e, firstName, lastName, message, reset);
              }}
            >
              <label htmlFor="fname">FIRST NAME</label>
              <input
                id="fname"
                name="first_name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="first name"
                required
              />
              <label htmlFor="lname">LAST NAME</label>
              <input
                id="lname"
                name="last_name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="last name"
                required
              />
              <label htmlFor="message">MESSAGE</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="enter message"
                required
              />
              <input
                type="submit"
                disabled={isLoading}
                style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
                value={isLoading ? "Loading..." : "SUBMIT"}
              />
            </form>
          </main>
        </SideNavWraper>
      </div>
    </Layout>
  );
}
