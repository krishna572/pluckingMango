class Mango{
    constructor(x,y,r){
        this.image = loadImage("images/mango.png");
        var option = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.circle(x,y,r,option);
        World.add(world,this.body);
        this.r = r;
        this.x = x;
        this.y = y;
    }
    display(){
        image(this.image,this.x,this.y,this.r,this.r);
    }
}