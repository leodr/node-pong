const BALL_WIDTH = 12;
const BALL_HEIGHT = 12;

export class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    draw(canvasContext) {
        canvasContext.fillStyle = "#C084FC";

        canvasContext.fillRect(
            this.x - BALL_WIDTH / 2,
            this.y - BALL_WIDTH / 2,
            BALL_WIDTH,
            BALL_HEIGHT
        );
    }
}
