const hangulRomanization = require("hangul-romanization");

import { SinoNumbers } from "@lib/data/numbers";
import styles from "@styles/Reference.module.scss";
import Page from "@modules/Page/Page";

export default function SinoReference() {
  return (
    <Page className={styles.Reference} style={{ marginBottom: "8rem" }} header="Sino Reference">
      <h2>Numbers</h2>
      <table>
        <tbody>
          {SinoNumbers.map((n) => (
            <tr>
              <td className={styles.right}>{n.number}</td>
              <td>
                {n.hangul} <span>({hangulRomanization.convert(n.hangul)})</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Notes</h2>
      <div className={styles.notes}>
        <p>
          일 <span className={styles.soft}>(il)</span> is not added to the 10s/100s/etc place.
          <br />
          <span className={styles.soft}>&emsp;e.g. 111 is 백십일 not 일백일십일</span>
        </p>
        <p>
          There are two Sino-Korean words for 0. 영 is used for points, temperature, and math. 공 is
          used for telephone numbers.
        </p>
        <p>
          In English, the grand unit changes in 1,000-fold intervals (thousand, million, billion,
          etc). In Korean, the grand unit changes in 10,000-fold intervals (만, 억, 조, etc). Commas
          are still inserted on a 1,000-fold interval, however when spelling out the number spaces
          are added on a 10,000-fold interval.
        </p>
      </div>
    </Page>
  );
}
