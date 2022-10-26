import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ducky Drop - Do Airdrop, Get $DUCKY</title>
        <meta
          name="description"
          content="Want to send a crypto airdrop? Use Ducky Drop and massdropping crypto in a ducky way!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.navbar}>
        <div className={`wrapper ${styles.nav_wrapper}`}>
          <Link href="/">
            <a>
              <Image
                src={"/svg/logo.svg"}
                width={206}
                height={40}
                alt="Logo Ducky Drop"
              />
            </a>
          </Link>
          <div className={styles.nav_content_wrapper}>
            <nav>
              <a>Twitter</a>
              <a>Telegram</a>
              <a>Ducky Paper</a>
            </nav>
            <button>DApp</button>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.hero}>
          <div className={`wrapper ${styles.hero_wrapper}`}>
            <h1>
              Massdropping Crypto in a <span>Ducky</span> Way
            </h1>
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
                src={"/svg/icon-tagline-star.svg"}
                width={22}
                height={22}
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
                src={"/svg/icon-tagline-star.svg"}
                width={22}
                height={22}
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
        </section>
        <section className={styles.ducky_go_go}>
          <div className={`wrapper ${styles.section_wrapper}`}>
            <div className={styles.content}>
              <div className={styles.subtitle_decoration}>
                <Image src={"/svg/icon-x.svg"} width={20} height={20} />
                <p>Connect Your Wallet</p>
                <Image src={"/svg/icon-x.svg"} width={20} height={20} />
              </div>
              <h1>
                Ducky <span>Ducky</span> Go Go
              </h1>
              <p>
                Through the simple, user-friendly, already functional Airdrop
                dApp, users can connect their wallet, and Airdrop their
                coin/token to a hundred and thousand wallet addresses without
                any drama needed.
              </p>
            </div>
            <div className={styles.char}>
              <Image src={"/img/bg-3d.png"} width={440} height={480} />
            </div>
          </div>
        </section>
        <section className={styles.do_airdrop_get_ducky}>
          <div className={styles.subtitle_decoration}>
            <Image src={"/svg/icon-x.svg"} width={20} height={20} />
            <p>Use the Ducky Drop Platform</p>
            <Image src={"/svg/icon-x.svg"} width={20} height={20} />
          </div>
          <h1>
            Do Airdrop and Get <span>$Ducky</span>
          </h1>
          <p>
            It’s like a give-and-take. We are a community-based project, so the
            more often you do mass dropping the more you gain the benefits from
            the community. You will get $DUCKY tokens by loyally using the Ducky
            Drop platform as one of the marketing campaign tools for their
            project.
          </p>
          <div className={styles.card_vector_wrapper}>
            <Image
              src={"/img/card-get-ducky.png"}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </section>
        <section className={styles.our_product}>
          <div className={styles.subtitle_decoration}>
            <Image src={"/svg/icon-x.svg"} width={20} height={20} />
            <p>This is Our Product</p>
            <Image src={"/svg/icon-x.svg"} width={20} height={20} />
          </div>
          <h1>
            Get the best <span>product</span> from us
          </h1>
          <p>
            We have provided 4 of the best products that are ready for you to
            use on our platform.
          </p>
          <div className={styles.product_card_wrapper}>
            <div className={styles.product_card}>
              <div className={styles.content_wrapper}>
                <div className={styles.content_top}>
                  <Image
                    src={"/svg/card-product-top-left.svg"}
                    width={32}
                    height={32}
                  />
                  <Image
                    src={"/svg/card-product-top-mid.svg"}
                    width={94}
                    height={23}
                  />
                  <Image
                    src={"/svg/card-product-top-right.svg"}
                    width={23}
                    height={23}
                  />
                </div>
                <div className={styles.content_mid}>
                  <h2>Multi-Chain DApp</h2>
                  <p>
                    Allows users to bridging with pegged tokens or liquidity
                    pools.
                  </p>
                </div>
              </div>
              <div className={styles.icon_wrapper}>
                <Image
                  src={"/svg/card-product-icon-cube.svg"}
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className={`${styles.product_card} ${styles.green}`}>
              <div className={styles.content_wrapper}>
                <div className={styles.content_top}>
                  <Image
                    src={"/svg/card-product-top-left.svg"}
                    width={32}
                    height={32}
                  />
                  <Image
                    src={"/svg/card-product-top-mid.svg"}
                    width={94}
                    height={23}
                  />
                  <Image
                    src={"/svg/card-product-top-right.svg"}
                    width={23}
                    height={23}
                  />
                </div>
                <div className={styles.content_mid}>
                  <h2>Reusable Airdrop</h2>
                  <p>
                    Allows users to bridging with pegged tokens or liquidity
                    pools.
                  </p>
                </div>
              </div>
              <div className={styles.icon_wrapper}>
                <Image
                  src={"/svg/card-product-icon-cube.svg"}
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className={`${styles.product_card} ${styles.blue}`}>
              <div className={styles.content_wrapper}>
                <div className={styles.content_top}>
                  <Image
                    src={"/svg/card-product-top-left.svg"}
                    width={32}
                    height={32}
                  />
                  <Image
                    src={"/svg/card-product-top-mid.svg"}
                    width={94}
                    height={23}
                  />
                  <Image
                    src={"/svg/card-product-top-right.svg"}
                    width={23}
                    height={23}
                  />
                </div>
                <div className={styles.content_mid}>
                  <h2>Instant Airdrop</h2>
                  <p>
                    Allows users to bridging with pegged tokens or liquidity
                    pools.
                  </p>
                </div>
              </div>
              <div className={styles.icon_wrapper}>
                <Image
                  src={"/svg/card-product-icon-cube.svg"}
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className={`${styles.product_card} ${styles.purple}`}>
              <div className={styles.content_wrapper}>
                <div className={styles.content_top}>
                  <Image
                    src={"/svg/card-product-top-left.svg"}
                    width={32}
                    height={32}
                  />
                  <Image
                    src={"/svg/card-product-top-mid.svg"}
                    width={94}
                    height={23}
                  />
                  <Image
                    src={"/svg/card-product-top-right.svg"}
                    width={23}
                    height={23}
                  />
                </div>
                <div className={styles.content_mid}>
                  <h2>Ducky HUnter</h2>
                  <p>
                    Allows users to bridging with pegged tokens or liquidity
                    pools.
                  </p>
                </div>
              </div>
              <div className={styles.icon_wrapper}>
                <Image
                  src={"/svg/card-product-icon-cube.svg"}
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
