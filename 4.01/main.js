var blocks = []
var loadLever = function(n) {
    n = n - 1
    var level = levels[n]
    var blocks = []
    for(var i = 0; i < level.length; i++) {
        var p = level[i]
        var block = Block(p)
        blocks.push(block)
    }
    return blocks
}
var enableDebug = function(enable) {
    window.paused = false
    if(!enable) {
        return false
    }
    window.addEventListener('keydown', function(event) {
        var k = event.key
        if(k == 'p') {
            paused = !paused
        } else if('12346789'.includes(k)) {
            blocks = loadLever(Number(k))
        }
    })
    //调节fps
    document.querySelector('#input-value').addEventListener('input', function() {
        window.fps = Number(this.value)
    })
}
var _main = function() {
    // var images = {
    //     ball: 'ball.png',
    //     block: 'block.png',
    //     paddle: 'paddle.png',
    // }
    // var game = hcGame(fps, images, function(g) {
    //     var s = Scene(g)
    //     g.runGame(s)
    // })
    
    
    var paddle = Paddle()
    var ball = Ball()
    var score = 0
    var game = hcGame(30)
    blocks = loadLever(3)
    game.update = function() {
        if(!paused) {
            ball.move()
        }
        if(paddle.colide(ball)) {
            ball.rebound()
        }
        blocks.forEach(function(block) {
            if(block.colide(ball)) {
                block.kill()
                score += 100
                //反弹函数
                ball.rebound()
            }
        })
    }
    game.draw = function() {
        game.drawIamge(paddle)
        game.drawIamge(ball)
        blocks.forEach(function(block) {
            if(block.alive) {
                game.drawIamge(block)
            }
        })
        game.contents.fillText("hello\n" + score, 10, 260)
    }
    game.register('a', function() {
        paddle.moveLeft()
    })
    game.register('d', function() {
        paddle.moveRight()
    })
    game.register('f', function() {
        ball.ballFire()
    })
    enableDebug(true)
    var enableDrag = false
    game.canvas.addEventListener('mousedown', function(event) {
        var x = event.offsetX
        var y = event.offsetY
        // 检查是否点中了 ball
        if (ball.hasPoint(x, y)) {
            // 设置拖拽状态
            enableDrag = true
        }
    })
    game.canvas.addEventListener('mousemove', function(event) {
        var x = event.offsetX
        var y = event.offsetY
        if (enableDrag) {
            ball.x = x
            ball.y = y
        }
    })
    game.canvas.addEventListener('mouseup', function(event) {
        var x = event.offsetX
        var y = event.offsetY
        enableDrag = false
    })
}
_main()