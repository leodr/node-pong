import WebSocket from "ws";
import { Game } from "./Game.js";
import { Player } from "./Player.js";

const wss = new WebSocket.Server({ port: 8080 });

const game = new Game();

wss.on("connection", (connection) => {
    const newPlayer = new Player(game, connection);

    game.addPlayer(newPlayer);
});
