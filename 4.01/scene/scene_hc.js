class Scenemain {
    constructor(game) {
        this.game = game
    }
    draw(text) {
        this.game.contents.fillText(text, 100, 150)
    }
}