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
        <p>If a more specific counter isn't known, 개 is the most commonly substituted.</p>
        <p>
          When spelling out a number, a space is used between the number and the counter. When
          digits are used there is no space.
        </p>
      </div>

      <h2>Common Counters</h2>
      <table className={styles.numbers}>
        <tbody>
          <tr>
            <td>Things</td>
            <td>개</td>
            <td>gae</td>
          </tr>
          <tr>
            <td>People</td>
            <td>명</td>
            <td>myeong</td>
          </tr>
          <tr>
            <td>Actions</td>
            <td>번</td>
            <td>beon</td>
          </tr>
        </tbody>
      </table>

      <h2>More Counters</h2>
      <table className={styles.numbers}>
        <tbody>
          <tr>
            <td>Years</td>
            <td>년</td>
            <td>nyeon</td>
          </tr>
          <tr>
            <td>Months</td>
            <td>월</td>
            <td>wol</td>
          </tr>
          <tr>
            <td>Days</td>
            <td>일</td>
            <td>il</td>
          </tr>
          <tr>
            <td>Age (native)</td>
            <td>살</td>
            <td>sal</td>
          </tr>
          <tr>
            <td>Age (sino)</td>
            <td>세</td>
            <td>sae</td>
          </tr>
          <tr>
            <td>Animals</td>
            <td>마리</td>
            <td>mari</td>
          </tr>
          <tr>
            <td>Slices</td>
            <td>조각</td>
            <td>jogak</td>
          </tr>
          <tr>
            <td>Books</td>
            <td>권</td>
            <td>gwon</td>
          </tr>
          <tr>
            <td>Bottles</td>
            <td>병</td>
            <td>byeong</td>
          </tr>
          <tr>
            <td>Clothing</td>
            <td>벌</td>
            <td>beol</td>
          </tr>
        </tbody>
      </table>
    </Page>
  );
}
