var Paddle = function() {
    var p = new Gameobject('paddle.png', 100, 220)
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
    p.colide = function(ball) {
        return aInb(p, ball) || aInb(ball, p)
    }
    return p
}