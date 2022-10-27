import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Home() {
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
					mexc_link: "https://www.mexc.com/",
					mexc_name: "MEXC",
					mexc_img: "icon-mexc",
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
							<Image src={"/svg/icon-tagline-star.svg"} width={22} height={22} />
							<div className={styles.tagline}>
								<Image
									src={"/svg/icon-tagline-discount.svg"}
									width={24}
									height={24}
									alt="Tagline - Cheap"
								/>
								<p>Cheap</p>
							</div>
							<Image src={"/svg/icon-tagline-star.svg"} width={22} height={22} />
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
								Through the simple, user-friendly, already functional Airdrop dApp,
								users can connect their wallet, and Airdrop their coin/token to a
								hundred and thousand wallet addresses without any drama needed.
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
						It’s like a give-and-take. We are a community-based project, so the more
						often you do mass dropping the more you gain the benefits from the
						community. You will get $DUCKY tokens by loyally using the Ducky Drop
						platform as one of the marketing campaign tools for their project.
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
						<Image src={"/svg/icon-x.svg"} width={20} height={20} />
						<p>This is Our Product</p>
						<Image src={"/svg/icon-x.svg"} width={20} height={20} />
					</div>
					<h1>
						Get the best <span>product</span> from us
					</h1>
					<p>
						We have provided 4 of the best products that are ready for you to use on
						our platform.
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
									<Image src={"/svg/card-product-top-mid.svg"} width={94} height={23} />
									<Image
										src={"/svg/card-product-top-right.svg"}
										width={23}
										height={23}
									/>
								</div>
								<div className={styles.content_mid}>
									<h2>Multi-Chain DApp</h2>
									<p>Allows users to bridging with pegged tokens or liquidity pools.</p>
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
									<Image src={"/svg/card-product-top-mid.svg"} width={94} height={23} />
									<Image
										src={"/svg/card-product-top-right.svg"}
										width={23}
										height={23}
									/>
								</div>
								<div className={styles.content_mid}>
									<h2>Reusable Airdrop</h2>
									<p>Allows users to bridging with pegged tokens or liquidity pools.</p>
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
									<Image src={"/svg/card-product-top-mid.svg"} width={94} height={23} />
									<Image
										src={"/svg/card-product-top-right.svg"}
										width={23}
										height={23}
									/>
								</div>
								<div className={styles.content_mid}>
									<h2>Instant Airdrop</h2>
									<p>Allows users to bridging with pegged tokens or liquidity pools.</p>
								</div>
							</div>
							<div className={styles.icon_wrapper}>
								<Image src={"/svg/card-product-icon-blue.svg"} width={40} height={40} />
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
									<Image src={"/svg/card-product-top-mid.svg"} width={94} height={23} />
									<Image
										src={"/svg/card-product-top-right.svg"}
										width={23}
										height={23}
									/>
								</div>
								<div className={styles.content_mid}>
									<h2>Ducky HUnter</h2>
									<p>Allows users to bridging with pegged tokens or liquidity pools.</p>
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
					<div className="wrapper"></div>
				</section>
				<section className={styles.our_partners}>
					<h1>
						Our <span>Partners</span>
					</h1>
				</section>
				<section className={styles.tokenomics}>
					<div className={`wrapper ${styles.section_wrapper}`}>
						<div className={styles.subtitle_decoration}>
							<Image src={"/svg/icon-x.svg"} width={20} height={20} />
							<p>Our Token Management</p>
							<Image src={"/svg/icon-x.svg"} width={20} height={20} />
						</div>
						<h1>Tokenomics</h1>
						<p>
							Know the characteristics of our demand, supply of assets and also token
							management.
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
							<div className={styles.range}></div>
							<div className={styles.range}></div>
							<div className={styles.range}></div>
							<div className={styles.range}></div>
							<div className={styles.range}></div>
							<div className={styles.range}></div>
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
					{FOOTER_DATA.map((footerValues) => (
						<>
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
												<Image src={"/svg/icon-target-link.svg"} width={16} height={16} />
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
												<Image src={"/svg/icon-target-link.svg"} width={16} height={16} />
											</div>
										</a>
									</Link>
									{/* twitter */}
									<div className={styles.content_footer}>
										<Image
											src={"/svg/" + values.twitter_icon + ".svg"}
											width={36}
											height={36}
										/>
										<p>{values.twitter}</p>
										<Image src={"/svg/icon-target-link.svg"} width={16} height={16} />
									</div>
								</div>
							))}
							{/* Buy Ducky Sections */}
							{footerValues.buy_ducky.map((values) => (
								<div className={styles.footer_titles}>
									<h4>Buy Ducky</h4>
									{/* PancakeSwap */}
									<Link href={values.ps_link}>
										<a target="_blank">
											<div className={styles.content_footer}>
												<Image
													src={"/svg/" + values.ps_img + ".svg"}
													width={36}
													height={36}
												/>
												<p>{values.ps_name}</p>
												<Image src={"/svg/icon-target-link.svg"} width={16} height={16} />
											</div>
										</a>
									</Link>
									{/* MEXC */}
									<Link href={values.mexc_link}>
										<a target="_blank">
											<div className={styles.content_footer}>
												<Image
													src={"/svg/" + values.mexc_img + ".svg"}
													width={36}
													height={36}
												/>
												<p>{values.mexc_name}</p>
												<Image src={"/svg/icon-target-link.svg"} width={16} height={16} />
											</div>
										</a>
									</Link>
								</div>
							))}
							{/* Markets Sections */}
							{footerValues.markets.map((values) => (
								<div className={styles.footer_titles}>
									<h4>Markets</h4>
									{/* Coin Gecko */}
									<Link href={values.gecko_link}>
										<a target="_blank">
											<div className={styles.content_footer}>
												<Image
													src={"/svg/" + values.gecko_img + ".svg"}
													width={36}
													height={36}
												/>
												<p>{values.gecko_name}</p>
												<Image src={"/svg/icon-target-link.svg"} width={16} height={16} />
											</div>
										</a>
									</Link>
									{/* CoinMarketCap */}
									<Link href={values.market_link}>
										<a target="_blank">
											<div className={styles.content_footer}>
												<Image
													src={"/svg/" + values.market_img + ".svg"}
													width={36}
													height={36}
												/>
												<p>{values.market_name}</p>
												<Image src={"/svg/icon-target-link.svg"} width={16} height={16} />
											</div>
										</a>
									</Link>
								</div>
							))}
							{footerValues.information.map((values) => (
								<div className={styles.footer_titles}>
									<h4>Information</h4>
									<div className={styles.content_footer}>
										<p>{values.name}</p>
										<Image src={"/svg/icon-target-link.svg"} width={16} height={16} />
									</div>
								</div>
							))}
						</>
					))}
					<div className={styles.footer_titles}>
						<h4>Contact Us</h4>
						<div className={styles.content_footer}>
							<p>Contact Us</p>
							<Image src={"/svg/icon-target-link.svg"} width={16} height={16} />
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
