class Rope{
constructor(bodyA,pointB){
var options={
bodyA : bodyA,
pointB : pointB,
stiffness : 3,
length : 300,
}
this.pointB=pointB;
this.rope = Matter.Constraint.create(options)

World.add(world,this.rope)
}
display(){
    
 var pointA=this.rope.bodyA.position;
var   pointB=this.pointB;  
  push()
 strokeWeight(4)
  stroke("black")
line(pointA.x,pointA.y,pointB.x,pointB.y)

pop()


}

}





