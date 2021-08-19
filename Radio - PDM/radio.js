function escrever() {
    var x = document.getElementsByName("op")
    if (x[0].checked == true) {
        document.getElementById("demo").innerHTML = x[0].value;
    } else {
        if (x[1].checked == true)
            document.getElementById("demo").innerHTML = x[1].value;
    }
}