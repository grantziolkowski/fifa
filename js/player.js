function Player() {
  this.posX: 0,
  this.posY: 0,
  this.scored: false
}

Player.prototype.move = function(direction) {
  if(direction === 'right'){
    player.posX +=10;
  } else if(direction === 'left'){
    player.posX -=10;
  } else if(direction === 'up'){
     player.posY += 10;
  } else if(direction === 'down'){
     player.posY -=10;
  }
  console.log("Your position: " + player.posX + ", " + player.posY)
  ball.posX = (player.posX + 5);
  ball.posY = (player.posY);
  }

};
