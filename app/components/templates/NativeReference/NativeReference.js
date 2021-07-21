import styles from "@styles/Reference.module.scss";
import Page from "@modules/Page/Page";

export default function NativeReference() {
  return (
    <Page className={styles.Reference} style={{ marginBottom: "8rem" }} header="Native Reference">
      <h2>Numbers</h2>
      <table>
        <tbody>
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
            <td>셋</td>
            <td>set</td>
          </tr>
          <tr>
            <td>4</td>
            <td>넷</td>
            <td>net</td>
          </tr>
          <tr>
            <td>5</td>
            <td>다섯</td>
            <td>daseot</td>
          </tr>
          <tr>
            <td>6</td>
            <td>여섯</td>
            <td>yeoseot</td>
          </tr>
          <tr>
            <td>7</td>
            <td>일곱</td>
            <td>ilgop</td>
          </tr>
          <tr>
            <td>8</td>
            <td>여덟</td>
            <td>yeodeol</td>
          </tr>
          <tr>
            <td>9</td>
            <td>아홉</td>
            <td>ahop</td>
          </tr>
          <tr>
            <td>10</td>
            <td>열</td>
            <td>yeol</td>
          </tr>
          <tr>
            <td>20</td>
            <td>스물</td>
            <td>seumul</td>
          </tr>
          <tr>
            <td>30</td>
            <td>서른</td>
            <td>seoreun</td>
          </tr>
          <tr>
            <td>40</td>
            <td>마흔</td>
            <td>maheun</td>
          </tr>
          <tr>
            <td>50</td>
            <td>쉰</td>
            <td>swin</td>
          </tr>
          <tr>
            <td>60</td>
            <td>예순</td>
            <td>yesun</td>
          </tr>
          <tr>
            <td>70</td>
            <td>일흔</td>
            <td>ilheun</td>
          </tr>
          <tr>
            <td>80</td>
            <td>여든</td>
            <td>yeodeun</td>
          </tr>
          <tr>
            <td>90</td>
            <td>아흔</td>
            <td>aheun</td>
          </tr>
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
      </div>
    </Page>
  );
}
