class Paper{
    constuctor(x,y){
        var options={
'isStatic':false,
'restitution':0.3,
'friction':0.5,
'density':1.2
        }
 this.radius=this.radius;
 this.body=Bodies.circle(x,y,radius,options);
 World .add(world,this.body) ;      
    }
 dislplay(){
    fill("red");
ellipseMode(RADIUS);
circle(this.body.position.x,this.body.postion.y,this.radius,this.radius);
}
    
};