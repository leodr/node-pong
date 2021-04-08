const PLAYER_HEIGHT = 80;
const PLAYER_WIDTH = 10;

export class Player {
    constructor(side) {
        this.side = side;
        this.y = 0;
    }

    setPosition(newPosition) {
        this.y = newPosition;
    }

    draw(canvasContext) {
        const canvasWidth = canvasContext.canvas.width;
        const canvasHeight = canvasContext.canvas.height;

        const x = this.side === "enemy" ? canvasWidth - PLAYER_WIDTH : 0;

        canvasContext.fillStyle = "#E4E4E7";

        canvasContext.fillRect(
            x,
            Math.min(
                canvasHeight - PLAYER_HEIGHT,
                Math.max(0, this.y - PLAYER_HEIGHT / 2)
            ),
            PLAYER_WIDTH,
            PLAYER_HEIGHT
        );
    }
}
