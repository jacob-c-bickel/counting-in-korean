const hangulRomanization = require("hangul-romanization");

import { NativeNumbers } from "@lib/data/numbers";
import styles from "@styles/Reference.module.scss";
import Page from "@modules/Page/Page";

export default function NativeReference() {
  return (
    <Page className={styles.Reference} style={{ marginBottom: "8rem" }} header="Native Reference">
      <h2>Numbers</h2>
      <table>
        <tbody>
          {NativeNumbers.map((n) => (
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
        <p>Native Korean numbers only go from 1 to 99.</p>
        <p>
          Two digit numbers are a combination of the tens and ones place. Do not add a space.
          <br />
          <span className={styles.soft}>&emsp;e.g. 31 is 서른하나 (seoreun-hana)</span>
        </p>
        <p>
          When using a counter, the following native numbers change:
          <ul style={{ marginLeft: "2rem" }}>
            <li>1: 하나 &rarr; 한 (han)</li>
            <li>2: 둘 &rarr; 두 (du)</li>
            <li>3: 셋 &rarr; 세 (se)</li>
            <li>4: 넷 &rarr; 네 (ne)</li>
            <li>20: 스물 &rarr; 스무 (seumu)</li>
          </ul>
          The one's place is always changed, however 스무 is only used for exactly 20.
          <br />
          <span className={styles.soft}>&emsp;e.g. 21 is 스물한 (seumul-han)</span>
        </p>
      </div>
    </Page>
  );
}
