import Image from "next/image";
import footerImg from "../public/footer.png";
import footerLogo from "../public/lol&friends2.png";
// css
import styles from "../styles/Footer.module.css";
import { Inter } from "@next/font/google";
import { Hanalei_Fill } from "@next/font/google";

const hanalei = Hanalei_Fill({
    // style: "normal",
    weight: '400',
    subsets: 'latin'
})

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerBackgroundColor}></div>
            <Image
                alt="footer background image"
                src={footerImg}
                fill={true}
                // object-fit={"cover"}
                className={styles.footerBackgroundImage}
            />
            <div className={styles.footerSubContainer} style={{ zIndex: 3 }}>
                <h3 className={`${styles.footerTextNameAndCopyright} ${hanalei.className}`}>
                    LoL & Friends
                    <br/>&
                    <br/>Yachi&apos;s Corner <br/>2022 - 2023
                </h3>
                <Image
                    alt="lol & friends logo"
                    src={footerLogo}
                    className={styles.footerLogo}
                />
            </div>
        </div>
    )
}