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

var aInb = function(p, b) {
    if((b.x < p.x && b.x + b.image.width > p.x) || (b.x < p.x + p.image.width && b.x + b.image.width > p.x + p.image.width)) {
        if((b.y < p.y && b.y + b.image.height > p.y) || (b.y < p.y + p.image.height && b.y + b.image.height > p.y + p.image.height)) {
            return true
        }
    }
    return false
}