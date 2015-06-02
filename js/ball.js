function Ball(options) {
  this.posX = 393;
  this.posY = 295;
  this.$ele = $('<div id="ball"></div>').appendTo($('#arena'));
  this.setPos();
  this.goalie = options.goalie;
  this.shotDistance = 40 - this.posX;
}

Ball.prototype.setPos = function() {
  this.$ele.css('left', this.posX + 'px')
  this.$ele.css('top', this.posY + 'px')
}

Ball.prototype.shoot = function() {
    this.shotDistance = 800 - this.posX;
    this.posX +=  this.shotDistance;
    console.log("You are shooting " + this.shotDistance + " to the right!")
    if (this.posY < 10 || this.posY > 30) {
      console.log("You missed, but you get your this back. Keep playing!")
      this.posX -= 75
    } else if (this.posY === this.goalie.posY) {
      console.log("The goalie saved your shot, but you get your this back. Keep playing!")
      this.posX -= 75
    } else {
      console.log("GOAL!!!")
      player.scored = true
    }
    this.setPos();
    this.goalie.posY = Math.floor((Math.random()*20)+10);

};