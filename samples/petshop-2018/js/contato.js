function validaForm () {
    var nome = document.querySelectorAll('#nome')[0];
    var email = document.querySelectorAll('#email')[0];
    var msg = document.querySelectorAll('#msg')[0];
    var alerta = document.querySelectorAll('#alerta')[0];
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
    if (nome.value == '') {        
        alerta.innerHTML = '&raquo; digite o nome...';
        alerta.style.display = 'block';
        nome.focus();
        return false;
    }

    if (email.value == '') {        
        alerta.innerHTML = '&raquo; digite o e-mail...';
        alerta.style.display = 'block';
        email.focus();
        return false;
    }    

    if (!regex.test(email.value)) {
        alerta.innerHTML = '&raquo; e-mail inválido...';
        alerta.style.display = 'block';
        email.focus();
        return false;
    }

    if (msg.value == '') {        
        alerta.innerHTML = '&raquo; digite a mensagem...';
        alerta.style.display = 'block';
        msg.focus();
        return false;
    } 
    return true;
}

// busca o elemento do form pelo ID e aplica o evento de submit
document.querySelectorAll('#form-contato')[0].onsubmit = validaForm;
