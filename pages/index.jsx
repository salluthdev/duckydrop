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
                <Image src={"/svg/icon-x-yellow.svg"} width={20} height={20} />
                <p>Connect Your Wallet</p>
                <Image src={"/svg/icon-x-yellow.svg"} width={20} height={20} />
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
            <Image src={"/svg/icon-x-yellow.svg"} width={20} height={20} />
            <p>Use the Ducky Drop Platform</p>
            <Image src={"/svg/icon-x-yellow.svg"} width={20} height={20} />
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
              src={"/svg/card-get-ducky.svg"}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </section>
        <section className={styles.our_product}>
          <div className={styles.subtitle_decoration}>
            <Image src={"/svg/icon-x-yellow.svg"} width={20} height={20} />
            <p>This is Our Product</p>
            <Image src={"/svg/icon-x-yellow.svg"} width={20} height={20} />
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
                    src={"/svg/card-product-top-left-yellow.svg"}
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
                  src={"/svg/card-product-icon-yellow.svg"}
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className={`${styles.product_card} ${styles.green}`}>
              <div className={styles.content_wrapper}>
                <div className={styles.content_top}>
                  <Image
                    src={"/svg/card-product-top-left-green.svg"}
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
                  src={"/svg/card-product-icon-green.svg"}
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className={`${styles.product_card} ${styles.blue}`}>
              <div className={styles.content_wrapper}>
                <div className={styles.content_top}>
                  <Image
                    src={"/svg/card-product-top-left-blue.svg"}
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
                  src={"/svg/card-product-icon-blue.svg"}
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className={`${styles.product_card} ${styles.purple}`}>
              <div className={styles.content_wrapper}>
                <div className={styles.content_top}>
                  <Image
                    src={"/svg/card-product-top-left-purple.svg"}
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
                  src={"/svg/card-product-icon-purple.svg"}
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.our_flow}>
          <div className={`wrapper ${styles.section_wrapper}`}>
            <div className={styles.subtitle_decoration}>
              <Image src={"/svg/icon-x-black.svg"} width={20} height={20} />
              <p className={styles.black}>Step for Use</p>
              <Image src={"/svg/icon-x-black.svg"} width={20} height={20} />
            </div>
            <h2>Our Flow</h2>
            <p>Learn the steps or process how to use our platform.</p>
            <div className={styles.flow_wrapper}>
              <div className={styles.flow}>
                <p>Connect Wallet</p>
              </div>
              <Image
                src={"/svg/our-flow-connector.svg"}
                width={56}
                height={24}
              />
              <div className={styles.flow}>
                <p>Choose Network</p>
              </div>
              <Image
                src={"/svg/our-flow-connector.svg"}
                width={56}
                height={24}
              />
              <div className={styles.flow}>
                <p>Paste Address</p>
              </div>
              <Image
                src={"/svg/our-flow-connector.svg"}
                width={56}
                height={24}
              />
              <div className={styles.flow}>
                <p>Insert Wallet</p>
              </div>
              <Image
                src={"/svg/our-flow-connector.svg"}
                width={56}
                height={24}
              />
              <div className={styles.flow}>
                <p>Ducky</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.our_partners}>
          <div className={`wrapper ${styles.section_wrapper}`}>
            <h1>
              Our <span>Partners</span>
            </h1>
            <div className={styles.logos_wrapper}>
              <div className={styles.logo_wrapper}>
                <div className={styles.logo}>
                  <Image
                    src={"/img/partners/ethereum.png"}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className={styles.logo_wrapper}>
                <div className={styles.logo}>
                  <Image
                    src={"/img/partners/binance.png"}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className={styles.logo_wrapper}>
                <div className={styles.logo}>
                  <Image
                    src={"/img/partners/polygon.png"}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className={styles.logo_wrapper}>
                <div className={styles.logo}>
                  <Image
                    src={"/img/partners/fantom.png"}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className={styles.logo_wrapper}>
                <div className={styles.logo}>
                  <Image
                    src={"/img/partners/avalanche.png"}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className={styles.logo_wrapper}>
                <div className={styles.logo}>
                  <Image
                    src={"/img/partners/coin-market-cap.png"}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className={styles.logo_wrapper}>
                <div className={styles.logo}>
                  <Image
                    src={"/img/partners/coin-gecko.png"}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className={styles.logo_wrapper}>
                <div className={styles.logo}>
                  <Image
                    src={"/img/partners/bsc-scan.png"}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.tokenomics}>
          <div className={`wrapper ${styles.section_wrapper}`}>
            <div className={styles.subtitle_decoration}>
              <Image src={"/svg/icon-x-yellow.svg"} width={20} height={20} />
              <p>Our Token Management</p>
              <Image src={"/svg/icon-x-yellow.svg"} width={20} height={20} />
            </div>
            <h1>Tokenomics</h1>
            <p>
              Know the characteristics of our demand, supply of assets and also
              token management.
            </p>
            <div className={styles.card_wrapper}>
              <div className={styles.card}>
                <div className={styles.label}>
                  <p>Total Supply</p>
                </div>
                <div className={styles.value}>
                  <p>100,000,000</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.label}>
                  <p>Token Network</p>
                </div>
                <div className={styles.value}>
                  <p>BEP-20</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.label}>
                  <p>Ticker</p>
                </div>
                <div className={styles.value}>
                  <p>$DUCKY</p>
                </div>
              </div>
            </div>
            <div className={styles.range_wrapper}>
              <div className={styles.range}>
                <div className={styles.content_top}>
                  <div className={styles.left}>
                    <p className={styles.title}>Private Sale</p>
                    <p>15% TGE, then 17% monthly</p>
                  </div>
                  <div className={styles.allocation}>
                    <p>
                      Allocations: <span>20%</span>
                    </p>
                  </div>
                </div>
                <div className={styles.range_bar}>
                  <div className={`${styles.range_value} ${styles.yellow}`}>
                    <div className={styles.dot}></div>
                  </div>
                </div>
              </div>
              <div className={styles.range}>
                <div className={styles.content_top}>
                  <div className={styles.left}>
                    <p className={styles.title}>Private Sale</p>
                    <p>15% TGE, then 17% monthly</p>
                  </div>
                  <div className={styles.allocation}>
                    <p>
                      Allocations: <span>25%</span>
                    </p>
                  </div>
                </div>
                <div className={styles.range_bar}>
                  <div className={`${styles.range_value} ${styles.green}`}>
                    <div className={styles.dot}></div>
                  </div>
                </div>
              </div>
              <div className={styles.range}>
                <div className={styles.content_top}>
                  <div className={styles.left}>
                    <p className={styles.title}>Rewards</p>
                    <p>3 Months cliff, then 10% monthly</p>
                  </div>
                  <div className={styles.allocation}>
                    <p>
                      Allocations: <span>15%</span>
                    </p>
                  </div>
                </div>
                <div className={styles.range_bar}>
                  <div className={`${styles.range_value} ${styles.purple}`}>
                    <div className={styles.dot}></div>
                  </div>
                </div>
              </div>
              <div className={styles.range}>
                <div className={styles.content_top}>
                  <div className={styles.left}>
                    <p className={styles.title}>Public Sale</p>
                    <p>30% TGE, then 35% monthly</p>
                  </div>
                  <div className={styles.allocation}>
                    <p>
                      Allocations: <span>10%</span>
                    </p>
                  </div>
                </div>
                <div className={styles.range_bar}>
                  <div className={`${styles.range_value} ${styles.orange}`}>
                    <div className={styles.dot}></div>
                  </div>
                </div>
              </div>
              <div className={styles.range}>
                <div className={styles.content_top}>
                  <div className={styles.left}>
                    <p className={styles.title}>Team</p>
                    <p>6 Months cliff, then 10% monthly</p>
                  </div>
                  <div className={styles.allocation}>
                    <p>
                      Allocations: <span>10%</span>
                    </p>
                  </div>
                </div>
                <div className={styles.range_bar}>
                  <div className={`${styles.range_value} ${styles.blue}`}>
                    <div className={styles.dot}></div>
                  </div>
                </div>
              </div>
              <div className={styles.range}>
                <div className={styles.content_top}>
                  <div className={styles.left}>
                    <p className={styles.title}>Private Sale</p>
                    <p>15% TGE, then 17% monthly</p>
                  </div>
                  <div className={styles.allocation}>
                    <p>
                      Allocations: <span>10%</span>
                    </p>
                  </div>
                </div>
                <div className={styles.range_bar}>
                  <div className={`${styles.range_value} ${styles.pink}`}>
                    <div className={styles.dot}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.our_roadmap}>
          <div className={`wrapper ${styles.section_wrapper}`}>
            <h1>
              Our <span>Roadmap</span>
            </h1>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={`wrapper ${styles.footer_wrapper}`}>
          <h2>Social Channels</h2>
        </div>
      </footer>
    </div>
  );
}
