import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "@styles/Practice.module.scss";
import Page from "@modules/Page/Page";
import Flashcard from "@modules/Flashcard/Flashcard";
import LabeledToggle from "@elements/LabeledToggle/LabeledToggle";
import { generateContextPhrase } from "@lib/context";

export default function ContextPractice() {
  const [phrase, setPhrase] = useState(generateContextPhrase());
  const [flashcardReset, setFlashcardReset] = useState(false);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);

  const [promptType, setPromptType] = useState(true);
  const [promptTypeControl, setPromptTypeControl] = useState(true);

  useEffect(() => {
    if (promptTypeControl === promptType) return; // Stops on initial render
    setFlashcardReset(true);
    setTimeout(() => {
      setPromptType((prev) => !prev);
      setPhrase(generateContextPhrase());
    }, 150);
  }, [promptTypeControl]);

  return (
    <Page header="Context Practice">
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
        <Flashcard
          prompt={promptType ? phrase.english : phrase.hangul}
          promptNote={promptType ? "" : phrase.romanized}
          answer={promptType ? phrase.hangul : phrase.english}
          answerNote={promptType ? phrase.romanized : ""}
          flipped={flashcardFlipped}
          setFlipped={setFlashcardFlipped}
          reset={flashcardReset}
          setReset={setFlashcardReset}
          onNext={() => setPhrase(generateContextPhrase())}
        />
        {flashcardFlipped && (
          <div className={styles.notes}>
            {phrase.notes.map((note, i) => (
              <div key={i}>
                <FontAwesomeIcon icon={faInfoCircle} />
                <p>{note}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Page>
  );
}
