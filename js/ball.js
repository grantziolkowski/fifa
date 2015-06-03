function Ball(options) {
  this.posX = 393;
  this.posY = 295;
  this.$ele = $('<div id="ball"></div>').appendTo($('#arena'));
  this.$ele.addClass('move')
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
      that.punt();
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

Ball.prototype.punt = function() {
  this.$ele.removeClass('move')
  this.$ele.css({ fontSize: 0 }).animate({
    fontSize: 45
    },{
    duration: 1200,
    easing: "swing",
    step: function(t, fx){
        this.posX -= this.posX / 140
        this.posY -= Math.sin(t/8) * 7;
        this.setPos();
    }.bind(this)
});

}