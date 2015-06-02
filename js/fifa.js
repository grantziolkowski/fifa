$(document).ready(function() {
  var arena = new Arena();
  var ball = new Ball();
  var shot_distance = (40 - ball.posX);
  var goalie = {
  posX: 35,
  posY: Math.floor((Math.random()*20)+10)
};
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
