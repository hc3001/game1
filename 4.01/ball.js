var Ball = function() {
    var p = new Gameobject('ball.png', 160, 174)
    p.speedX = 5
    p.speedY = 5
    p.ballFire = function() {
        this.action = true
    }
    p.move = function() {
        if(this.action) {
            if(this.x < 0 || this.x + this.image.width > 400) {
                this.speedX = -this.speedX
            }
            if(this.y < 0 || this.y + this.image.height > 250) {
                this.speedY = -this.speedY
            }
            this.x += this.speedX
            this.y += this.speedY
        }
    }
    p.rebound = function() {
        this.speedY *= -1
    }
    return p
}