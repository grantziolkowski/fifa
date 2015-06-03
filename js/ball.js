function Ball(options) {
  this.posX = 393;
  this.posY = 295;
  this.$ele = $('<div id="ball"></div>').appendTo($('#arena'));
  this.setPos();
  this.goalie = options.goalie;
  var saved = false;
}

Ball.prototype.setPos = function() {
  this.$ele.css('left', this.posX + 'px')
  this.$ele.css('top', this.posY + 'px')
}

Ball.prototype.move = function(x, y) {
  this.posX = x + 48;
  this.posY = y + 25;
  this.setPos();
}

Ball.prototype.shoot = function() {
    this.shotDistance = 730 - this.posX;
    this.posX +=  this.shotDistance;
    console.log("You are shooting " + this.shotDistance + " to the right!")
    this.setPos();
    if (this.posY < 250 || this.posY > 290) {
      console.log("You missed, but you get your ball back. Keep playing!")
      var that = this;
      setTimeout(function(){
          that.posX -= that.shotDistance;
          that.setPos();
      }, 1000);
    } else if (this.posY === this.goalie.posY) {
      console.log("The goalie saved your shot, but you get your ball back. Keep playing!")
      this.posX -= 75
    } else {
      console.log("GOAL!!!")
      saved = false;
    }

    this.goalie.posY = Math.floor((Math.random()*20)+10);

};