function Goalie(options) {
  this.posX = 710;
  this.posY = 270
  this.scored = false;
  this.$ele = $('<div class="goalie"></div>').appendTo($('#arena'));
  this.setPos();
}

Goalie.prototype.setPos = function() {
  this.$ele.css('left', this.posX + 'px')
  this.$ele.css('top', this.posY + 'px')
}

Goalie.prototype.moveRand = function() {
  this.posY = 270 + Math.floor((Math.random()*40)) - 20
  this.setPos();
}