import { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "@styles/Practice.module.scss";
import { generateContextPhrase } from "@lib/context";
import useFlashcard from "@app/hooks/useFlashcard";
import Page from "@modules/Page/Page";
import Flashcard from "@modules/Flashcard/Flashcard";
import LabeledToggle from "@elements/LabeledToggle/LabeledToggle";

export default function ContextPractice() {
  const [notes, setNotes] = useState([]);

  const generatePhrase = useCallback(() => {
    let newPhrase = generateContextPhrase();
    return {
      valueA: newPhrase.english,
      noteA: newPhrase.englishNote,
      valueB: newPhrase.hangul,
      noteB: newPhrase.romanized,
      onSwap: () => setNotes(newPhrase.notes),
    };
  }, []);

  const flashcard = useFlashcard(generatePhrase);

  let noteAnimationClass = "";
  if (flashcard.animationClass.includes("flipping")) {
    noteAnimationClass = styles.fadeIn;
  } else if (flashcard.animationClass.includes("swapping")) {
    noteAnimationClass = styles.fadeOut;
  }

  return (
    <Page header="Context Practice">
      <div className={styles.container}>
        <div className={styles.topSpacer} />
        <div className={styles.option}>
          <label>Prompt</label>
          <LabeledToggle
            value={flashcard.promptWithAControlValue}
            onClick={flashcard.switchPrompt}
            onLabel="English"
            offLabel="한국어"
          />
        </div>
        <Flashcard {...flashcard} />
        {flashcard.flipped && (
          <div className={styles.notes + " " + noteAnimationClass}>
            {notes.map((note, i) => (
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
