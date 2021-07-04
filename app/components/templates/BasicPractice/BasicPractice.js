import styles from "./BasicPractice.module.scss";
import PageContent from "@modules/PageContent/PageContent";
import PageHeader from "@modules/PageHeader/PageHeader";

export default function BasicPractice() {
  return (
    <>
      <PageHeader title="Basic Practice" />
      <PageContent>
        <p>I am Basic Practice!</p>
      </PageContent>
    </>
  );
}
