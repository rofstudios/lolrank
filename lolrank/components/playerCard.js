export default function PlayerCard(props) {
    const { ign, tier, rank, hotStreak, wins } = props
    return (
        <div>
            <h1>IGN:&nbsp;&nbsp;<span>{ign}</span></h1>
            <h2>Current Rank:&nbsp;&nbsp;<span>{`${tier} ${rank}`}</span></h2>
            <h2>Hot Streak?&nbsp;&nbsp;<span style={{ color: ign == "Down Horribly" ? "red" : "deepskyblue" }}>{`${hotStreak ? "Heck Yeah" : ign == "Down Horribly" ? "Down Bad" : "Feeling a little cold"}`}</span></h2>
            <h2>Wins:&nbsp;&nbsp;<span style={{ color: "skyblue" }}>{`${wins}`}</span></h2>

        </div>
    )
}