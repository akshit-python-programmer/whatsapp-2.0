import Head from "next/head";
import Sidebar from "../components/sidebar.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Whatsapp 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
    </div>
  );
}