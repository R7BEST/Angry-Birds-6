class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage=loadImage("sprites/smoke.png");
    this.trajectory= [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    
    if(this.body.velocity.x>10 && this.body.position.x>200)
    {
    var position = [this.body.position.x , this.body.position.y];
    this.trajectory.push(position)
    }
    //[[ 200,50], [202, 52], [230,67]]

    for(var i = 0 ; i<this.trajectory.length; i++)
    {
      image(this.smokeimage, this.trajectory[i][0], this.trajectory[i][1]);
     // this.image(this.smokeimage, this.trajectory[1][0], this.trajectory[1][1])
     // this.image(this.smokeimage, this.trajectory[2][0], this.trajectory[2][1])
    }


    super.display();
  }
}
