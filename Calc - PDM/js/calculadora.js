function insert(num) {
    document.corpo.text.value = document.corpo.text.value + num;
}

function igual() {
    resultado = document.corpo.text.value;
    if (resultado) {
        document.corpo.text.value = eval(resultado);
    }
}

function ce() {
    document.corpo.text.value = "";
}

function back() {
    var resultado = document.corpo.text.value;
    document.corpo.text.value = resultado.substring(0, resultado.length - 1);
}