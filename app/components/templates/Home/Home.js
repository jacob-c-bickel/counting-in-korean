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

      <h1>
        <span>{"{"}</span> counting in korean <span>{"}"}</span>
      </h1>

      <div className={styles.groupContainer}>
        <div className={styles.group}>
          <p>Practice</p>
          <Link href="/practice/basic">
            <button>Basic Practice</button>
          </Link>
          <Link href="/practice/context">
            <button>Context Practice</button>
          </Link>
        </div>

        <div className={styles.group}>
          <p>Learn</p>
          <Link href="/learn/native">
            <button>Native Reference</button>
          </Link>
          <Link href="/learn/sino">
            <button>Sino Reference</button>
          </Link>
          <Link href="/learn/counters">
            <button>Counter Reference</button>
          </Link>
          <Link href="/learn/usage">
            <button>Number System Usage</button>
          </Link>
        </div>
      </div>
    </Page>
  );
}
