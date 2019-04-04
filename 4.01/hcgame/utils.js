class Gameobject {
    constructor (image, x, y) {
        this.x = x
        this.y = y
        this.action = false
        this.image = this.imageFrampath(image)
    }
    imageFrampath (image) {
        var img = new Image()
        img.src = image
        return img
    }
}

var imageFromPath = function(path) {
    var img = new Image()
    img.src = path
    return img
}

var aInb = function(a, b) {
    var o = a
    if (b.y > o.y && b.y < o.y + o.image.height) {
        if (b.x > o.x && b.x < o.x + o.image.width) {
            return true
        }
    }
    return false
}