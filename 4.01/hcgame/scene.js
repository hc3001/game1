var Scene = function(game) {
    var s = {
        // game: game,
    }
    //初始化
    var paddle = Paddle(game)
    var ball = Ball(game)
    var score = 0
    blocks = loadLever(game, 3)
    game.register('a', function() {
        paddle.moveLeft()
    })
    game.register('d', function() {
        paddle.moveRight()
    })
    game.register('f', function() {
        ball.ballFire()
    })
    s.draw = function() {
        // 画背景
        game.contents.fillStyle = "#554"
        game.contents.fillRect(0, 0, 400, 300)
        
        game.drawIamge(paddle)
        game.drawIamge(ball)
        blocks.forEach(function(block) {
            if(block.alive) {
                game.drawIamge(block)
            }
        })
        game.contents.fillStyle = "blue"
        game.contents.fillText("分数\n" + score, 10, 260)
    }
    s.update = function() {
        if (window.paused) {
            return
        }
        ball.move()
        // 判断游戏结束
        if (ball.y > paddle.y) {
            // 跳转到 游戏结束 的场景
            var end = new SceneEnd(game)
            game.replaceScene(end)
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
    return s
}