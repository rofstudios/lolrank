import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// css
import styles from "../styles/Layout.module.css"
// components
import Header from "./header";
import Footer from "./footer";

export const siteTitle = "LoL Rank";

export default function Layout({ children, home }) {
    return (
        <div className={styles.layoutComponent}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content={siteTitle} />
                <meta property="description" content="LoL rank tracking for season 2023"/>
                <meta property="og:image" content="https://og-image.vercel.app/LoL%20Rank%20(wip).png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg&images=https%3A%2F%2Ficons.veryicon.com%2Fpng%2FMovie%2520%2526%2520TV%2FOne%2520Piece%2520Manga%2FAffro%2520Luffy.png&widths=&heights=undefined&heights=500" />
                <meta name="og:title" content={siteTitle} />
                <meta name="description" content="Friend's ranked tracker for season 13"/>
            </Head>
            <Header/>
            {/* <h1>Yachi&apos;s Corner</h1> */}
            <main className={styles.childrenContainer}>{children}</main>
            <Footer/>
        </div>
    )
}