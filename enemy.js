function Enemy(x,y) {
  this.x = round(random(width));
  this.y = -round(random(height));
  this.r = 10

     this.toDelete = false;
  
  this.show = function(){
   
    fill(255,0,0)
    circle(this.x,this.y,this.r*2, this.r*2);
  }
  
   this.kill = function() {
     this.x = round(random(width));
     this.y = -round(random(height))-(height-this.y);
  }
  
  this.move = function(){
   this.y = this.y+2;
   if(this.y > 1.1*height) {
      this.x = round(random(width));
      this.y = -round(random(height));
  } 
  }
  
this.kills = function(downpl) {
    var d = dist(this.x, this.y, downpl.x, height);

    if (d <= this.r + downpl.r) {
  return true;
    }else{
      return false;
    }
      
  
  
  }
  
}
