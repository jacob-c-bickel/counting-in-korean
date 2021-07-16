import Page from "@modules/Page/Page";
import PageHeader from "@modules/PageHeader/PageHeader";

import styles from "@styles/Reference.module.scss";

export default function UsageReference() {
  return (
    <Page className={styles.Reference} style={{ marginBottom: "8rem" }}>
      <PageHeader title="Number System Usage" />
      <h2>General Rules</h2>
      <div className={styles.notes}>
        <p>
          As a rule of thumb, Native Korean is used for "counting" and Sino-Korean for "numbers".
        </p>
        <p>
          The higher the number the more likely Sino-Korean is to be used until Native numbers stop
          entirely at 99.
        </p>
      </div>
      <h2>Native Korean Uses</h2>
      <div className={styles.notes}>
        <p>Counting in small numbers</p>
        <p>People's age</p>
        <p>Hours</p>
      </div>
      <h2>Sino-Korean Uses</h2>
      <div className={styles.notes}>
        <p>Money</p>
        <p>Minutes, days, months, and years</p>
        <p>The names of months</p>
        <p>Measurements (length, weight, etc.)</p>
        <p>Phone Numbers</p>
        <p>Addresses</p>
        <p>Math</p>
      </div>
      <h2>More Notes</h2>
      <div className={styles.notes}>
        <p>
          When telling the time, Native Korean is used for the hours and Sino-Korean is used for the
          minutes.
        </p>
        <p>
          There are two Sino-Korean words for 0. 영 is used for points, temperature, and math. 공 is
          used for telephone numbers.
        </p>
        <p>
          When reading out a string of numbers (such as a phone number) some people use 하나 instead
          of 일 for better clarity.
        </p>
        <p>
          In some instances, numbers above 100 may be vernacularized by using Native Korean for the
          portion below 100.
        </p>
      </div>
    </Page>
  );
}
