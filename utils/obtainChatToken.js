import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

export const obtainChatToken = (channelId = 102365600) => {
  const CHAT_URL =
    "https://open-api.trovo.live/openplatform/chat/channel-token/";
  return fetch(CHAT_URL + channelId, {
    headers: {
      Accept: "application/json",
      "Client-ID": process.env.CLIENT_ID,
      Authorization: "OAuth bb50hhneo0cd1tuuc7uk-q",
    },
  });
};
