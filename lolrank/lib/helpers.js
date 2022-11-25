let friends = ['enexes', 'Gatekeeper Fappy', 'Gobuta', 'Jumbo']

let header = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
    "Accept-Language": "en-US,en;q=0.9",
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "https://developer.riotgames.com"
}

export async function getPlayerData(key) {
    let playerData = await Promise.all(
        friends.map(async (player) => {
            let playerInfo = await fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${player.replace(/\s+/g, '').toLowerCase()}?api_key=${key}`, { headers: header })
                .then(r => r.json()).then(async (r) => {
                    let rankData = await fetch(`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${r.id}?api_key=${key}`, { headers: header })
                        .then(r => r.json())
                    return rankData
                })
            return playerInfo
        })
    )

    return playerData

}