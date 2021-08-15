import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styles from "./Menu.module.scss";

export default function Menu({ show, setShow }) {
  const router = useRouter();
  const [removeMenu, setRemoveMenu] = useState(true); // removes child elements from the DOM

  useEffect(() => {
    if (show) {
      setRemoveMenu(false);
    } else {
      setTimeout(() => {
        setRemoveMenu(true);
      }, 300);
    }
  }, [show]);

  const classes = [!show && styles.hidden, removeMenu && styles.removed].filter(Boolean).join(" ");

  return (
    <>
      <div className={styles.MenuBg + " " + classes} onClick={() => setShow(false)} />
      <div className={styles.Menu + " " + classes}>
        <Link href="/" scroll={false}>
          <a className={styles.title} onClick={handleLinkClick} tabIndex="0">
            {"{ counting in korean }"}
          </a>
        </Link>
        <p className={styles.subtitle}>Practice</p>

        <Link href="/practice/basic" scroll={false}>
          <a className={getLinkClassName("/practice/basic")} onClick={handleLinkClick}>
            Basic Practice
          </a>
        </Link>
        <Link href="/practice/context" scroll={false}>
          <a className={getLinkClassName("/practice/context")} onClick={handleLinkClick}>
            Context Practice
          </a>
        </Link>
        <p className={styles.subtitle}>Learn</p>
        <Link href="/learn/native" scroll={false}>
          <a className={getLinkClassName("/learn/native")} onClick={handleLinkClick}>
            Native Reference
          </a>
        </Link>
        <Link href="/learn/sino" scroll={false}>
          <a className={getLinkClassName("/learn/sino")} onClick={handleLinkClick}>
            Sino Reference
          </a>
        </Link>
        <Link href="/learn/counters" scroll={false}>
          <a className={getLinkClassName("/learn/counters")} onClick={handleLinkClick}>
            Counter Reference
          </a>
        </Link>
        <Link href="/learn/usage" scroll={false}>
          <a className={getLinkClassName("/learn/usage")} onClick={handleLinkClick}>
            Number System Usage
          </a>
        </Link>
        <footer className={styles.footer}>Created by Jacob Bickel, 2021</footer>
      </div>
    </>
  );

  function getLinkClassName(path) {
    let className = styles.link;
    if (router.pathname === path) className += " " + styles.active;
    return className;
  }

  function handleLinkClick() {
    setShow(false);
  }
}
