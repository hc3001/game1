var Ball = function(game) {
    // var p = new Gameobject('ball.png', 150, 212)
    var p = game.imageByName('ball')
    p.x = 150
    p.y = 212
    p.speedX = 5
    p.speedY = 5
    p.action = false
    p.ballFire = function() {
        this.action = true
    }
    p.move = function() {
        if(this.action) {
            if(this.x < 0 || this.x + this.image.width > 400) {
                this.speedX = -this.speedX
            }
            if(this.y < 0 || this.y + this.image.height > 280) {
                this.speedY = -this.speedY
            }
            this.x += this.speedX
            this.y += this.speedY
        }
    }
    p.rebound = function() {
        this.speedY *= -1
    }
    p.hasPoint = function(x, y) {
        console.log(p)
        var xIn = x >= p.x && x <= p.x + p.image.width
        var yIn = y >= p.y && y <= p.y + p.image.height
        return xIn && yIn
    }
    return p
}