
var player = document.getElementById('player');
var horizontalLimit = window.innerWidth;
var verticalLimit = window.innerHeight;
var x = 0;
var y = 0;

function move (event) {
  console.log(event.keyCode);

  // 37,38,39,40
  var key = event.keyCode;
  
  if (key >= 37 && key <= 40) {
    player.className = '';

    switch(key) {
      case 38: // para cima
        if (y > 0) {
          y -= 10;
          player.style.top = y + 'px';  
          player.classList.add('para-cima');
        }
      break;
      case 40: // para baixo
        console.log('Y', y, 'V ', verticalLimit)
        if (y < verticalLimit) {
          y += 10;
          player.style.top = y + 'px';  
          player.classList.add('para-baixo');
        }
      break;
      case 37: // para direita
        if (x > 10) {
          x -= 10;
          player.style.left = x + 'px';
          player.classList.add('para-direita');
        }
      break;
      case 39: // para esquerda
        if (x < horizontalLimit) {
          x += 10;
          player.style.left = x + 'px';
          console.log(x)
        }
      break;
    }
  }
}


var scenario = document.querySelectorAll('body')[0];

scenario.onkeydown = move;
scenario.onkeyup = move;
