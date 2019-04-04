var Paddle = function(game) {
    var p = game.imageByName('paddle')
    p.x = 100
    p.y = 220
    p.speed = 10
    p.moveLeft = function() {
        this.x -= this.speed
        if(this.x < 0) {
            this.x = 0
        }
    }
    p.moveRight = function() {
        this.x += this.speed
        if(this.x + this.image.width > 400) {
            this.x = 400 - this.image.width
        }
    }
    var aInb = function(x, x1, x2) {
        return x >= x1 && x <= x2
    }
    p.colide = function(ball) {
        var a = p
        var b = ball
        if (aInb(a.x, b.x, b.x + b.w) || aInb(b.x, a.x, a.x + a.w)) {
            if (aInb(a.y, b.y, b.y + b.h) || aInb(b.y, a.y, a.y + a.h)) {
                return true
            }
        }
        return false
    }
    return p
}