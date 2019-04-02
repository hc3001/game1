var Block = function(b) {
    var p = new Gameobject('block.png', b[0], b[1])
    p.alive = true
    p.lives = b[2] || 1
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