$(document).ready(function() {
  var arena = new Arena();
  var goalie = {posX: 35, posY: Math.floor((Math.random()*20)+10)};
  var ball = new Ball({goalie: goalie});
  var player = new Player({ball: ball});

  ['up','down','right','left','space'].forEach(function(dir){
    Mousetrap.bind(dir, function(){
      player.setDir(dir);
    })
  })
})

// Driver Test Code:
// console.log("The ball position is: " + ball.posX + ", " + ball.posY);
// player.move('up');
// player.move('right');
// player.move('left');
// player.move('left');
// player.move('down');
// player.move('right');
// player.move('right');
// player.move('right');
// console.log("The ball position is: " + ball.posX + ", " + ball.posY);
// console.log("The goalie position is: " + goalie.posX + ", " + goalie.posY);
// ball.shoot();
// player.move('up');
// player.move('right');
// player.move('left');
// player.move('left');
// player.move('down');
// player.move('right');
// player.move('left');
// player.move('up');
// player.move('up');
// console.log("The ball position is: " + ball.posX + ", " + ball.posY);
// console.log("The goalie position is: " + goalie.posX + ", " + goalie.posY);
// ball.shoot();
// player.move('left');
// player.move('left');
// player.move('down');
// player.move('up');
// console.log("The ball position is: " + ball.posX + ", " + ball.posY);
// console.log("The goalie position is: " + goalie.posX + ", " + goalie.posY);
// ball.shoot();
// console.log("The ball position is: " + ball.posX + ", " + ball.posY);
// console.log("The goalie position is: " + goalie.posX + ", " + goalie.posY);
// ball.shoot();
