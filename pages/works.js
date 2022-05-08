import { Head } from "next/document";
import Workpage from "../components/workpage";

function Works() {
  return (
    <>
      <Workpage />
      <Head>
        <title>Portfolio- Cedar</title>
        <meta name="description" content="Check out my portfolio." />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Reactjs, Nextjs, Sass, portfolio, portfoli website, webdevelopment,"
        />
        <meta name="author" content="Ugwuanyi, Divinewisdom"></meta>
      </Head>
    </>
  );
}

export default Works;
