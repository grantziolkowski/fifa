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
