const historia = document.getElementById("historia");

historia.onmouseover = function () {
    historia.classList.add("destacat");
};

historia.onmouseout = function () {
    historia.classList.remove("destacat");
};
