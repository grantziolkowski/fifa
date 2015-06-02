function Player() {
  this.posX = 0;
  this.posY = 0;
  this.scored = false;
  this.$ele = $('<div class="player"></div>').appendTo($('body'));
}

Player.prototype.move = function(direction) {
  if(direction === 'right'){
    this.posX +=10;
  } else if(direction === 'left'){
    this.posX -=10;
  } else if(direction === 'up'){
     this.posY += 10;
  } else if(direction === 'down'){
     this.posY -=10;
  }
  console.log("Your position: " + this.posX + ", " + this.posY)
  ball.posX = (this.posX + 5);
  ball.posY = (this.posY);

};
