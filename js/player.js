function Player(options) {
  this.posX = 345;
  this.posY = 270;
  this.scored = false;
  this.$ele = $('<div class="player"></div>').appendTo($('#arena'));
  this.ball = options.ball;
  this.setPos();
}

Player.prototype.setDir = function(dir) {
  this.dir = dir;
  this.move(dir)
}

Player.prototype.setPos = function() {
  this.$ele.css('left', this.posX + 'px')
  this.$ele.css('top', this.posY + 'px')
}

Player.prototype.move = function(dir) {
  if(dir === 'right'){
    this.posX +=10;
  } else if(dir === 'left'){
    this.posX -=10;
  } else if(dir === 'up'){
     this.posY -= 10;
  } else if(dir === 'down'){
     this.posY +=10;
  }
  if (dir != 'space'){
    this.setPos();
    this.ball.posY = (this.posY + 25);
    this.ball.posX = (this.posX + 48);
    this.ball.setPos();
  } else {
    this.ball.shoot();
    this.flashGrow();
  }
};

Player.prototype.flashGrow = function() {
  this.$ele.css('background-image', 'url("img/player-large.gif")');
  this.$ele.css({'width': '65px', 'height': '65px'});
  this.$ele.hide().fadeIn("fast");
  var that = this
  setTimeout(function(){
    that.$ele.css('background-image', 'url("img/player.gif")');
    that.$ele.css({'width': '48px', 'height': '48px'});
   }, 100);
}
