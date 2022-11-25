// making external api calls
import { getPageFiles } from "next/dist/server/get-page-files";
import useSWR from "swr";
import { friends } from "../components/layout";
import { getIGN } from "../components/utils";
// import { GetInfo } from "../components/utils";
import GetInfo from "../components/utils";
import { useState } from "react";
// console.log(getIGN(), 'testing get ign');
// let urls = getIGN()


// const fetcher = (...args) => {
//     return fetch(...args, {
//         headers: {
//             "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
//             "Accept-Language": "en-US,en;q=0.9",
//             "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
//             "Origin": "https://developer.riotgames.com"
//         }
//     }).then(res => res.json())
// }

const fetcher = (...args) => fetch(...args).then(res => res.json())

export async function getStaticProps() {
    const devAPI = process.env.RIOT_DEV_API;
    const { getplayerDate } = require("../lib/helpers")

    return { props: (await getplayerDate(devAPI)), revalidate: 10 }
}

export default function Leaderboards({ devAPI, ...props }) {
    console.log(props, 'props before swr')
    const { data } = useSWR("/api/player", fetcher, { fallbackData: props, refreshInterval: 30000 })
    console.log(props, 'props after swr')
    console.log(data, 'is this data working')
    // console.log(data.id, 'is this data working2222222')


    // let [data, setData] = useState(null);
    // GetInfo();
    // let tempign = [`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/enexes?api_key=${devAPI}`, `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/enexes?api_key=${devAPI}`]

    // // let tempign = [`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/enexes?api_key=${devAPI}`, `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/gobuta?api_key=${devAPI}`, `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/gatekeeperfappy?api_key=${devAPI}`, `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/jvmbo?api_key=${devAPI}`]

    // // const fetcher = (...args) => {
    // //     return fetch(...args).then(res => res.json())
    // // }
    // let stats = []
    // function myProject (abc) {
    //     // let {data: user } = useSWR(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${abc}?api_key=${devAPI}`, fetcher)
    //     // console.log(user, 'is this mP')
    //     // stats.push(user.id);
    //     // console.log(user.id, 'runnnnin')
    //     // let {data: rank } = useSWR(user.id ? `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${user.id}?api_key=${devAPI}`: null,fetcher)
    //     // console.log(user, 'new data in here')
    //     // console.log(rank, "lol")
    // }
    // console.log(stats, 'stats outside')


    // myProject("enexes");
    // let igns = [];
    // function getIGNs() {
    //     for (let key in friends) {
    //         // grabbing value of friends object and storing as ign
    //         let ign = friends[key]
    //         // reassigning ign after removing spaces values
    //         // ign = ign.replace(/\s+/g, '')
    //         ign = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${ign.replace(/\s+/g, '').toLowerCase()}?api_key=${devAPI}`
    //         // const { data, error } = useSWR([`${api, ign}`, devAPI], fetcher);
    //         igns.push(ign)
    //     }
    //     // return igns;
    // }
    // console.log(igns,'before')
    // getIGNs()
    // igns.forEach(function(tID) {
    //     // myProject(tID)
    //     console.log(stats,'inside stats')
    // })
    // console.log(stats, "statsss")
    // console.log(igns,'after')

    // getIGNs();
    // console.log(igns,'igns')
    // let { data, error } = useSWR(tempign, fetcher)
    // console.log(data, 'datadata')
    // console.log('data', data)
    // (async() => {})
    return (
        <>
            <h3>Leaderboards</h3>
            {/* <GetInfo /> */}
        </>
    )
}

// function Profile () {
//   const { data, error } = useSWR('/api/user/123', fetcher)

//   if (error) return <div>failed to load</div>
//   if (!data) return <div>loading...</div>

//   // render data
//   return <div>hello {data.name}!</div>
// }