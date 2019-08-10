function irPara() {
    var valor = document.getElementsByTagName('select')[0].value;

    if (valor == 1) {
        location.href="index.html";
    }

    if (valor == 2) {
        location.href="empresa.html";
    }
    
    if (valor == 3) {
        location.href="contato.html";
    }
}

