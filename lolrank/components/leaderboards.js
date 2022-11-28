import PlayerCard from "./playerCard";
import styles from "../styles/Leaderboards.module.css"

export default function Leaderboards(props) {
    const { playerData } = props;
    return (
        <>
            <h1 style={{ textAlign: "center", color: "#1cf3ff", textShadow: "-5px 5px 7px #000000" }}>Leaderboards 2023</h1>
            <div className={styles.leaderboardsContainer}>
                {playerData.map((el, idx) => {
                    return (
                        <div key={idx} className={styles.cardContainer}>
                            {el.map(rank => {
                                if (rank.queueType !== "RANKED_SOLO_5x5") {
                                    null
                                } else {
                                    return <PlayerCard key={rank.leagueId} ign={rank.summonerName} tier={rank.tier} rank={rank.rank} wins={rank.wins} hotstreak={rank.hotStreak} />
                                }
                            })}
                        </div>
                    )
                })}
            </div>
        </>

    )
}
