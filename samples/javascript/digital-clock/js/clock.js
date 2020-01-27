function updateClock () {
    var data = new Date();
    var hora = data.getHours();
    var min  = data.getMinutes();
    var seg  = data.getSeconds();

    // corrige o problema do ZERO na frente
    hora = hora < 10 ? '0' + hora : hora;
    min  = min < 10 ? '0' + min : min;
    seg  = seg < 10 ? '0' + seg : seg;


    // recupera os elementos
    var watch = document.querySelectorAll('.watch')[0];

    watch.innerHTML = hora + ':' + min + ':' + seg;
}

window.setInterval(updateClock, 1000);