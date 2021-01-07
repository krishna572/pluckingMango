class Stone{
    constructor(x,y,r){
        this.image = loadImage("images/stone.png");
        var option = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.circle(x,y,r,option);
        World.add(world,this.body);
        this.r = r;
    }
    display(){
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
    }
}