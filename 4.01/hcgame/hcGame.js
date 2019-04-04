var hcGame = function(images, runCallback) {
    // images 是一个对象, 里面是图片的引用名字和图片路径
    var g = {
        scene: null,
        actions: {},
        keydowns: {},
        images: {},
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
    g.update = function() {
        g.scene.update()
    }
    // draw
    g.draw = function() {
        g.scene.draw()
    }
    window.fps = 30
    var runLoop = function() {
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
        setTimeout(function() {
            runLoop()
        }, 1000/fps)
    }
    
    //储存载入图对象
    var loads = []
    var names = Object.keys(images)
    for (var i = 0; i < names.length; i++) {
        let name = names[i]
        var path = images[name]
        let img = new Image()
        img.src = path
        img.onload = function() {
            g.images[name] = img
            loads.push(1)
            if (loads.length == names.length) {
                g.__start()
            }
        }
    }
    g.imageByName = function(name) {
        var img = g.images[name]
        var image = {
            w: img.width,
            h: img.height,
            image: img,
        }
        return image
    }
    g.runGame = function(scene) {
        g.scene = scene
        setTimeout(function() {
            runLoop()
        }, 1000/fps)
    }
    g.replaceScene = function(scene) {
        g.scene = scene
    }
    g.__start = function() {
        runCallback(g)
    }
    return g
}