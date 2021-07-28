// import { motion } from "framer-motion";
import { useState } from "react";

import styles from "./Flashcard.module.scss";

export default function Flashcard(props) {
  if (props.promptWithA) {
    var prompt = props.valueA;
    var promptNote = props.noteA;
    var answer = props.valueB;
    var answerNote = props.noteB;
  } else {
    var prompt = props.valueB;
    var promptNote = props.noteB;
    var answer = props.valueA;
    var answerNote = props.noteA;
  }

  return (
    <div
      // variants={variants}
      // animate={variant}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={styles.Flashcard + " " + props.animationClass}
      tabIndex="0"
    >
      {!props.flipped ? (
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
    </div>
  );

  function handleClick(event) {
    if (props.flipped) {
      props.swap();
    } else {
      props.flip();
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleClick();
    }
  }
}
