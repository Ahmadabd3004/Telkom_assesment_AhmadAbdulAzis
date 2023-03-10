import Head from "next/head";
import LandingPageContainer from "@/containers/landing-page";

export default function Home() {
  return (
    <>
      <Head>
        <title>Github API</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPageContainer />
    </>
  );
}
