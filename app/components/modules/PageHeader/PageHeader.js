import Head from "next/head";
import { useContext } from "react";

import styles from "./PageHeader.module.scss";
import AppContext from "@contexts/AppContext";

export default function PageHeader({ title }) {
  const app = useContext(AppContext);

  return (
    <div className={styles.PageHeader}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button className={styles.menuButton} onClick={() => app.setShowMenu((prev) => !prev)}>
        Menu
      </button>
      <h1>{title}</h1>
      <div className={styles.spacer} />
    </div>
  );
}