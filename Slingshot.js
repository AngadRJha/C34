class Slingshot{
    constructor(body1,point2){
        var options={
            bodyA : body1,
            pointB : point2,
            stiffness : 1.2,
            length : 250
        }
        this.pointB=point2;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);      
    }
    

    
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB =this.pointB;
            strokeWeight(4);
            stroke("red");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
       
    }
    fly(){
        this.sling.bodyA=null;
    }

}