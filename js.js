let activeMe = document.querySelector('.activeMe');
let container = document.querySelector('.container');

activeMe.onclick = function() {
  container.classList.toggle('active');
}