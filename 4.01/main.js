var blocks = []
var loadLever = function(game, n) {
    n = n - 1
    var level = levels[n]
    var blocks = []
    for(var i = 0; i < level.length; i++) {
        var p = level[i]
        var block = Block(game, p)
        blocks.push(block)
    }
    return blocks
}
var enableDebug = function(game, enable) {
    window.paused = false
    if(!enable) {
        return false
    }
    window.addEventListener('keydown', function(event) {
        var k = event.key
        console.log('12346789'.includes(k))
        if(k == 'p') {
            window.paused = !window.paused
        } else if('12346789'.includes(k)) {
            blocks = loadLever(game, Number(k))
            console.log('blocks', blocks)
        }
    })
    //调节fps
    document.querySelector('#input-value').addEventListener('input', function() {
        window.fps = Number(this.value)
    })
}
var _main = function() {
    var images = {
        ball: 'img/ball.png',
        block: 'img/block.png',
        paddle: 'img/paddle.png',
    }
    var game = hcGame(images, function(g) {
        var s = new SceneStart(g)
        g.runGame(s)
    })

    enableDebug(game, true)
}
_main()