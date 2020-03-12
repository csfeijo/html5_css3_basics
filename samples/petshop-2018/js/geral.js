function mostraLingua () {
  this.src = 'img/logo-pet-hover.png';
}

function escondeLingua () {
  this.src = 'img/logo-pet.png';
}

// devido a restricoes do navegador o usuario deve ter clicado AO menos UMA vez na pagina para tocar o mp3
function latir () {
  var audio = new Audio('mp3/latido.mp3');
  audio.play();
}

// document.getElementById('logo').addEventListener('mouseover', mostraLingua);
// document.getElementById('logo').addEventListener('mouseover', latir);

// document.getElementById('logo').onmouseout = escondeLingua;
