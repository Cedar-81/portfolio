import Contactpage from "../components/contactpage";
import { send } from "emailjs-com";
import Head from "next/head";

function Contact() {
  const api_key = process.env.NEXT_PUBLIC_EMAIL_API_KEY;
  const template_id = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const service_id = process.env.NEXT_PUBLIC_SERVICE_ID;

  const sendEmail = (val) => {
    send(service_id, template_id, val, api_key);
  };
  return (
    <>
      <Head>
        <title>Contact- Cedar</title>
        <meta name="description" content="Contact Me" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Reactjs, Nextjs, Sass"
        />
        <meta name="author" content="Ugwuanyi, Divinewisdom"></meta>
      </Head>
      <Contactpage sendEmail={sendEmail} />
    </>
  );
}

export default Contact;
