import Image from "next/image";
import footerImg from "../public/footer.png"
// css
import styles from "../styles/Footer.module.css"
export default function Footer() {
    return (
        <div className={styles.footerContainer} style={{zIndex: 1, color: "black" }}>
            <Image
                alt="footer background image"
                src={footerImg}
                fill={true}
                // object-fit={"cover"}
                style={{ zIndex: -1, position: "absolute" }}
            />
            <h3>LoL Rank & Yachi&apos; Corner 2022 - 2023</h3>
        </div>
    )
}