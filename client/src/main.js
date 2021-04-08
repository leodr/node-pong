import { Ball } from "./Ball.js";
import { Canvas } from "./Canvas.js";
import "./index.css";
import { Player } from "./Player.js";

console.log("Hello World!");

const ws = new WebSocket("ws://localhost:8080/");

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const myself = new Player("self", context);
const enemy = new Player("enemy", context);
const ball = new Ball(canvas.width / 2, canvas.height / 2);

const canvasInstance = new Canvas(context);
canvasInstance.addDrawable(myself);
canvasInstance.addDrawable(enemy);
canvasInstance.addDrawable(ball);

canvasInstance.draw();

canvas.addEventListener("mousemove", (event) => {
    const yOffset = Math.max(0, Math.min(canvas.height, event.offsetY));

    myself.setPosition(yOffset);
    canvasInstance.draw();

    if (ws.readyState === WebSocket.OPEN) {
        ws.send(
            JSON.stringify({
                type: "POSITION_UPDATE",
                payload: { y: yOffset },
            })
        );
    }
});

ws.onmessage = (message) => {
    const data = JSON.parse(message.data);

    switch (data.type) {
        case "ENEMY_POSITION_UPDATE":
            enemy.setPosition(data.payload.y);
            canvasInstance.draw();
        case "BALL_POSITION_UPDATE":
            ball.setPosition(data.payload.x, data.payload.y);
            canvasInstance.draw();
    }
};
