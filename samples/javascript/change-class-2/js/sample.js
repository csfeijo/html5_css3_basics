
var botao1 = document.querySelectorAll('#botao1')[0];
botao1.onclick = trocaClasse1;

function trocaClasse1 () {
  var div = document.querySelectorAll('#minha-div')[0];
  div.classList.add('modelo-1');
}

var botao2 = document.querySelectorAll('#botao2')[0];
botao2.onclick = trocaClasse2;

function trocaClasse2 () {
  var div = document.querySelectorAll('#minha-div')[0];
  div.classList.add('modelo-2');
}


/*
botao1.addEventListener('click', function() {
  alert(9)
});
*/
