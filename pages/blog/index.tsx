import Head from "next/head";
import { AppProps } from "next/app";

export default function Blog({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <p>My Blog</p>
      </div>
    </>
  );
}
