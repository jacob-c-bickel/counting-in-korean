import Head from "next/head";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from "./Page.module.scss";
import PageHeader from "./PageHeader/PageHeader";
import Menu from "./Menu/Menu";

export default function Page({ children, className, title, header, ...props }) {
  const [showMenu, setShowMenu] = useState(false);
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

  if (title === undefined && header) {
    title = header;
  }

  return (
    <>
      <Head>
        <title>{title && title + " - "}Counting in Korean</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {header && (
        <PageHeader header={header} setShowMenu={setShowMenu} pageScrolled={pageScrolled} />
      )}

      {header && <Menu show={showMenu} setShow={setShowMenu} />}

      <motion.div
        className={styles.Page + " " + className + (header ? "" : " " + styles.menuless)}
        initial={{ translateX: "-100%" }}
        animate={{ translateX: 0 }}
        exit={{ translateX: "100%" }}
        transition={{ duration: 0.15, ease: "easeInOut" }}
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
}
