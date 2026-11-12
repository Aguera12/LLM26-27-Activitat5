const visor = document.getElementById("visor");

document.querySelectorAll(".personajes img").forEach(function (imatge) {
    imatge.addEventListener("click", function () {
        const copia = imatge.cloneNode();
        const nom = document.createElement("p");
        nom.textContent = imatge.alt;
        visor.replaceChildren(copia, nom);
    });
});
