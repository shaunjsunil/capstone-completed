class Ball{
    constructor(x,y,r){
    var options={
    restitution : 0.8,
    density : 10,
    fricton : 0.1,
    }
    
    
    this.body=Bodies.circle(x,y,r,options)
    this.r=r
    World.add(world,this.body);
    
    }
    display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push()
    translate(pos.x,pos.y)
    fill("red")
    rotate(angle)
    ellipse(0,0,this.r*2)
    
    pop()
    
    
    
    
    }
    
    
    }