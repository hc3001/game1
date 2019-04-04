// var SceneEnd = function(game) {
//     var s = {
//         game: game,
//     }
//     // 初始化
//     s.draw = function() {
//         // draw labels
//         game.contents.fillText('游戏结束, 按 r 重新游戏', 100, 150)
//     }
//     game.register('r', function() {
//         var end = SceneStart(game)
//         game.replaceScene(end)
//     })
//     s.update = function() {
//
//     }
//     return s
// }

class SceneEnd extends Scenemain {
    constructor(game) {
        super(game)
        game.register('r', function() {
            var end = new SceneStart(game)
            game.replaceScene(end)
        })
        this.text = '游戏结束, 按 r 重新游戏'
    }
    draw() {
        super.draw(this.text)
    }
    update() {
    
    }
}