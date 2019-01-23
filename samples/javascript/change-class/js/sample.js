function addClass(className) {
  var elem = document.querySelectorAll('#ball');
  elem[0].classList.add(className);
}

function removeClass(className) {
  var elem = document.querySelectorAll('#ball');
  elem[0].classList.remove(className)
}

function removeAllClasses() {
  var elem = document.querySelectorAll('#ball');
  elem[0].className = '';
}
