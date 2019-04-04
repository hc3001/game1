
class SceneStart extends Scenemain {
    constructor(game) {
        super(game)
        game.register('k', function() {
            var end = Scene(game)
            game.replaceScene(end)
        })
        this.text = '按 k 游戏开始'
    }
    draw() {
        super.draw(this.text)
    }
    update() {
    
    }
}