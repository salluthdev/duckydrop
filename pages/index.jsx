import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  const FOOTER_DATA_V2 = [
    {
      title: "Social Channels",
      items: [
        {
          icon: "",
          name: "Telegram Channel",
          url: "",
        },
        {
          icon: "",
          name: "Telegram",
          url: "",
        },
        {
          icon: "",
          name: "Telegram",
          url: "",
        },
      ],
    },
    {
      title: "Markets",
      items: [
        {
          icon: "",
          name: "",
          url: "",
        },
      ],
    },
    {
      title: "Social Channels",
      items: [
        {
          icon: "",
          name: "",
          url: "",
        },
      ],
    },
    {
      title: "Social Channels",
      items: [
        {
          icon: "",
          name: "",
          url: "",
        },
      ],
    },
  ];

  const FOOTER_DATA = [
    {
      social_section: [
        {
          channel_link: "https://t.me/duckydrop",
          channel_name: "Telegram Channel",
          channel_img: "icon-telegram",
          chat_link: "https://t.me/duckydropglobal",
          chat_name: "Telegram Chat",
          chat_img: "icon-telegram",
          twitter: "Twitter",
          twitter_icon: "icon-twitter",
        },
      ],
      buy_ducky: [
        {
          ps_link: "https://pancakeswap.finance/",
          ps_name: "PancakeSwap",
          ps_img: "icon-pancakeswap",
        },
      ],
      markets: [
        {
          gecko_link: "https://www.coingecko.com/",
          gecko_name: "CoinGecko",
          gecko_img: "icon-coingecko",
          market_link: "https://coinmarketcap.com/",
          market_name: "CoinMarketCap",
          market_img: "icon-coinmarketcap",
        },
      ],
      information: [
        {
          name: "DuckyDrop Pitch Deck",
        },
      ],
      contact_us: [
        {
          name: "Contact Us",
        },
      ],
    },
  ];

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
            <img
              src={"/svg/logo.svg"}
              alt="Logo Ducky Drop"
              className={styles.logo}
            />
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
            <div className={styles.content_wrapper}>
              <h1>
                Massdropping Crypto in a <span>Ducky</span> Way
              </h1>
              <div className={styles.taglines_wrapper}>
                <div className={styles.tagline}>
                  <p>Fast</p>
                </div>
                <Image
                  src={"/svg/icon-tagline-blink.svg"}
                  width={22}
                  height={22}
                />
                <div className={styles.tagline}>
                  <p>Cheap</p>
                </div>
                <Image
                  src={"/svg/icon-tagline-blink.svg"}
                  width={22}
                  height={22}
                />
                <div className={styles.tagline}>
                  <p>Ducky</p>
                </div>
              </div>
              <button>Ducky DApp</button>
            </div>
            <div className={styles.char}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.video_duck}
              >
                <source src={"/img/3d-anim.webm"} type="video/webm" />
              </video>
            </div>
          </div>
        </section>
        <section className={styles.ducky_go_go}>
          <div className={`wrapper ${styles.section_wrapper}`}>
            <div className={styles.duck_vector}>
              <Image
                src={"/svg/ducky-go.svg"}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.content} data-aos="fade-right">
              <div className={styles.subtitle_decoration}>
                <div className={styles.icon_x_wrapper}>
                  <Image src={"/svg/icon-x-yellow.svg"} layout={"fill"} />
                </div>
                <p>Connect Your Wallet</p>
                <div className={styles.icon_x_wrapper}>
                  <Image src={"/svg/icon-x-yellow.svg"} layout={"fill"} />
                </div>
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
          </div>
        </section>
        <section className={styles.token_banner}>
          <div className={styles.banner_back}></div>
          <div className={styles.banner_front}>
            <div className={`wrapper ${styles.section_wrapper}`}>
              <p>Ducky Drop</p>
              <div className={styles.icon_x_banner_wrapper}>
                <Image src={"/svg/icon-x-black.svg"} layout="fill" />
              </div>
              <p>Ducky Drop</p>
              <div className={styles.icon_x_banner_wrapper}>
                <Image src={"/svg/icon-x-black.svg"} layout="fill" />
              </div>
              <p>Ducky Drop</p>
            </div>
          </div>
        </section>
        <section className={styles.do_airdrop_get_ducky}>
          <div className={`wrapper ${styles.section_wrapper}`}>
            <div className={styles.subtitle_decoration}>
              <div className={styles.icon_x_wrapper}>
                <Image src={"/svg/icon-x-yellow.svg"} layout={"fill"} />
              </div>
              <p>Use the Ducky Drop Platform</p>
              <div className={styles.icon_x_wrapper}>
                <Image src={"/svg/icon-x-yellow.svg"} layout={"fill"} />
              </div>
            </div>
            <h1>
              Do Airdrop and Get <span>$Ducky</span>
            </h1>
            <p>
              It’s like a give-and-take. We are a community-based project, so
              the more often you do mass dropping the more you gain the benefits
              from the community. You will get $DUCKY tokens by loyally using
              the Ducky Drop platform as one of the marketing campaign tools for
              their project.
            </p>
            <div className={styles.card_vector_wrapper} data-aos="flip-right">
              <Image
                src={"/svg/card-get-ducky.svg"}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </section>
        <section className={styles.our_product}>
          <div className={`wrapper ${styles.section_wrapper}`}>
            <div className={styles.subtitle_decoration}>
              <div className={styles.icon_x_wrapper}>
                <Image src={"/svg/icon-x-yellow.svg"} layout={"fill"} />
              </div>
              <p>This is Our Product</p>
              <div className={styles.icon_x_wrapper}>
                <Image src={"/svg/icon-x-yellow.svg"} layout={"fill"} />
              </div>
            </div>
            <h1>
              Get the best <span>product</span> from us
            </h1>
            <p>
              We have provided 4 of the best products that are ready for you to
              use on our platform.
            </p>
            <div className={styles.product_card_wrapper}>
              <div className={styles.product_card} data-aos="flip-left">
                <div className={styles.content_wrapper}>
                  <div className={styles.content_top}>
                    <div className={styles.left}>
                      <Image
                        src={"/svg/card-product-top-left-yellow.svg"}
                        layout="fill"
                      />
                    </div>
                    <div className={styles.mid}>
                      <Image
                        src={"/svg/card-product-top-mid.svg"}
                        layout="fill"
                      />
                    </div>
                    <div className={styles.right}>
                      <Image
                        src={"/svg/card-product-top-right.svg"}
                        layout="fill"
                      />
                    </div>
                  </div>
                  <div className={styles.content_mid}>
                    <h2>Multi-Chain DApp</h2>
                    <p>
                      Multiple EVM networks as a bridge to support users’
                      marketing campaigns.
                    </p>
                  </div>
                </div>
                <div className={styles.icon_wrapper}>
                  <div className={styles.icon}>
                    <Image
                      src={"/svg/card-product-icon-yellow.svg"}
                      layout="fill"
                    />
                  </div>
                </div>
              </div>
              <div
                className={`${styles.product_card} ${styles.green}`}
                data-aos="flip-left"
                data-aos-delay="400"
              >
                <div className={styles.content_wrapper}>
                  <div className={styles.content_top}>
                    <div className={styles.left}>
                      <Image
                        src={"/svg/card-product-top-left-green.svg"}
                        layout="fill"
                      />
                    </div>
                    <div className={styles.mid}>
                      <Image
                        src={"/svg/card-product-top-mid.svg"}
                        layout="fill"
                      />
                    </div>
                    <div className={styles.right}>
                      <Image
                        src={"/svg/card-product-top-right.svg"}
                        layout="fill"
                      />
                    </div>
                  </div>
                  <div className={styles.content_mid}>
                    <h2>Reusable Airdrop</h2>
                    <p>
                      Accessible and valuable for projects to send rewards and
                      prizes fluently.
                    </p>
                  </div>
                </div>
                <div className={styles.icon_wrapper}>
                  <div className={styles.icon}>
                    <Image
                      src={"/svg/card-product-icon-green.svg"}
                      layout="fill"
                    />
                  </div>
                </div>
              </div>
              <div
                className={`${styles.product_card} ${styles.blue}`}
                data-aos="flip-left"
                data-aos-delay="800"
              >
                <div className={styles.content_wrapper}>
                  <div className={styles.content_top}>
                    <div className={styles.left}>
                      <Image
                        src={"/svg/card-product-top-left-blue.svg"}
                        layout="fill"
                      />
                    </div>
                    <div className={styles.mid}>
                      <Image
                        src={"/svg/card-product-top-mid.svg"}
                        layout="fill"
                      />
                    </div>
                    <div className={styles.right}>
                      <Image
                        src={"/svg/card-product-top-right.svg"}
                        layout="fill"
                      />
                    </div>
                  </div>
                  <div className={styles.content_mid}>
                    <h2>Instant Airdrop</h2>
                    <p>
                      An affordable automatic distribution of tokens to owners
                      of specific assets or balances
                    </p>
                  </div>
                </div>
                <div className={styles.icon_wrapper}>
                  <div className={styles.icon}>
                    <Image
                      src={"/svg/card-product-icon-blue.svg"}
                      layout="fill"
                    />
                  </div>
                </div>
              </div>
              <div
                className={`${styles.product_card} ${styles.purple}`}
                data-aos="flip-left"
                data-aos-delay="1200"
              >
                <div className={styles.content_wrapper}>
                  <div className={styles.content_top}>
                    <div className={styles.left}>
                      <Image
                        src={"/svg/card-product-top-left-purple.svg"}
                        layout="fill"
                      />
                    </div>
                    <div className={styles.mid}>
                      <Image
                        src={"/svg/card-product-top-mid.svg"}
                        layout="fill"
                      />
                    </div>
                    <div className={styles.right}>
                      <Image
                        src={"/svg/card-product-top-right.svg"}
                        layout="fill"
                      />
                    </div>
                  </div>
                  <div className={styles.content_mid}>
                    <h2>Ducky Hunter</h2>
                    <p>
                      A beneficent space between the project owner and airdrop
                      hunter community.
                    </p>
                  </div>
                </div>
                <div className={styles.icon_wrapper}>
                  <div className={styles.icon}>
                    <Image
                      src={"/svg/card-product-icon-purple.svg"}
                      layout="fill"
                    />
                  </div>
                </div>
              </div>
              <div
                className={styles.product_card}
                data-aos="flip-left"
                data-aos-delay="1600"
              >
                <div className={styles.content_wrapper}>
                  <div className={styles.content_top}>
                    <div className={styles.left}>
                      <Image
                        src={"/svg/card-product-top-left-yellow.svg"}
                        layout="fill"
                      />
                    </div>
                    <div className={styles.mid}>
                      <Image
                        src={"/svg/card-product-top-mid.svg"}
                        layout="fill"
                      />
                    </div>
                    <div className={styles.right}>
                      <Image
                        src={"/svg/card-product-top-right.svg"}
                        layout="fill"
                      />
                    </div>
                  </div>
                  <div className={styles.content_mid}>
                    <h2>
                      VIP
                      <br /> Duck
                    </h2>
                    <p>More locking, more earnings benefit as a VIP Duck.</p>
                  </div>
                </div>
                <div className={styles.icon_wrapper}>
                  <div className={styles.icon}>
                    <Image
                      src={"/svg/card-product-icon-yellow.svg"}
                      layout="fill"
                    />
                  </div>
                </div>
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
              <div data-aos="fade-left" data-aos-delay="200">
                <img
                  src={"/svg/our-flow-connector.svg"}
                  width={56}
                  height={24}
                  className={styles.img_connector_desktop}
                />
              </div>
              <div data-aos="fade-up">
                <img
                  src={"/svg/our-flow-connector-mobile.svg"}
                  width={24}
                  height={56}
                  className={styles.img_connector_mobile}
                />
              </div>
              <div
                className={styles.flow}
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <p>Choose Network</p>
              </div>
              <div data-aos="fade-left" data-aos-delay="600">
                <img
                  src={"/svg/our-flow-connector.svg"}
                  width={56}
                  height={24}
                  className={styles.img_connector_desktop}
                />
              </div>
              <div data-aos="fade-up">
                <img
                  src={"/svg/our-flow-connector-mobile.svg"}
                  width={24}
                  height={56}
                  className={styles.img_connector_mobile}
                />
              </div>
              <div
                className={styles.flow}
                data-aos="fade-left"
                data-aos-delay="800"
              >
                <p>Paste Address</p>
              </div>
              <div data-aos="fade-left" data-aos-delay="1000">
                <img
                  src={"/svg/our-flow-connector.svg"}
                  width={56}
                  height={24}
                  className={styles.img_connector_desktop}
                />
              </div>
              <div data-aos="fade-up">
                <img
                  src={"/svg/our-flow-connector-mobile.svg"}
                  width={24}
                  height={56}
                  className={styles.img_connector_mobile}
                />
              </div>
              <div
                className={styles.flow}
                data-aos="fade-left"
                data-aos-delay="1200"
              >
                <p>Insert Wallet</p>
              </div>
              <div data-aos="fade-left" data-aos-delay="1400">
                <img
                  src={"/svg/our-flow-connector.svg"}
                  width={56}
                  height={24}
                  className={styles.img_connector_desktop}
                />
              </div>
              <div data-aos="fade-up">
                <img
                  src={"/svg/our-flow-connector-mobile.svg"}
                  width={24}
                  height={56}
                  className={styles.img_connector_mobile}
                />
              </div>
              <div
                className={styles.flow}
                data-aos="fade-left"
                data-aos-delay="1600"
              >
                <p>Ducky</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.our_partners}>
          <div className={`wrapper ${styles.section_wrapper}`}>
            <h1>
              Supported Network & <span>Partners</span>
            </h1>
            <div className={styles.logos_wrapper}>
              <div className={styles.logo_wrapper}>
                <div
                  className={styles.logo}
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <Image
                    src={"/img/partners/ethereum.png"}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className={styles.logo_wrapper}>
                <div
                  className={styles.logo}
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <Image
                    src={"/img/partners/binance.png"}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className={styles.logo_wrapper}>
                <div
                  className={styles.logo}
                  data-aos="zoom-in"
                  data-aos-delay="600"
                >
                  <Image
                    src={"/img/partners/polygon.png"}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className={styles.logo_wrapper}>
                <div
                  className={styles.logo}
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <Image
                    src={"/img/partners/fantom.png"}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className={styles.logo_wrapper}>
                <div
                  className={styles.logo}
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <Image
                    src={"/img/partners/avalanche.png"}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className={styles.logo_wrapper}>
                <div
                  className={styles.logo}
                  data-aos="zoom-in"
                  data-aos-delay="600"
                >
                  <Image
                    src={"/img/partners/coin-market-cap.png"}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className={styles.logo_wrapper}>
                <div
                  className={styles.logo}
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <Image
                    src={"/img/partners/coin-gecko.png"}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className={styles.logo_wrapper}>
                <div
                  className={styles.logo}
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
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
              <div className={styles.icon_x_wrapper}>
                <Image src={"/svg/icon-x-yellow.svg"} layout={"fill"} />
              </div>
              <p>Our Token Management</p>
              <div className={styles.icon_x_wrapper}>
                <Image src={"/svg/icon-x-yellow.svg"} layout={"fill"} />
              </div>
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
            <div className={styles.unsold_token}>
              <p>Unsold token will be burned</p>
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
                  <div
                    className={`${styles.range_value} ${styles.yellow}`}
                    data-aos="range-20"
                    data-aos-delay="400"
                  >
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
                      Allocations: <span>25%</span>
                    </p>
                  </div>
                </div>
                <div className={styles.range_bar}>
                  <div
                    className={`${styles.range_value} ${styles.green}`}
                    data-aos="range-25"
                    data-aos-delay="400"
                  >
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
                      Allocations: <span>15%</span>
                    </p>
                  </div>
                </div>
                <div className={styles.range_bar}>
                  <div
                    className={`${styles.range_value} ${styles.purple}`}
                    data-aos="range-15"
                    data-aos-delay="400"
                  >
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
                      Allocations: <span>17%</span>
                    </p>
                  </div>
                </div>
                <div className={styles.range_bar}>
                  <div
                    className={`${styles.range_value} ${styles.orange}`}
                    data-aos="range-17"
                    data-aos-delay="400"
                  >
                    <div className={styles.dot}></div>
                  </div>
                </div>
              </div>
              <div className={styles.range}>
                <div className={styles.content_top}>
                  <div className={styles.left}>
                    <p className={styles.title}>Liquidity</p>
                    <p>100% when launched</p>
                  </div>
                  <div className={styles.allocation}>
                    <p>
                      Allocations: <span>10%</span>
                    </p>
                  </div>
                </div>
                <div className={styles.range_bar}>
                  <div
                    className={`${styles.range_value} ${styles.blue}`}
                    data-aos="range-10"
                    data-aos-delay="400"
                  >
                    <div className={styles.dot}></div>
                  </div>
                </div>
              </div>
              <div className={styles.range}>
                <div className={styles.content_top}>
                  <div className={styles.left}>
                    <p className={styles.title}>Reserve</p>
                    <p>12 Months cliff, then 20% monthly</p>
                  </div>
                  <div className={styles.allocation}>
                    <p>
                      Allocations: <span>13%</span>
                    </p>
                  </div>
                </div>
                <div className={styles.range_bar}>
                  <div
                    className={`${styles.range_value} ${styles.pink}`}
                    data-aos="range-13"
                    data-aos-delay="400"
                  >
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
            <div className={styles.card_wrapper}>
              <div className={styles.card}>
                <div className={styles.date}>
                  <p>October, 2022</p>
                </div>
                <div className={styles.content_wrapper}>
                  <div className={styles.content}>
                    <p>Preparation</p>
                  </div>
                  <div className={styles.content}>
                    <p>Dapp Development</p>
                  </div>
                  <div className={styles.content}>
                    <p>Binance Smart Chain Integration</p>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.date}>
                  <p>November, 2022</p>
                </div>
                <div className={styles.content_wrapper}>
                  <div className={styles.content}>
                    <p>Marketing Outreach</p>
                  </div>
                  <div className={styles.content}>
                    <p>Community Growth</p>
                  </div>
                  <div className={styles.content}>
                    <p>Dapp Live on BEP-20 Mainnet</p>
                  </div>
                  <div className={styles.content}>
                    <p>Private Round</p>
                  </div>
                  <div className={styles.content}>
                    <p>CMC, CG, BSC Scan Listing</p>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.date}>
                  <p>December, 2022</p>
                </div>
                <div className={styles.content_wrapper}>
                  <div className={styles.content}>
                    <p>Public Round on Launchpad</p>
                  </div>
                  <div className={styles.content}>
                    <p>IEO on CEX</p>
                  </div>
                  <div className={styles.content}>
                    <p>TGE/Listing</p>
                  </div>
                  <div className={styles.content}>
                    <p>Community Growth</p>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.date}>
                  <p>January, 2023</p>
                </div>
                <div className={styles.content_wrapper}>
                  <div className={styles.content}>
                    <p>Polygon Chain Integration</p>
                  </div>
                  <div className={styles.content}>
                    <p>More Partnership</p>
                  </div>
                  <div className={styles.content}>
                    <p>Rewards Release</p>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.date}>
                  <p>February, 2023</p>
                </div>
                <div className={styles.content_wrapper}>
                  <div className={styles.content}>
                    <p>Polygon Chain Mainnet</p>
                  </div>
                  <div className={styles.content}>
                    <p>Ducky Hunter Development</p>
                  </div>
                  <div className={styles.content}>
                    <p>Platform Partnership Integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ToastContainer autoClose={1400} />
      <footer className={styles.footer}>
        {FOOTER_DATA.map((footerValues) => (
          <div
            key={footerValues}
            className={`wrapper ${styles.footer_wrapper}`}
          >
            {footerValues.social_section.map((values) => (
              <div key={values.channel_name} className={styles.footer_titles}>
                {/* Social Channels Section */}
                <h4>Social Channels</h4>
                {/* telegram channel */}
                <Link href={values.channel_link}>
                  <a target="_blank">
                    <div className={styles.content_footer}>
                      <Image
                        src={"/svg/" + values.channel_img + ".svg"}
                        width={36}
                        height={36}
                      />
                      <p>{values.channel_name}</p>
                      <Image
                        src={"/svg/icon-target-link.svg"}
                        width={16}
                        height={16}
                      />
                    </div>
                  </a>
                </Link>
                {/* telegram chat */}
                <Link href={values.chat_link}>
                  <a target="_blank">
                    <div className={styles.content_footer}>
                      <Image
                        src={"/svg/" + values.chat_img + ".svg"}
                        width={36}
                        height={36}
                      />
                      <p>{values.chat_name}</p>
                      <Image
                        src={"/svg/icon-target-link.svg"}
                        width={16}
                        height={16}
                      />
                    </div>
                  </a>
                </Link>
                {/* twitter */}
                <a target="_blank">
                  <div className={styles.content_footer}>
                    <Image
                      src={"/svg/" + values.twitter_icon + ".svg"}
                      width={36}
                      height={36}
                    />
                    <p>{values.twitter}</p>
                    <Image
                      src={"/svg/icon-target-link.svg"}
                      width={16}
                      height={16}
                    />
                  </div>
                </a>
              </div>
            ))}
            {/* Markets Sections */}
            {footerValues.markets.map((values) => (
              <div key={values.gecko_name} className={styles.footer_titles}>
                <h4>Markets</h4>
                {/* Coin Gecko */}
                <div
                  onClick={() =>
                    toast.info("Coming Soon", {
                      position: "top-right",
                    })
                  }
                >
                  <a target="_blank">
                    <div className={styles.content_footer}>
                      <Image
                        src={"/svg/" + values.gecko_img + ".svg"}
                        width={36}
                        height={36}
                      />
                      <p>{values.gecko_name}</p>
                      <Image
                        src={"/svg/icon-target-link.svg"}
                        width={16}
                        height={16}
                      />
                    </div>
                  </a>
                </div>
                {/* CoinMarketCap */}
                <div
                  onClick={() =>
                    toast.info("Coming Soon", {
                      position: "top-right",
                    })
                  }
                >
                  <a target="_blank">
                    <div className={styles.content_footer}>
                      <Image
                        src={"/svg/" + values.market_img + ".svg"}
                        width={36}
                        height={36}
                      />
                      <p>{values.market_name}</p>
                      <Image
                        src={"/svg/icon-target-link.svg"}
                        width={16}
                        height={16}
                      />
                    </div>
                  </a>
                </div>
              </div>
            ))}
            {/* Buy Ducky Sections */}
            {footerValues.buy_ducky.map((values) => (
              <div key={values.ps_name} className={styles.footer_titles}>
                <h4>Buy Ducky</h4>
                {/* PancakeSwap */}
                <div onClick={() => toast.info("Coming Soon")}>
                  <a>
                    <div className={styles.content_footer}>
                      <Image
                        src={"/svg/" + values.ps_img + ".svg"}
                        width={36}
                        height={36}
                      />
                      <p>{values.ps_name}</p>
                      <Image
                        src={"/svg/icon-target-link.svg"}
                        width={16}
                        height={16}
                      />
                    </div>
                  </a>
                </div>
              </div>
            ))}
            {footerValues.information.map((values) => (
              <div
                key={values.name}
                className={styles.footer_titles}
                onClick={() =>
                  toast.info("Coming Soon", {
                    position: "top-right",
                  })
                }
              >
                <h4>Information</h4>
                <a target="_blank">
                  <div className={styles.content_footer}>
                    <p>{values.name}</p>
                    <Image
                      src={"/svg/icon-target-link.svg"}
                      width={16}
                      height={16}
                    />
                  </div>
                </a>
              </div>
            ))}
            {footerValues.contact_us.map((values) => (
              <div
                key={values.name}
                className={styles.footer_titles}
                onClick={() =>
                  toast.info("Coming Soon", {
                    position: "top-right",
                  })
                }
              >
                <h4>Contact Us</h4>
                <a target="_blank">
                  <div className={styles.content_footer}>
                    <p>{values.name}</p>
                    <Image
                      src={"/svg/icon-target-link.svg"}
                      width={16}
                      height={16}
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>
        ))}
      </footer>
      <section className={styles.copyright}>
        <div className={`wrapper ${styles.copyright_wrapper}`}>
          <p>© DuckyDrop, 2022</p>
        </div>
      </section>
    </div>
  );
}
