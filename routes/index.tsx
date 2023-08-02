import Layout from "../components/Layout.tsx";
import Navbar from "../components/Navbar.tsx";
import { Head } from "$fresh/runtime.ts";
import Footer from "../components/Footer.tsx";
import Hero from "../components/Hero.tsx";

export default function Home() {
  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href="/all.css" />
        <title>APOD | Homepage</title>
      </Head>
      <Navbar active="/" />
      <Hero />

      <Footer children />
    </Layout>
  );
}
