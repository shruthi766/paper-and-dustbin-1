class Ground{
    constructor(x,y){
        var options={
            'isStatic':true,
            'restitution':0,
'friction':0,
'density':1
        }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    
World.add(world,this.body)



    }
    display(){
        fill("yellow");
        rectMode(CENTER);
rect(this.body.possition.x,this.body.position.y,this.width,this.height);
    }
};