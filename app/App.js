import Router from "next/router";
import { AnimatePresence } from "framer-motion";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import styles from "./App.module.scss";

config.autoAddCss = false; // Fontawesome initial load bugfix

// Next.js CSS Module unloading during exit animation after build bugfix
export const fixTimeoutTransition = (timeout) => {
  Router.events.on("beforeHistoryChange", () => {
    // Create a clone of every <style> and <link> that currently affects the page. It doesn't matter
    // if Next.js is going to remove them or not since we are going to remove the copies ourselves
    // later on when the transition finishes.
    const nodes = document.querySelectorAll("link[rel=stylesheet], style:not([media=x])");
    const copies = [...nodes].map((el) => el.cloneNode(true));

    for (let copy of copies) {
      // Remove Next.js' data attributes so the copies are not removed from the DOM in the route
      // change process.
      copy.removeAttribute("data-n-p");
      copy.removeAttribute("data-n-href");

      // Add duplicated nodes to the DOM.
      document.head.appendChild(copy);
    }

    const handler = () => {
      // Emulate a `.once` method using `.on` and `.off`
      Router.events.off("routeChangeComplete", handler);

      window.setTimeout(() => {
        for (let copy of copies) {
          // Remove previous page's styles after the transition has finalized.
          document.head.removeChild(copy);
        }
      }, timeout);
    };

    Router.events.on("routeChangeComplete", handler);
  });
};
fixTimeoutTransition(300);

export default function App({ Component, pageProps, router }) {
  return (
    <div id={styles.AppWrapper}>
      <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
