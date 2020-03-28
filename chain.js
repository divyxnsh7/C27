class Chain {
  constructor(bodyA,bodyB){
    var options = {
        bodyA: bird.body,
        bodyB: log6.body,
        stiffness: 0.04,
        length: 10
      }
    this.chain = Constraint.create(options);
    World.add(world,this.chain);
  }
 display() {
 var pointA = this.chain.bodyA.position;
 var pointB = this.chain.bodyB.position;
 strokeWeight(3);
 line(bird.body.position.x,bird.body.position.y,log6.body.position.x,log6.body.position.y);
 }
};