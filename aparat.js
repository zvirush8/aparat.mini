function toggleMenu() {
    var menu = document.getElementById('dropdownMenu');
    menu.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    var menu = document.getElementById('dropdownMenu');
    var menuIcon = document.querySelector('.menu-icon');
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove('active');
    }
});




const videoUploadBtn = document.querySelector('.video-upload-btn');
const videoUploadInput = document.querySelector('#video-upload');

videoUploadBtn.addEventListener('click', () => {
  videoUploadInput.click();
});

videoUploadInput.addEventListener('change', () => {
  const file = videoUploadInput.files[0];
  console.log(file);
});


const loginBtn = document.querySelector('#login-btn');
const registerBtn = document.querySelector('#register-btn');

loginBtn.addEventListener('click', () => {
  console.log('Login button clicked');
});




const modeToggleBtn = document.querySelector('#mode-toggle-btn');
const dayIcon = document.querySelector('#day-icon');
const nightIcon = document.querySelector('#night-icon');
const body = document.querySelector('body');

let isNightMode = false;

modeToggleBtn.addEventListener('click', () => {
  isNightMode =!isNightMode;
  toggleMode();
});
function toggleMode() {
  if (isNightMode) {
    body.classList.add('night-mode');
    body.classList.remove('day-mode');
    dayIcon.style.display = 'none';
    nightIcon.style.display = 'block';
  } else {
    body.classList.add('day-mode');
    body.classList.remove('night-mode');
    dayIcon.style.display = 'block';
    nightIcon.style.display = 'none';
  }
}





(document).ready(function (){
  ('.search-icon').click(function (){
  ('.searchbox').slideToggle();})
  });