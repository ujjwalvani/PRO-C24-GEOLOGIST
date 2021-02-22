class Stone {
    constructor(x,y,widht,height){
        var options = {
            'density':1.0,
            'friction':1.5,
            'restitution':2,
        }
        this.body - Bodies.rectangle(x,y,widht,height,options);
        this.widht - widht;
        this.height - height
        World.add(World,this.body);

    }
    display (){
        //var pos -this.body.position;
        rectMode(CENTER);
        fill("black")
        rect(pos.x,pos.y,this.widht,this.height);
     }
    }