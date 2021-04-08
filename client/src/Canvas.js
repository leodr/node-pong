export class Canvas {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;

        this.drawables = new Set();
    }

    addDrawable(drawable) {
        this.drawables.add(drawable);
    }

    removeDrawable(drawable) {
        this.drawables.delete(drawable);
    }

    draw() {
        const ctx = this.canvasContext;

        const canvasWidth = ctx.canvas.width;
        const canvasHeight = ctx.canvas.height;

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        this.drawables.forEach((drawable) => drawable.draw(ctx));
    }
}
