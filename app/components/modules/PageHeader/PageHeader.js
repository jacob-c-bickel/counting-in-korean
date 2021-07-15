import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "./PageHeader.module.scss";
import AppContext from "@app/AppContext";
import IconButton from "@elements/IconButton/IconButton";

export default function PageHeader({ title }) {
  const app = useContext(AppContext);
  const [pageScrolled, setPageScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset === 0 && pageScrolled) {
        setPageScrolled(false);
      } else if (window.pageYOffset > 0 && !pageScrolled) {
        setPageScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pageScrolled]);

  let classes = styles.PageHeader + " " + (pageScrolled ? styles.shadow : "");

  return (
    <div className={classes}>
      <Head>
        <title>{title} - Counting in Korean</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IconButton
        icon={faBars}
        className={styles.menuButton}
        onClick={() => app.setShowMenu(true)}
      />
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.spacer} />
    </div>
  );
}
