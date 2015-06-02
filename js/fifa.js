var Player = function() {
  posX: 0,
  posY: 0,
  scored: false,
  move: function(direction) {
   if(direction === 'right'){
    player.posX +=10;
   }
   else if(direction === 'left'){
    player.posX -=10;
  }
   else if(direction === 'up'){
    player.posY += 10;
   }
   else if(direction === 'down'){
     player.posY -=10;
   }
  console.log("Your position: " + player.posX + ", " + player.posY)
  ball.posX = (player.posX + 5);
  ball.posY = (player.posY);

  }

};

var Ball = function() {
  posX: 5,
  posY: 0,
  shoot: function() {
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



var shot_distance = (40 - ball.posX);

var goalie = {
  posX: 35,
  posY: Math.floor((Math.random()*20)+10)
};

// Driver Test Code:
console.log("The ball position is: " + ball.posX + ", " + ball.posY);
player.move('up');
player.move('right');
player.move('left');
player.move('left');
player.move('down');
player.move('right');
player.move('right');
player.move('right');
console.log("The ball position is: " + ball.posX + ", " + ball.posY);
console.log("The goalie position is: " + goalie.posX + ", " + goalie.posY);
ball.shoot();
player.move('up');
player.move('right');
player.move('left');
player.move('left');
player.move('down');
player.move('right');
player.move('left');
player.move('up');
player.move('up');
console.log("The ball position is: " + ball.posX + ", " + ball.posY);
console.log("The goalie position is: " + goalie.posX + ", " + goalie.posY);
ball.shoot();
player.move('left');
player.move('left');
player.move('down');
player.move('up');
console.log("The ball position is: " + ball.posX + ", " + ball.posY);
console.log("The goalie position is: " + goalie.posX + ", " + goalie.posY);
ball.shoot();
console.log("The ball position is: " + ball.posX + ", " + ball.posY);
console.log("The goalie position is: " + goalie.posX + ", " + goalie.posY);
ball.shoot();
