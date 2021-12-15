let clickMe = document.querySelector('.clickMe');
let container = document.querySelector('.container');

clickMe.onclick = function() {
  container.classList.toggle('active');
}