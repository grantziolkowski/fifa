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
