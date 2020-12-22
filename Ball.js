class Ball{
    constructor(x,y){
        var options={
            
            density:1.0,
            frictionAir:0.005
        }
        this.body= Bodies.circle(x,y,40,options);
        this.radius=40;
        World.add(world,this.body);
    }   
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(RADIUS)
        ellipse(0,0,40,40);
        pop()

    }
}