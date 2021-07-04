import Link from "next/link";
import { useContext, useEffect, useState } from "react";

import styles from "./Menu.module.scss";
import AppContext from "@contexts/AppContext";

export default function Menu() {
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

  const classes = ` ${!app.showMenu ? styles.hidden : ""} ${removeMenu ? styles.removed : ""}`;

  return (
    <>
      <div className={styles.MenuBg + classes} onClick={() => app.setShowMenu(false)} />
      <div className={styles.Menu + classes}>
        <p>Menu</p>
        <Link href="/">Home</Link>
        <Link href="/practice/basic">Basic Practice</Link>
      </div>
    </>
  );
}
