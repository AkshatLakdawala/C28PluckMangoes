class Tree {
    constructor (x, y, width, height) {
       var  option = {
           isStatic : true
       }
       this.width = width;
       this.height = height;
       this.image = loadImage("tree.png")
        this.body = Bodies.rectangle (x, y, width, height, option);
        World.add (world, this.body);
    }
    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        fill ("white");
        image (this.image,pos.x, pos.y,this.width, this.height);
    }
 }