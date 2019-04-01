var Paddle = function() {
    var p = new Gameobject('myImage.png', 100, 200)
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
        if(this.x < ball.x + ball.image.width && this.x + this.image.width > ball.x) {
            if(this.y < ball.y + ball.image.height) {
                return true
            }
        }
        return false
    }
    return p
}