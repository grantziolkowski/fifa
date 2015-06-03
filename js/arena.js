function Arena() {
  this.$ele = $('<div id="arena"></div>').appendTo($('body'))
  this.leftBound = 50;
  this.topBound = 35;
  this.bottomBound = 550;
  this.rightBound = 750;
}

Arena.prototype.isInBounds = function(ball){
  return !(ball.posX < this.leftBound || ball.posX > this.rightBound ||
    ball.posY < this.topBound || ball.posY > this.bottomBound);
}
