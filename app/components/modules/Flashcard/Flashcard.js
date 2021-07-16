import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from "./Flashcard.module.scss";

const variants = {
  incoming: {
    translateX: "-10rem",
    opacity: 0,
    transition: { duration: 0 },
  },
  outgoing: {
    translateX: "10rem",
    opacity: 0,
    transition: { duration: 0.15 },
  },
  normal: {
    translateX: 0,
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.15 },
  },
  flipping: {
    rotateX: 90,
    transition: { duration: 0.15 },
  },
};

export default function Flashcard({
  prompt,
  promptNote,
  answer,
  answerNote,
  reset,
  setReset,
  onNext,
}) {
  const [flipped, setFlipped] = useState(false);
  const [variant, setVariant] = useState("incoming");

  useEffect(() => {
    if (variant === "incoming") {
      setTimeout(() => setVariant("normal"), 50);
    }
    if (variant === "flipping") {
      setTimeout(() => {
        setVariant("normal");
        setFlipped(true);
      }, 150);
    }
    if (variant === "outgoing") {
      setTimeout(() => {
        setVariant("incoming");
        setFlipped(false);
        if (reset) {
          setReset(false);
        } else {
          onNext();
        }
      }, 150);
    }
  }, [variant]);

  useEffect(() => {
    if (reset) {
      // setReset(false);
      setVariant("outgoing");
    }
  }, [reset]);

  return (
    <motion.div
      variants={variants}
      animate={variant}
      onClick={handleClick}
      className={styles.Flashcard}
      tabIndex="0"
      onKeyDown={handleKeyDown}
    >
      {!flipped ? (
        <>
          <p className={styles.promptLarge}>{prompt}</p>
          <p className={styles.note}>{promptNote}</p>
        </>
      ) : (
        <>
          <p className={styles.prompt}>{prompt}</p>
          <p className={styles.note}>{promptNote}</p>
          <p className={styles.answer}>{answer}</p>
          <p className={styles.note}>{answerNote}</p>
        </>
      )}
    </motion.div>
  );

  function handleClick(event) {
    if (flipped) {
      setVariant("outgoing");
    } else {
      setVariant("flipping");
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleClick();
    }
  }
}
