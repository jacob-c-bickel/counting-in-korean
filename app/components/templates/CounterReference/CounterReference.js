const hangulRomanization = require("hangul-romanization");

import counters from "@lib/data/counters";
import styles from "@styles/Reference.module.scss";
import Page from "@modules/Page/Page";

export default function CounterReference() {
  return (
    <Page className={styles.Reference} style={{ marginBottom: "8rem" }} header="Counter Reference">
      <h2>Notes</h2>
      <div className={styles.notes}>
        <p>
          When counting things in Korean, a counter word in included after the number. This word
          changes based on what is being counted. The general word order is noun &rarr; number
          &rarr; counter.
          <br />
          <span className={styles.soft}>&emsp;e.g. 12 apples is 사과 열두 개</span>
        </p>
        <p>
          There are hundreds of counter words. If a more specific counter isn't known, 개 is the
          most commonly substituted.
        </p>
        <p>
          When spelling out a number, a space is used between the number and the counter. When
          digits are used there is no space.
        </p>
      </div>

      <h2>Native Counters</h2>
      <table>
        <tbody>
          {counters
            .filter((c) => c.numberSystem === "Native" && !c.dateAndTime)
            .map((c) => (
              <tr>
                <td>{c.description}</td>
                <td>
                  {c.hangul} <span>({hangulRomanization.convert(c.hangul)})</span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <h2>Sino Counters</h2>
      <table>
        <tbody>
          {counters
            .filter((c) => !c.common && c.numberSystem === "Sino" && !c.dateAndTime)
            .map((c) => (
              <tr>
                <td>{c.description}</td>
                <td>
                  {c.hangul} <span>({hangulRomanization.convert(c.hangul)})</span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <h2>Date and Time Counters</h2>
      <table>
        <tbody>
          {counters
            .filter((c) => c.dateAndTime)
            .map((c) => (
              <tr>
                <td>{c.description}</td>
                <td>
                  {c.hangul} <span>({hangulRomanization.convert(c.hangul)})</span>
                </td>
                <td>{c.numberSystem}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Page>
  );
}
