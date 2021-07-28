import { useCallback, useState } from "react";

import { generateNativeNumber, generateSinoNumber } from "@lib/numbers";
import useFlashcard from "@app/hooks/useFlashcard";
import styles from "@styles/Practice.module.scss";
import Page from "@modules/Page/Page";
import Flashcard from "@modules/Flashcard/Flashcard";
import LabeledToggle from "@elements/LabeledToggle/LabeledToggle";

export default function BasicPractice() {
  const [numberSystem, setNumberSystem] = useState(true);

  const generateNumber = useCallback(() => {
    let newNumber = numberSystem ? generateNativeNumber() : generateSinoNumber();
    return {
      valueA: newNumber.number.toLocaleString(),
      noteA: "",
      valueB: newNumber.hangul,
      noteB: newNumber.romanized,
    };
  }, [numberSystem]);

  const flashcard = useFlashcard(generateNumber);

  return (
    <Page header="Basic Practice">
      <div className={styles.container}>
        <div className={styles.topSpacer}></div>
        <div className={styles.option}>
          <label>Prompt</label>
          <LabeledToggle
            value={flashcard.promptWithAControlValue}
            onClick={flashcard.switchPrompt}
            onLabel="0-9"
            offLabel="한글"
          />
        </div>
        <div className={styles.option}>
          <label>System</label>
          <LabeledToggle
            value={numberSystem}
            onClick={() => !flashcard.animationClass && setNumberSystem((prev) => !prev)}
            onLabel="Native"
            offLabel="Sino"
          />
        </div>
        <Flashcard {...flashcard} />
      </div>
    </Page>
  );
}
