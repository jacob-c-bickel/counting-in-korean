import styles from "./Home.module.scss";
import PageHeader from "@modules/PageHeader/PageHeader";
import PageContent from "@modules/PageContent/PageContent";

export default function Home() {
  return (
    <>
      <PageHeader title="Home" />
      <PageContent>
        <p>I am home page!</p>
      </PageContent>
    </>
  );
}
