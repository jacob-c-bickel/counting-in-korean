import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import styles from "./App.module.scss";
import AppContext from "./AppContext";
import Menu from "@modules/Menu/Menu";

config.autoAddCss = false; // Fontawesome initial load bugfix

export default function App({ Component, pageProps, router }) {
  const [showMenu, setShowMenu] = useState(false);

  const app = {
    showMenu,
    setShowMenu,
  };

  return (
    <AppContext.Provider value={app}>
      <div id={styles.AppWrapper}>
        <Menu />
        <AnimatePresence exitBeforeEnter>
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </div>
    </AppContext.Provider>
  );
}
