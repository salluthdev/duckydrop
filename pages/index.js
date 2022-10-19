import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ducky Drop - Do Airdrop, Get Ducky</title>
        <meta
          name="description"
          content="Want to send a crypto airdrop? Use Ducky Drop and massdropping crypto in a ducky way!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.nav_wrapper}>
        <div className="wrapper">
          <Image src={"/logo.svg"} width={206} height={40} />
        </div>
      </div>
      <main>
        <div className="wrapper">
          <h1 className={styles.title}>Massdropping Crypto in a Ducky Way</h1>
        </div>
      </main>
    </div>
  );
}
