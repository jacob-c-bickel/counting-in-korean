import styles from "@styles/Reference.module.scss";
import Page from "@modules/Page/Page";

export default function CounterReference() {
  return (
    <Page className={styles.Reference} style={{ marginBottom: "8rem" }} header="Counter Reference">
      <h2>Counters</h2>
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
          <tr>
            <td>Age</td>
            <td>살</td>
            <td>sal</td>
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
          <tr>
            <td>Days</td>
            <td>일</td>
            <td>il</td>
          </tr>
          <tr>
            <td>Months</td>
            <td>월</td>
            <td>wol</td>
          </tr>
          <tr>
            <td>Years</td>
            <td>년</td>
            <td>nyeon</td>
          </tr>
        </tbody>
      </table>
      <h2>Notes</h2>
      <div className={styles.notes}>
        <p>
          When using a counter, the following native numbers change:
          <br />
          <span className={styles.soft}>&emsp;1: 하나 &rarr; 한</span>
          <br />
          <span className={styles.soft}>&emsp;2: 둘 &rarr; 두</span>
          <br />
          <span className={styles.soft}>&emsp;3: 셋 &rarr; 세</span>
          <br />
          <span className={styles.soft}>&emsp;4: 넷 &rarr; 네</span>
          <br />
          <span className={styles.soft}>&emsp;20: 스물 &rarr; 스무</span>
        </p>
        <p>Use a space between the number and the counter.</p>
      </div>
    </Page>
  );
}
