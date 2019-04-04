var Block = function(game, b) {
    var img = game.imageByName('block')
    var p = {
        image: img.image,
        x: b[0],
        y: b[1],
        alive: true,
        lives: b[2] || 1,
    }
    p.kill = function() {
        if(p.lives <= 1) {
            p.alive = false
        } else if(this.lives > 1){
            p.lives--
        }
    }
    p.colide = function(b) {
        if(this.alive) {
            return aInb(p, b) || aInb(b, p)
        }
    }
    return p
}