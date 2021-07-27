import Head from "next/head";
import Link from "next/link";

import styles from "./Home.module.scss";
import Page from "@modules/Page/Page";

export default function Home() {
  return (
    <Page className={styles.Home}>
      <Head>
        <title>Counting in Korean</title>
      </Head>
      <h1>Counting in Korean</h1>
      <p>Practice</p>
      <div className={styles.buttonGrid}>
        <Link href="/practice/basic">
          <button>Basic Practice</button>
        </Link>
        <Link href="/practice/context">
          <button>Context Practice</button>
        </Link>
      </div>
      <p>Learn</p>
      <div className={styles.buttonGrid}>
        <Link href="/learn/native">
          <button>Native Reference</button>
        </Link>

        <Link href="/learn/sino">
          <button>Sino Reference</button>
        </Link>

        <Link href="/learn/usage">
          <button>Number System usage</button>
        </Link>

        <Link href="/learn/counters">
          <button>Counters</button>
        </Link>
      </div>
    </Page>
  );
}
