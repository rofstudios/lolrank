import { getPlayerData } from "../../lib/helpers";
const devAPI = process.env.RIOT_DEV_API;

export default async function handler(req, res) {
    res.status(200).json(await getPlayerData(devAPI))
}