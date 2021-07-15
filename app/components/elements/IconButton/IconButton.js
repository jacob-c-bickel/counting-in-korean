import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./IconButton.module.scss";

export default function IconButton({ icon, className, ...props }) {
  return (
    <button className={styles.IconButton + " " + className} {...props}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}
