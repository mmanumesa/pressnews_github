function valida_pass(pass) {
    var expregular2 = /([A-Z+ a-z+ 0-9]{8})/;
    if (expregular2.test(pass)) {
        return true;
    } else {
        return false;
    }
}

function EsTelefonoMovil(tel) {
    var test = /^[6]\d{8}$/;
    var telReg = new RegExp(test);
    return telReg.test(tel);
}

function EsTelefonoFijo(tel) {
    var test = /^[89]\d{8}$/;
    var telReg = new RegExp(test);
    return telReg.test(tel);
}

function fade_in(p) {
    $("#result").append(p);
    $("#result").fadeIn();
    $("#result").fadeOut(3000);
}
