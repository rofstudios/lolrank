import Image from "next/image";
import { card1, card2, card3, card4, card5, card6 } from "../public/images";

export default function PlayerCard(props) {
    const { ign, tier, rank, hotStreak, wins } = props
    let images = [card1, card2, card3, card4, card5, card6]
    let i = Math.floor(Math.random() * 6)
    return (
        <div style={{ position: "relative", zIndex: 1, overflow: "hidden", padding: "10%" }}>
            <Image
                alt="player card background"
                src={images[i]}
                fill={true}
                object-fit={"cover"}
                style={{ zIndex: -1 }}

            />
            <div style={{ display: "flex", flexDirection: "column", width: "100%", lineHeight: "1.5", color: "black" }}>
                <h2 style={{ margin: 0 }}>IGN:&nbsp;&nbsp;<span>{ign}</span></h2>
                <h3 style={{ margin: 0 }}>Current Rank:&nbsp;&nbsp;<span>{`${tier} ${rank}`}</span></h3>
                <h3 style={{ margin: 0 }}>Hot Streak?&nbsp;&nbsp;<span style={{ margin: 0, textShadow: "1px 1px 2px white", color: ign == "Down Horribly" && !hotStreak ? "red" : "deepskyblue" }}>{`${hotStreak ? "Heck Yeah" : ign == "Down Horribly" ? "Down Bad" : "Feeling a little cold"}`}</span></h3>
                <h3 style={{ margin: 0 }}>Wins:&nbsp;&nbsp;<span style={{ margin: 0, color: "darkviolet" }}>{`${wins}`}</span></h3>
            </div>
        </div>
    )
}