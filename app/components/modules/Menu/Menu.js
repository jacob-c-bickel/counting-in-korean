import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import styles from "./Menu.module.scss";
import AppContext from "@app/AppContext";

export default function Menu() {
  const router = useRouter();
  const app = useContext(AppContext);
  const [removeMenu, setRemoveMenu] = useState(true);

  useEffect(() => {
    if (app.showMenu) {
      setRemoveMenu(false);
    } else {
      setTimeout(() => {
        setRemoveMenu(true);
      }, 300);
    }
  }, [app.showMenu]);

  const classes = [!app.showMenu && styles.hidden, removeMenu && styles.removed]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <div className={styles.MenuBg + " " + classes} onClick={() => app.setShowMenu(false)} />
      <div className={styles.Menu + " " + classes}>
        <Link href="/">
          <a className={styles.title} onClick={handleLinkClick} tabIndex="0">
            Counting in Korean!
          </a>
        </Link>
        <p className={styles.subtitle}>Practice</p>

        <Link href="/practice/basic">
          <a className={getLinkClassName("/practice/basic")} onClick={handleLinkClick}>
            Basic Practice
          </a>
        </Link>
        <Link href="/practice/context">
          <a className={getLinkClassName("/practice/context")} onClick={handleLinkClick}>
            Context Practice
          </a>
        </Link>
        <p className={styles.subtitle}>Learn</p>
        <Link href="/learn/native">
          <a className={getLinkClassName("/learn/native")} onClick={handleLinkClick}>
            Native Reference
          </a>
        </Link>
        <Link href="/learn/sino">
          <a className={getLinkClassName("/learn/sino")} onClick={handleLinkClick}>
            Sino Reference
          </a>
        </Link>
        <Link href="/learn/usage">
          <a className={getLinkClassName("/learn/usage")} onClick={handleLinkClick}>
            Number System Usage
          </a>
        </Link>
        {/* <Link href="/learn/counters">
          <a className={getLinkClassName("/learn/counters")} onClick={handleLinkClick}>
            Counter Reference
          </a>
        </Link> */}
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
    app.setShowMenu(false);
  }
}
