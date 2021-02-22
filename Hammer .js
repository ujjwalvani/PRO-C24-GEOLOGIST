    class Hammer {
    constructor(x,y,widht,height){
        var options = {
            'density':2,
            'friction':1.0,
            'restitution':0.5,
        }
        this.body - Bodies.rectangle(x,y,widht,height,options);
        this.widht - widht;
        this.height - height
        World.add(World,this.body);

    }
    display (){
        //var pos -this.body.position;
        rectMode(CENTER);
        fill("brown")
        rect(pos.x,pos.y,this.widht,this.height);
     }
    }