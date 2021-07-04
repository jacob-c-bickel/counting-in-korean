import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import "@styles/globals.scss";
import AppContext from "@contexts/AppContext";
import Menu from "@modules/Menu/Menu";

function App({ Component, pageProps, router }) {
  const [showMenu, setShowMenu] = useState(false);

  const app = {
    showMenu,
    setShowMenu,
  };

  return (
    <AppContext.Provider value={app}>
      <div id="AppWrapper">
        <Menu />
        <AnimatePresence exitBeforeEnter>
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </div>
    </AppContext.Provider>
  );
}

export default App;
