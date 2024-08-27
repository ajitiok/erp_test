import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Web Test Erp</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
