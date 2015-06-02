function Ball() {
  this.posX = 5;
  this.posY = 0;
  this.$ele = $('<div id="ball"></div>').appendTo($('#arena'));
}

Ball.prototype.shoot = function() {
    this.shot_distance = (40 - ball.posX);
    this.posX +=  this.shot_distance;
    console.log("You are shooting " + shot_distance + " to the right!")
    if (this.posY < 10 || this.posY > 30) {
      console.log("You missed, but you get your this back. Keep playing!")
      this.posX = (player.posX + 5)
    } else if (this.posY === goalie.posY) {
      console.log("The goalie saved your shot, but you get your this back. Keep playing!")
      this.posX = (player.posX + 5)
    } else {
      console.log("GOAL!!!")
      player.scored = true
    }
    goalie.posY = Math.floor((Math.random()*20)+10);

};