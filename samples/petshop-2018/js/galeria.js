function trocaImagem () {
    var imagemNova = this.src; // aqui esta o cachorro pequeno!
    var nomeCao = this.alt;
    
    // peguem o elemento DOGAO e troquem o SRC dele!
    document.querySelectorAll('#dogao')[0].src = imagemNova;

    // pega o atributo ALT da imagem e usa como nome
    document.querySelectorAll('h2')[0].innerHTML = nomeCao;
}

var minis = document.querySelectorAll('.miniaturas img');
for (var cont = 0; cont < minis.length; cont++) {
    minis[cont].onclick = trocaImagem;
}
