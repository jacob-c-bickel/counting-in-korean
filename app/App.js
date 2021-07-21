import { AnimatePresence } from "framer-motion";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import styles from "./App.module.scss";

config.autoAddCss = false; // Fontawesome initial load bugfix

export default function App({ Component, pageProps, router }) {
  return (
    <div id={styles.AppWrapper}>
      <AnimatePresence exitBeforeEnter>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
