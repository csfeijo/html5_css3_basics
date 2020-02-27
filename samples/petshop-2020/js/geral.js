function abreBurger () {
  var menu = document.querySelectorAll('.menu')[0];
  
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
    menu.classList.add('hide');
  } else {
    menu.classList.add('show');
    menu.classList.remove('hide');
  }
  
}

var burger = document.querySelectorAll('.burger')[0];
burger.onclick = abreBurger;

