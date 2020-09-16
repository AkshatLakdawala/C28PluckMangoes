class Stone {
    constructor (x, y) {
       var  option = {
           isStatic : false,
           restitution : 0,
           friction : 1,
           density : 1.2
       }
       
       this.image = loadImage("stone.png")
        this.body = Bodies.circle (x, y,50, option);
        World.add (world, this.body);
    }
    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        fill ("white");
        image (this.image,pos.x, pos.y,50, 50);
    }
 }

 
