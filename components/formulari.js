const MIN_LONGITUD = 8;
const formulari = document.getElementById("join-form");

formulari.addEventListener("submit", function (event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const repeticio = document.getElementById("cpassword").value;
    let error = "";

    if (password !== repeticio) {
        error = "Les dues contrasenyes no coincideixen.";
    } else if (password.length < MIN_LONGITUD) {
        error = "La contrasenya ha de tenir com a mínim " + MIN_LONGITUD + " caràcters.";
    }

    if (error) {
        alert(error);
        esborrarContrasenyes();
    } else {
        bloquejarFormulari();
        alert("T'has unit a un dels dos costats de la Força\nS'ha canviat correctament la contrasenya");
    }
});

function esborrarContrasenyes() {
    document.getElementById("password").value = "";
    document.getElementById("cpassword").value = "";
}

function bloquejarFormulari() {
    formulari.querySelector("fieldset").disabled = true;
    formulari.querySelectorAll("input[type=submit], input[type=reset]").forEach(function (boto) {
        boto.hidden = true;
    });
}
