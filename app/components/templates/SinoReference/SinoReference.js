import styles from "@styles/Reference.module.scss";
import Page from "@modules/Page/Page";

export default function SinoReference() {
  return (
    <Page className={styles.Reference} style={{ marginBottom: "8rem" }} header="Sino Reference">
      <h2>Numbers</h2>
      <table>
        <tbody>
          <tr>
            <td>0</td>
            <td>영/공</td>
            <td>yong/gong</td>
          </tr>
          <tr>
            <td>1</td>
            <td>일</td>
            <td>il</td>
          </tr>
          <tr>
            <td>2</td>
            <td>이</td>
            <td>i</td>
          </tr>
          <tr>
            <td>3</td>
            <td>삼</td>
            <td>sam</td>
          </tr>
          <tr>
            <td>4</td>
            <td>사</td>
            <td>sa</td>
          </tr>
          <tr>
            <td>5</td>
            <td>오</td>
            <td>o</td>
          </tr>
          <tr>
            <td>6</td>
            <td>육</td>
            <td>yuk</td>
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
            <td>구</td>
            <td>gu</td>
          </tr>
          <tr>
            <td>10</td>
            <td>십</td>
            <td>sip</td>
          </tr>
          <tr>
            <td>100</td>
            <td>백</td>
            <td>baek</td>
          </tr>
          <tr>
            <td>1,000</td>
            <td>천</td>
            <td>cheon</td>
          </tr>
          <tr>
            <td>10,000</td>
            <td>만</td>
            <td>man</td>
          </tr>
          <tr>
            <td>100 M</td>
            <td>억</td>
            <td>eok</td>
          </tr>
          <tr>
            <td>1 trillion</td>
            <td>조</td>
            <td>jo</td>
          </tr>
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
          etc). In Korean, the grand unit changes in 10,000-fold intervals (만, 억, etc). This can
          be tricky as commas are still inserted on a 1,000-fold basis. When spelling out the
          number, however, spaces are added on a 10,000-fold basis.
        </p>
      </div>
    </Page>
  );
}
