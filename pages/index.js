import Head from "next/head";
import Homepage from "../components/homepage";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home- Cedar</title>
        <meta name="description" content="I am a Web Developer" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Reactjs, Nextjs, Sass"
        />
        <meta name="author" content="Ugwuanyi, Divinewisdom"></meta>
      </Head>
      <Homepage />
    </>
  );
}
