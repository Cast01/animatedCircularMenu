let openMenu = document.querySelector('.openMenu');
let container = document.querySelector('.container');

openMenu.onclick = function() {
  container.classList.toggle('active');
}