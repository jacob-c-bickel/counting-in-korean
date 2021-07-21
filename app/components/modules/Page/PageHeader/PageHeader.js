import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "./PageHeader.module.scss";
import IconButton from "@elements/IconButton/IconButton";

export default function PageHeader({ header, setShowMenu, pageScrolled }) {
  let classes = styles.PageHeader + " " + (pageScrolled ? styles.shadow : "");

  return (
    <div className={classes}>
      <IconButton icon={faBars} className={styles.menuButton} onClick={() => setShowMenu(true)} />
      <h1>{header}</h1>
      <div className={styles.spacer} />
    </div>
  );
}
