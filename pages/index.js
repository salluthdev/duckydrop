import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
      <div className={styles.navbar}>
        <div className={`wrapper ${styles.nav_wrapper}`}>
          <Link href="/">
            <Image
              src={"/svg/logo.svg"}
              width={206}
              height={40}
              alt="Logo Ducky Drop"
            />
          </Link>
          <div className={styles.nav_content_wrapper}>
            <nav>
              <p>Twitter</p>
              <p>Telegram</p>
              <p>Ducky Paper</p>
            </nav>
            <button>DApp</button>
          </div>
        </div>
      </div>
      <main>
        <div className="wrapper">
          <div className={styles.hero}>
            <h1>Massdropping Crypto in a Ducky Way</h1>
            <div className={styles.taglines_wrapper}>
              <div className={styles.tagline}>
                <Image
                  src={"/svg/icon-tagline-flash.svg"}
                  width={24}
                  height={24}
                  alt="Tagline - Fast"
                />
                <p>Fast</p>
              </div>
              <Image
                src={"/svg/icon-tagline-hexagon.svg"}
                width={22}
                height={24}
              />
              <div className={styles.tagline}>
                <Image
                  src={"/svg/icon-tagline-discount.svg"}
                  width={24}
                  height={24}
                  alt="Tagline - Cheap"
                />
                <p>Cheap</p>
              </div>
              <Image
                src={"/svg/icon-tagline-hexagon.svg"}
                width={22}
                height={24}
              />
              <div className={styles.tagline}>
                <Image
                  src={"/svg/icon-tagline-ducky.svg"}
                  width={24}
                  height={24}
                  alt="Tagline - Ducky"
                />
                <p>Ducky</p>
              </div>
            </div>
            <button>Ducky DApp</button>
          </div>
        </div>
      </main>
    </div>
  );
}
