import Image from "next/image";
import headerImg from "../public/header.png"
export default function Header() {
    return (
        <Image
        alt="Lol & Friends Ranked Boards Season 2023"
        // src={"/header.png"}
        src={headerImg}
        // width={1007}
        // height={198}
        />
        // <h1>LoL & Friends <br/> Season 13 Ranked Boards</h1>
    )
}