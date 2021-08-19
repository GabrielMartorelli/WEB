const ola = document.getElementById('ola');
const atelogo = document.getElementById('atelogo');

ola.addEventListener('click', function() {
    document.getElementById("paragrafo").innerHTML = "Olá, Gabriel Martorelli";
})
atelogo.addEventListener('click', function() {
    document.getElementById("paragrafo").innerHTML = "Até Logo, Gabriel Martorelli";
})