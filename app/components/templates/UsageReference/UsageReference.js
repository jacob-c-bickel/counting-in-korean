import Page from "@modules/Page/Page";

import styles from "@styles/Reference.module.scss";

export default function UsageReference() {
  return (
    <Page
      className={styles.Reference}
      style={{ marginBottom: "8rem" }}
      header="Number System Usage"
    >
      <h2>General Rules</h2>
      <div className={styles.notes}>
        <p>
          In general, Native Korean is used for "counting" and Sino-Korean is used for "numbers".
        </p>
        <p>
          The higher the number the more likely Sino-Korean is to be used until Native numbers stop
          entirely at 99.
        </p>
        <p>
          When telling the time, Native Korean is used for the hours and Sino-Korean is used for the
          minutes.
        </p>
      </div>

      <h2>Native Korean Uses</h2>
      <ul className={styles.notes}>
        <li>Counting in small numbers</li>
        <li>Hours</li>
        <li>Age (when speaking of yourself or someone younger)</li>
      </ul>

      <h2>Sino-Korean Uses</h2>
      <ul className={styles.notes}>
        <li>Money</li>
        <li>Measurements (length, weight, etc.)</li>
        <li>Phone Numbers</li>
        <li>Addresses</li>
        <li>Math</li>
        <li>Minutes, days, months, and years</li>
        <li>Age (in a formal context or when speaking of someone older)</li>
      </ul>

      <h2>Artillery Numbers</h2>
      <div className={styles.notes}>
        <p>
          The military uses a combination of Native and Sino numbers called 포병 숫자 (artillery
          numbers). Its purpose is to maximize vocal clarity, similar to the NATO phonetic alphabet.
          If someone wants to be especially clear - when repeating a number over the phone for
          instance - they may use all or part of this system. Substituing 일 for 하나 is the most
          commonly done.
        </p>
        <table>
          <tbody>
            <tr>
              <td>0</td>
              <td>공</td>
              <td>gong</td>
            </tr>
            <tr>
              <td>1</td>
              <td>하나</td>
              <td>hana</td>
            </tr>
            <tr>
              <td>2</td>
              <td>둘</td>
              <td>dul</td>
            </tr>
            <tr>
              <td>3</td>
              <td>삼</td>
              <td>sam</td>
            </tr>
            <tr>
              <td>4</td>
              <td>넷</td>
              <td>net</td>
            </tr>
            <tr>
              <td>5</td>
              <td>오</td>
              <td>o</td>
            </tr>
            <tr>
              <td>6</td>
              <td>여섯</td>
              <td>yeoseot</td>
            </tr>
            <tr>
              <td>7</td>
              <td>칠</td>
              <td>chil</td>
            </tr>
            <tr>
              <td>8</td>
              <td>팔</td>
              <td>pal</td>
            </tr>
            <tr>
              <td>9</td>
              <td>아홉</td>
              <td>ahop</td>
            </tr>
          </tbody>
        </table>
        <p>Multi-digit numbers are read out digit by digit.</p>
      </div>
    </Page>
  );
}
