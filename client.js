import WebSocket from "ws";
import { obtainChatToken } from "./utils/obtainChatToken.js";


export function init (){
  wsConnect()
}

function wsConnect(){

  const ws = new WebSocket("wss://open-chat.trovo.live/chat");
  
  ws.on("open", function open() {
    obtainChatToken().then((response) =>
    response.json().then((responseJSON) => {
      const auth = {
        type: "AUTH",
        data: {
          token: responseJSON.token,
        },
      };
      ws.send(JSON.stringify(auth));
    })
    );
  });
  
  ws.on("message", function incoming(response) {
    const message = JSON.parse(response);
    if (message.type === "RESPONSE") {
      console.log(message);
    }
    if (message.type === "CHAT") {
      const lastmessage = message.data.chats.length;
      console.log(`${message.data.chats[lastmessage - 1].nick_name}: ${message.data.chats[lastmessage - 1].content}`);
    }
  });
  
  setInterval(() => {
    const PING = {
      type: "PING",
      nonce: "PING",
    };
    ws.emit(JSON.stringify(PING));
  }, 25000);
  
}