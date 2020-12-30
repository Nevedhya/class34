class Rope{
constructor(bodyA,pointB){
var option={
 stiffness:1.2,
 length:250,
 bodyA:bodyA,
 pointB:pointB

}
this.pointB=pointB;
this.rope=Constraint.create(option);
World.add(world,this.rope);

}
display(){
var pointA=this.rope.bodyA.position;
var pointB=this.pointB;
line(pointA.x,pointA.y,pointB.x,pointB.y);



}
}