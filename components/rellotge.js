const SEGMENTS = {
    a: "2,1 3,0 7,0 8,1 7,2 3,2",
    b: "8,1.6 9,2.6 9,7.4 8,8.4 7,7.4 7,2.6",
    c: "8,9.6 9,10.6 9,15.4 8,16.4 7,15.4 7,10.6",
    d: "2,17 3,16 7,16 8,17 7,18 3,18",
    e: "2,9.6 3,10.6 3,15.4 2,16.4 1,15.4 1,10.6",
    f: "2,1.6 3,2.6 3,7.4 2,8.4 1,7.4 1,2.6",
    g: "2,9 3,8 7,8 8,9 7,10 3,10"
};
const DIGITS = ["abcdef", "bc", "abdeg", "abcdg", "bcfg", "acdfg", "acdefg", "abc", "abcdefg", "abcdfg"];
const SVG_NS = "http://www.w3.org/2000/svg";

function crearElementSvg(nom, atributs) {
    const element = document.createElementNS(SVG_NS, nom);
    for (const clau in atributs) {
        element.setAttribute(clau, atributs[clau]);
    }
    return element;
}

function crearRellotge() {
    const rellotge = document.querySelector(".rellotge");

    const svg = crearElementSvg("svg", { viewBox: "0 0 52 18", role: "img", "aria-label": "Temps a la pàgina" });
    [0, 12, 30, 42].forEach(function (x) {
        const digit = crearElementSvg("g", { class: "digit", transform: "translate(" + x + ",0)" });
        for (const nom in SEGMENTS) {
            digit.appendChild(crearElementSvg("polygon", { class: "segment", "data-seg": nom, points: SEGMENTS[nom] }));
        }
        svg.appendChild(digit);
    });
    svg.appendChild(crearElementSvg("rect", { class: "punt", x: 25, y: 5, width: 2, height: 2 }));
    svg.appendChild(crearElementSvg("rect", { class: "punt", x: 25, y: 11, width: 2, height: 2 }));
    rellotge.appendChild(svg);

}

const inici = performance.now();

function actualitzarRellotge() {
    const segonsTotals = Math.floor((performance.now() - inici) / 1000);
    const minuts = Math.floor(segonsTotals / 60) % 100;
    const segons = segonsTotals % 60;
    const temps = String(minuts).padStart(2, "0") + String(segons).padStart(2, "0");

    document.querySelectorAll(".rellotge .digit").forEach(function (digit, i) {
        const actius = DIGITS[temps[i]];
        digit.querySelectorAll(".segment").forEach(function (segment) {
            segment.classList.toggle("on", actius.includes(segment.dataset.seg));
        });
    });
}

crearRellotge();
actualitzarRellotge();
setInterval(actualitzarRellotge, 1000);
