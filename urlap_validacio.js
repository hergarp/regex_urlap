window.addEventListener("load", init);
function ID(nev) {
    return document.getElementById(nev);
}
function $(nev) {
    return document.querySelectorAll(nev);
}
function init() {
    ID("kuld").addEventListener("click", validate);
}
function validate() {
    var hiba = "";
    var urlapAdatok = "";
    var nevInput = ID("nev").value;
    var emailInput = ID("email").value;
    console.log(nevInput);
    console.log(emailInput);


    if (nevInput.lenght < 3) {
        hiba += "A név legyen 3 karakternél hosszabb!";
    }
    var szuro = /[A-Z]+[a-z]{2,}/;
    if (!szuro.test(nevInput)) {
        hiba += "A név Nagybetűvel kezdődjön és legalább 3 karakter legyen!";
        ID("nev").style.border = "1px solid red";
    } else {
        urlapAdatok += "Név:" + nevInput + "<br>";
        ID("nev").style.border = "none";
    }
    var szuro2 = /^[0-9a-z\.-]+@([0-9a-z-]+\.)+[a-z]{2,4}$/;
//    var szuro2 = /^[n-p]/;
    if (!szuro2.test(emailInput)) {
        hiba += "Érvényes e-mail címet adjon meg!";
        ID("email").style.border = "1px solid red";
    } else {
        urlapAdatok += "E-mail:" + emailInput + "<br>";
        ID("email").style.border = "none";
    }


    $("aside section:nth-child(1) p")[0].innerHTML = hiba;
    $("aside section:nth-child(2) p")[0].innerHTML = urlapAdatok;
    console.log(hiba);
}
