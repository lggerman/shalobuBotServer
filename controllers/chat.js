export const sendMessage = () => {
  const URL = "https://open-api.trovo.live/openplatform/chat/send";
  fetch(URL, {
    method: POST,
    headers: {
      Accept: "application/json",
      "Client-ID": process.env.CLIENT_ID,
      Authorization: process.env.OAUTH,
      "Content-Type": "application/json",
    },
    body: {
      content: "test",
      channel_id: "100669730",
    },
  });
};
