const texto = document.getElementsByTagName('h1')[0];
const blue = document.getElementById('blue');
const yellow = document.getElementById('yellow');
const font1 = document.getElementById('font1');
const font2 = document.getElementById('font2');
const restart = document.getElementById('restart');
const fundo1 = document.getElementById('fundo1');
const fundo2 = document.getElementById('fundo2');

blue.addEventListener('click', function() {
    texto.style.color = 'blue';
})
yellow.addEventListener('click', function() {
    texto.style.color = 'yellow';
})
font1.addEventListener('click', function() {
    texto.style.fontFamily = "cursive ";
})
font2.addEventListener('click', function() {
    texto.style.fontFamily = "fantasy ";
})
fundo1.addEventListener("mouseover", function() {
    texto.style.background = 'orange';
})
fundo2.addEventListener("mouseover", function() {
    texto.style.background = 'blueviolet';
})
fundo1.addEventListener("mouseout", function() {
    texto.style.background = 'white';
})
fundo2.addEventListener("mouseout", function() {
    texto.style.background = 'white';
})
restart.addEventListener('click', function() {
    texto.style.color = 'black';
    texto.style.fontFamily = 'serif';
})