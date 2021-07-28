import { useCallback, useEffect, useState } from "react";

import styles from "@modules/Flashcard/Flashcard.module.scss";

const ANIMATION_DURATION = 500;

export default function useFlashcard(getValues) {
  const [valueA, setValueA] = useState();
  const [noteA, setNoteA] = useState();
  const [valueB, setValueB] = useState();
  const [noteB, setNoteB] = useState();
  const [onSwap, setOnSwap] = useState();

  const [promptWithA, setPromptWithA] = useState(true);
  const [promptWithAControlValue, setPromptWithAControlValue] = useState(true);
  const [flipped, setFlipped] = useState(false);
  const [animationClass, setAnimationClass] = useState(styles.incoming);

  useEffect(() => {
    const newValues = getValues();
    setValueA(newValues.valueA);
    setNoteA(newValues.noteA);
    setValueB(newValues.valueB);
    setNoteB(newValues.noteB);
    setOnSwap(newValues.onSwap);
    setTimeout(() => setAnimationClass(""), ANIMATION_DURATION);
  }, []);

  const flip = useCallback(() => {
    if (animationClass) return;
    setAnimationClass(styles.flipping);
    setTimeout(() => {
      setFlipped(true);
    }, ANIMATION_DURATION / 2);
    setTimeout(() => {
      setAnimationClass("");
    }, ANIMATION_DURATION);
  }, [animationClass]);

  const swap = useCallback(() => {
    if (animationClass) return;
    setAnimationClass(styles.swapping);
    const newValues = getValues();
    setTimeout(() => {
      setValueA(newValues.valueA);
      setNoteA(newValues.noteA);
      setValueB(newValues.valueB);
      setNoteB(newValues.noteB);
      setFlipped(false);
      if (typeof onSwap === "function") onSwap();
      setOnSwap(newValues.onSwap);
    }, ANIMATION_DURATION);
    setTimeout(() => {
      setAnimationClass("");
    }, ANIMATION_DURATION * 2);
  }, [getValues, animationClass]);

  const switchPrompt = useCallback(() => {
    if (animationClass) return;
    setPromptWithAControlValue((prev) => !prev);
    swap();
    setTimeout(() => {
      setPromptWithA((prev) => !prev);
    }, ANIMATION_DURATION);
  }, [swap, animationClass]);

  useEffect(() => {
    swap();
  }, [getValues]);

  return {
    valueA,
    setValueA,
    noteA,
    setNoteA,
    valueB,
    setValueB,
    noteB,
    setNoteB,
    promptWithA,
    setPromptWithA,
    promptWithAControlValue,
    setPromptWithAControlValue,
    flipped,
    setFlipped,
    animationClass,
    setAnimationClass,
    flip,
    swap,
    switchPrompt,
    // component: <Flashcard />,
  };
}
