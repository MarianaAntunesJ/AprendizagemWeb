function totalEstimado() {
    var numeroNoites = parseInt(document.getElementById('quarto').value);
    var numeroPessoas = parseInt(document.getElementById('convidado').value);
    var total = 0;
    if (numeroPessoas == 1)
        total = numeroNoites * 99;
    else
        total = numeroNoites * 99 + numeroPessoas * 10;
    document.getElementById('total').value = total;
}

function verificaEmail() {
    var email = document.getElementById('email').value;
    var repitaEmail = document.getElementById('repitaEmail').value;

    if (email != repitaEmail) {
        alert("Emails não coincidem");
        return false;
    }
    else
        return true;
}
