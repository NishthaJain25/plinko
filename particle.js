class Particle{
 constructor(x,y){

   this.r =10;
   this.body =Bodies.circle(x,y,this.r);
   this.color = color(random(rgb,"green",));
   World.add(world,this.body);

 }
 display(){
    fill(this.color);
    
     ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
 }
 
}