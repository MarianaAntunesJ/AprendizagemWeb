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


