function Ball() {
  this.posX: 5,
  this.posY: 0
}

Ball.prototype.shoot = function() {
    shot_distance = (40 - ball.posX);
    ball.posX +=  shot_distance;
    console.log("You are shooting " + shot_distance + " to the right!")
    if (ball.posY < 10 || ball.posY > 30){
      console.log("You missed, but you get your ball back. Keep playing!")
      ball.posX = (player.posX + 5)
      }
    else if (ball.posY === goalie.posY){
      console.log("The goalie saved your shot, but you get your ball back. Keep playing!")
      ball.posX = (player.posX + 5)
      }
    else {
      console.log("GOAL!!!")
      player.scored = true
     }
     goalie.posY = Math.floor((Math.random()*20)+10)
     }

};