import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

export async function getChannelInfo(){
    const ENDPOINT = 'https://open-api.trovo.live/openplatform/channels';

    const response = await fetch(`${ENDPOINT}/102365600`, {
        headers: {
        Accept: "application/json",
        "Client-ID": process.env.CLIENT_ID,
        Authorization: "OAuth bb50hhneo0cd1tuuc7uk-q",
      }})
    console.log(response)
    return response
}