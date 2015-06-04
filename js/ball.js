function Ball(options) {
  this.posX = CENTER_X;
  this.posY = CENTER_Y;
  this.$ele = $('<div id="ball"></div>').appendTo($('#arena'));
  this.$ele.addClass('move')
  this.setPos();
  this.goalie = options.goalie;
  this.arena = options.arena;
}

Ball.prototype.setPos = function() {
  this.$ele.css('left', this.posX + 'px')
  this.$ele.css('top', this.posY + 'px')
}

Ball.prototype.move = function(player) {
  this.$ele.addClass('move')
  this.posX = player.posX + 48;
  this.posY = player.posY + 25;
  this.setPos();
}

Ball.prototype.shoot = function(player) {
  var checkGoalieTop = this.goalie.posY + 10
  var checkGoalieBottom = this.goalie.posY + 30
  var shotDistance = 730 - this.posX;
  this.posX += shotDistance;
  console.log("You are shooting " + shotDistance + " to the right!")
  this.setPos();
  if (this.posY < 265 || this.posY > 325) {
    this.miss();
  } else if (this.posY > checkGoalieTop && this.posY < checkGoalieBottom) {
    this.saved();
  } else {
    this.score(player);
  }
};

Ball.prototype.miss = function() {
  setTimeout(function(){
    this.punt();
  }.bind(this), 1000)
  console.log("You missed, but you get your ball back. Keep playing!")
}

Ball.prototype.saved = function() {
  this.goalie.slowGrow();
  setTimeout(function(){
    this.punt();
  }.bind(this), 1000);
  console.log("The goalie saved your shot, but you get your ball back. Keep playing!")
}

Ball.prototype.score = function(player) {
  this.posX += 20;
  this.setPos();
  var $goal = $('<div id="goal">GOAL!</div>').appendTo($('#arena'));
  $goal.css({ fontSize: 0 }).animate({
    fontSize: 45
    },{
    duration: 2000,
    easing: "swing",
    step: function(t, fx){
        var x =  t*10 + 5
        var y = 50 + Math.sin(t) * 7;
        $goal.css({"left": x + "px", "top": y + "px"})
    },
    complete: function() {
      var counter = 0
      function blinker(){
        $goal.toggle();
        counter +=1;
        if (counter===11){
          clearInterval(blink)
        }
      }
      var blink = setInterval(blinker, 300)
      this.arena.reset(this, player);
    }.bind(this)
  })
   console.log("GOAL!")

}

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

Ball.prototype.isInBounds = function() {
  console.log(this.arena.isInBounds(this))
  return this.arena.isInBounds(this);
}