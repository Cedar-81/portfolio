import Layout from "../components/layout";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <script src="https://smtpjs.com/v3/smtp.js"></script>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
