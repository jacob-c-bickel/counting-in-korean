// import { useContext } from "react";
import { motion } from "framer-motion";

import styles from "./Page.module.scss";

export default function PageContent({ children }) {
  return (
    <motion.div
      className={styles.Page}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.125, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
