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
      <Link href="/practice/basic">
        <a>Basic Practice</a>
      </Link>

      <Link href="/practice/context">
        <a>Context Practice</a>
      </Link>

      <Link href="/learn/native">
        <a>Native Reference</a>
      </Link>

      <Link href="/learn/sino">
        <a>Sino Reference</a>
      </Link>

      <Link href="/learn/usage">
        <a>Number System usage</a>
      </Link>
    </Page>
  );
}
