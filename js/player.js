function Player(options) {
  this.posX = 330;
  this.posY = 280;
  this.scored = false;
  this.$ele = $('<div class="player"></div>').appendTo($('#arena'));
  this.ball = options.ball;
  this.setPos();
}

Player.prototype.setDir = function(dir) {
  this.dir = dir;
}

Player.prototype.setPos = function() {
  this.$ele.css('left', this.posX + 'px')
  this.$ele.css('top', this.posY + 'px')
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
