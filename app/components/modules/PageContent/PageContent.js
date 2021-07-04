import { motion } from "framer-motion";

import styles from "./PageContent.module.scss";

export default function PageContent({ children }) {
  return (
    <motion.div
      initial={{ translateX: "-100vw" }}
      animate={{ translateX: 0 }}
      exit={{ translateX: "100vw" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={styles.PageContent}
    >
      {children}
    </motion.div>
  );
}
