var hcGame = function(fps) {
    var g = {
        actions: {},
        keydowns: {},
    }
    var canvas = document.querySelector('#games')
    var contents = canvas.getContext('2d')
    g.canvas = canvas
    g.contents = contents
    window.addEventListener('keydown', function(event) {
        g.keydowns[event.key] = true
    })
    window.addEventListener('keyup', function(event) {
        g.keydowns[event.key] = false
    })
    g.register = function(key, callback) {
        this.actions[key] = callback
    }
    g.drawIamge = function(p) {
        this.contents.drawImage(p.image, p.x, p.y)
    }
    g.clearImage = function(p) {
        this.contents.clearRect(p.x, p.y, p.image.width, p.image.height)
    }
    setInterval(function() {
        //开始移动
        g.update()
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var action = actions[i]
            if(g.keydowns[action]) {
                g.actions[action]()
            }
        }
        //清除
        g.contents.clearRect(0, 0, g.canvas.width, g.canvas.height)
        //重新画
        g.draw()
        
    }, 1000/fps)
    return g
}