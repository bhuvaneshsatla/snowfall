class snow {
    constructor(x,y){

      var option = {
        isStatic:false,
        friction:0.01
      }

      this.snow = Bodies.circle(x, y, 7, option);
      this.radius = 7;
      World.add(world, this.snow);
    }

    update(){

        if(this.snow.position.y > height){

            Matter.Body.setPosition(this.snow,{x:random(0,400),y:random(-50,0)});

        }

    }

    display(){

      var pos = this.snow.position;
      ellipseMode(CENTER);
      fill("224, 224, 224");
      ellipse(pos.x, pos.y, this.radius, this.radius);

    }
    
  }
  