import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout, { siteTitle } from '../components/layout';
import useSWR from "swr";
// components
import Leaderboards from '../components/leaderboards';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export async function getStaticProps(context) {
  console.log('hey its me')
  const devAPI = process.env.RIOT_DEV_API;
  const { getPlayerData } = require("../lib/helpers")

  return { props: { playerInfo: (await getPlayerData(devAPI)) }, revalidate: 10 }
}

export default function Home(props) {
  const { data, error } = useSWR("/api/player", fetcher, { fallbackData: props.playerInfo, refreshInterval: 30000 })
  // console.log(data[0], 'working res [0]')
  // console.log(data, 'is this data working')

  return (
    // <div className={styles.container}>
      <Layout home>
        <Head>
          <meta name="description" content="Gen erated by create next app" />
          <title>{siteTitle}</title>
        </Head>
        <Leaderboards playerData={data}/>
      </Layout>
    // </div>
  )
}
