CENTER_X = 393,
CENTER_Y = 295
function Ball(options) {
  this.posX = CENTER_X;
  this.posY = CENTER_Y;
  this.$ele = $('<div id="ball"></div>').appendTo($('#arena'));
  this.$ele.addClass('move')
  this.setPos();
  this.goalie = options.goalie;
  this.arena = options.arena;
  var saved = false;
}

Ball.prototype.setPos = function() {
  this.$ele.css('left', this.posX + 'px')
  this.$ele.css('top', this.posY + 'px')
}

Ball.prototype.move = function(x, y) {
  this.$ele.addClass('move')
  this.posX = x + 48;
  this.posY = y + 25;
  this.setPos();
}

Ball.prototype.shoot = function() {
    var checkGoalieTop = this.goalie.posY + 10
    var checkGoalieBottom = this.goalie.posY + 30
    var shotDistance = 730 - this.posX;
    this.posX +=  shotDistance;
    console.log("You are shooting " + shotDistance + " to the right!")
    this.setPos();
    var that = this;
    if (this.posY < 265 || this.posY > 325) {
      console.log("You missed, but you get your ball back. Keep playing!")
      setTimeout(function(){
        that.punt();
      }, 1000);
    } else if (this.posY > checkGoalieTop &&
      this.posY < checkGoalieBottom) {
      console.log("The goalie saved your shot, but you get your ball back. Keep playing!")
      this.goalie.slowGrow();
      setTimeout(function(){
        that.punt();
      }, 1000);
    } else {
      console.log("GOAL!!!")
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
            that.posX = CENTER_X;
            that.posY = CENTER_Y;
            that.setPos();
          }
        })


     }
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

Ball.prototype.isInBounds = function() {
  console.log(this.arena.isInBounds(this))
  return this.arena.isInBounds(this);
}