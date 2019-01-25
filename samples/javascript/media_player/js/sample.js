// faz o disco se mexer quando executa o play
function troca_miolo(tipo) {
  var m = document.querySelectorAll('.miolo')[0];

  if (tipo == 'play') {
    m.classList.add('play');
  } else {
    m.classList.remove('play');
  }
}

function ativa_botao (tipo) {
  var play = document.querySelectorAll('#play')[0];
  var pause = document.querySelectorAll('#pause')[0];

  if (tipo == 'play') {
    pause.classList.remove('active');
    play.classList.add('active');
  } else {
    play.classList.remove('active');
    pause.classList.add('active');
  }
}

var player = document.querySelectorAll('#player')[0];

function play() {
  troca_miolo('play');
  ativa_botao('play');
  player.play();
}

function pause() {
  troca_miolo('pause');
  ativa_botao('pause');
  player.pause();
}

function volume() {
  var v = document.querySelectorAll('#volume')[0].value;
  player.volume = v;
}

function atualiza_tempo() {
  player.currentTime = btn_track.value;
}

// atribui os eventos aos botoes
var btn_play = document.querySelectorAll('#play')[0];
btn_play.onclick = play;

var btn_pause = document.querySelectorAll('#pause')[0];
btn_pause.onclick = pause;

var btn_volume = document.querySelectorAll('#volume')[0];
btn_volume.onchange = volume;

var btn_track = document.querySelectorAll('#track')[0];
btn_track.max = player.duration;
btn_track.onchange = atualiza_tempo;

// atualiza o range da track a cada um segundo, pegando o valor atual do tempo da musica
window.setInterval(function(){
  var time = player.currentTime;

  btn_track.value = time;
},1000);  
