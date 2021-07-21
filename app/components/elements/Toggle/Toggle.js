import { useState, useEffect } from "react";

import styles from "./Toggle.module.scss";

export default function Toggle({ value, onClick }) {
  const [inTransition, setInTransition] = useState(false);

  useEffect(() => {
    setInTransition(true);
  }, [value]);

  useEffect(() => {
    if (inTransition) {
      setTimeout(() => {
        setInTransition(false);
      }, 150);
    }
  }, [inTransition]);

  return (
    <div className={styles.Toggle} onClick={handleClick} tabIndex="0" onKeyDown={handleKeyDown}>
      <div className={styles.circle + (value ? " " + styles.active : "")}></div>
    </div>
  );

  function handleClick(event) {
    if (!inTransition) {
      onClick();
    }
  }

  function handleKeyDown(event) {
    if (!inTransition) {
      if (event.key === "Enter" || event.key === " ") {
        onClick();
      }
    }
  }
}
