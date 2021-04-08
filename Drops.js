class Drops{
   constructor(x,y){
    var options = {
        'restitution':0.8,
        'friction':0.1,
        //'density':1.0
    }
    this.x=x;
    this.y=y;
    this.rain=Bodies.circle(x,y,5,options);
    this.radius=5;
    World.add(world, this.rain);
   }

   update(){
       if(this.rain.position.y>400){
           Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)});
       }
   }


   display(){
       pos=this.rain.position;
       
       //if(this.rain.position.y>height){
          // Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)});
       //}
       fill("blue");
       ellipseMode(RADIUS);
       ellipse(pos.x,pos.y,this.r,this.r);
   }
}