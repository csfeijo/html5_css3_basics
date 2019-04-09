function mostraSecao (nome_secao) {
  // primeiro vamos esconder todas as seções
  var secoes = document.querySelectorAll('section');
  
  for(var cont = 0; cont < secoes.length; cont++) {
    secoes[cont].style.display = 'none';
  }

  // agora vamos buscar pela seção que deve ser mostrada e exibi-la
  var secao = document.querySelectorAll(nome_secao)[0];
  secao.style.display = 'block';
}


// aqui estou inserindo o evento de onclick sem mexer no HTML!
// var btnContato = document.querySelectorAll('#link-contato')[0];
// btnContato.onclick = function (){
//   mostraSecao('.contato');
// }

// aqui vou fazer de forma ainda mais generica
var btnContato = document.querySelectorAll('#link-contato')[0];
btnContato.onclick = function (elem) {
  //console.log(elem);
  //console.log(this)
  mostraSecao(this.getAttribute('data-secao'))
}
