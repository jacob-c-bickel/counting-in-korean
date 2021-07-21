import { useEffect, useRef, useState } from "react";

import styles from "@styles/Practice.module.scss";
import Page from "@modules/Page/Page";
import Flashcard from "@modules/Flashcard/Flashcard";
import LabeledToggle from "@elements/LabeledToggle/LabeledToggle";
import { generateNativeNumber, generateSinoNumber } from "@lib/numbers";

export default function BasicPractice() {
  const [number, setNumber] = useState(generateNativeNumber());
  const [flashcardReset, setFlashcardReset] = useState(false);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);

  const [promptType, setPromptType] = useState(true);
  const [promptTypeControl, setPromptTypeControl] = useState(true);
  const [numberSystem, setNumberSystem] = useState(true);
  const [numberSystemControl, setNumberSystemControl] = useState(true);

  useEffect(() => {
    if (promptTypeControl === promptType) return; // Stops on initial render
    setFlashcardReset(true);
    setTimeout(() => {
      setPromptType((prev) => !prev);
      setNumber(generateNumber());
    }, 150);
  }, [promptTypeControl]);

  useEffect(() => {
    if (numberSystemControl === numberSystem) return; // Stops on initial render
    setFlashcardReset(true);
    setTimeout(() => {
      setNumberSystem((prev) => !prev);
    }, 150);
  }, [numberSystemControl]);

  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setNumber(generateNumber());
  }, [numberSystem]);

  return (
    <Page header="Basic Practice">
      <div className={styles.container}>
        <div className={styles.topSpacer}></div>
        <div className={styles.option}>
          <label>Prompt</label>
          <LabeledToggle
            value={promptTypeControl}
            onClick={() => setPromptTypeControl((prev) => !prev)}
            onLabel="0-9"
            offLabel="한글"
          />
        </div>
        <div className={styles.option}>
          <label>System</label>
          <LabeledToggle
            value={numberSystemControl}
            onClick={() => setNumberSystemControl((prev) => !prev)}
            onLabel="Native"
            offLabel="Sino"
          />
        </div>
        <Flashcard
          prompt={promptType ? number.number.toLocaleString() : number.hangul}
          promptNote={promptType ? "" : number.romanized}
          answer={promptType ? number.hangul : number.number.toLocaleString()}
          answerNote={promptType ? number.romanized : ""}
          flipped={flashcardFlipped}
          setFlipped={setFlashcardFlipped}
          reset={flashcardReset}
          setReset={setFlashcardReset}
          onNext={() => setNumber(generateNumber())}
        />
      </div>
    </Page>
  );

  function generateNumber() {
    return numberSystem ? generateNativeNumber() : generateSinoNumber();
  }
}
