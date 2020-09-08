class ground {
    constructor(x, y, width,height) {
      var options = {
          isStatic:true,
          restitution:0.3,
          friction:0.5,
          density:1,
          
        
      }
      this.x=x;
      this.y=y;
      this.width=width;
      this.height=height;
      this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
      this.image =loadImage("grass.png");
      
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      
      imageMode(CENTER);
      fill("brown");
      
      image (this.image,0,0,this.width,this.height);
      pop();
    }
  };
      
