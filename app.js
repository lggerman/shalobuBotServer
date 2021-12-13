import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from 'cors'
import { Server as WebSocketServer } from "socket.io";
import http from "http";
import indexRouter from "./routes/index.js";
import { init } from './client.js'
import { getChannelInfo } from "./services/getChannelInfo.js";

const app = express();
const httpServer = http.createServer(app);
const io = new WebSocketServer(httpServer);

app.set("port", process.env.PORT || 4000);
app.use(cors())
app.use(express.json());
app.use("/api", indexRouter);

io.on("connection", (socket) => {
  console.log("xD");
});

httpServer.listen();
console.log("server on");

init()
console.log(getChannelInfo())