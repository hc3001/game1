var Block = function(x, y) {
    var p = new Gameobject('block.png', x, y)
    p.alive = true
    p.kill = function() {
        p.alive = false
    }
    p.colide = function(b) {
        if(this.alive) {
            return aInb(p, b)
        }
    }
    return p
}