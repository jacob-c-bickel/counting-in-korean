import styles from "./BasicPractice.module.scss";
import Page from "@modules/Page/Page";
import PageHeader from "@modules/PageHeader/PageHeader";

export default function BasicPractice() {
  return (
    <Page>
      <PageHeader title="Basic Practice" />
      <p>I am Basic Practice!</p>
    </Page>
  );
}
