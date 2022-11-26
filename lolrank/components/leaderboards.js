import PlayerCard from "./playerCard";

export default function Leaderboards(props) {
    const { playerData } = props;
    return (
        <>
            <h1>Leaderboards</h1>

            <ul>
                {playerData.map((el, idx) => {
                    return <div key={idx}>
                        {el.map(rank => {
                            if (rank.queueType !== "RANKED_SOLO_5x5") {
                                null
                            } else {
                                return <PlayerCard key={rank.leagueId} ign={rank.summonerName} tier={rank.tier} rank={rank.rank} wins={rank.wins} hotstreak={rank.hotStreak} />
                            }
                        })}
                    </div>
                })}
            </ul>
        </>

    )
}
