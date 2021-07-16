import { useEffect, useState } from "react";

import styles from "@styles/Practice.module.scss";
import Page from "@modules/Page/Page";
import PageHeader from "@modules/PageHeader/PageHeader";
import Flashcard from "@modules/Flashcard/Flashcard";
import LabeledToggle from "@elements/LabeledToggle/LabeledToggle";
import { generateContextPhrase } from "@lib/context";

export default function ContextPractice() {
  const [phrase, setPhrase] = useState(generateContextPhrase());
  // const [number, setNumber] = useState(generateNativeNumber());
  const [flashcardReset, setFlashcardReset] = useState(false);

  const [promptType, setPromptType] = useState(true);
  const [promptTypeControl, setPromptTypeControl] = useState(true);
  // const [numberSystem, setNumberSystem] = useState(true);
  // const [numberSystemControl, setNumberSystemControl] = useState(true);

  useEffect(() => {
    if (promptTypeControl === promptType) return; // Stops on initial render
    setFlashcardReset(true);
    setTimeout(() => {
      setPromptType((prev) => !prev);
      setPhrase(generateContextPhrase());
    }, 150);
  }, [promptTypeControl]);

  // useEffect(() => {
  //   if (numberSystemControl === numberSystem) return; // Stops on initial render
  //   setFlashcardReset(true);
  //   setTimeout(() => {
  //     setNumberSystem((prev) => !prev);
  //   }, 150);
  // }, [numberSystemControl]);

  // const firstRender = useRef(true);
  // useEffect(() => {
  //   if (firstRender.current) {
  //     firstRender.current = false;
  //     return;
  //   }
  //   setNumber(generateNumber());
  // }, [numberSystem]);

  return (
    <Page>
      <PageHeader title="Context Practice" />
      <div className={styles.container}>
        <div className={styles.topSpacer} />
        <div className={styles.option}>
          <label>Prompt</label>
          <LabeledToggle
            value={promptTypeControl}
            onClick={() => setPromptTypeControl((prev) => !prev)}
            onLabel="English"
            offLabel="한국어"
          />
        </div>
        {/* <div className={styles.option}>
          <label>System</label>
          <LabeledToggle
            value={numberSystemControl}
            onClick={() => setNumberSystemControl((prev) => !prev)}
            onLabel="Native"
            offLabel="Sino"
          />
        </div> */}
        <Flashcard
          prompt={promptType ? phrase.english : phrase.hangul}
          promptNote={promptType ? "" : phrase.romanized}
          answer={promptType ? phrase.hangul : phrase.english}
          answerNote={promptType ? phrase.romanized : ""}
          reset={flashcardReset}
          setReset={setFlashcardReset}
          onNext={() => setPhrase(generateContextPhrase())}
        />
        <div className={styles.botSpacer} />
      </div>
    </Page>
  );

  // function generateNumber() {
  //   return numberSystem ? generateNativeNumber() : generateSinoNumber();
  // }
}
