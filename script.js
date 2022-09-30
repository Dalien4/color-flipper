const couleurs = [
  "#ff0000",
  "rgb(0, 0, 128)",
  "#808000",
  "#ffff00",
  "purple",
  "rgb(255, 0, 255)",
  "orange",
  "#800000",
  "rgb(128, 128, 128)",
  "crimson",
  "gold",
  "rgb(192, 192, 192)",
];

const caracteres = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const bouton = document.querySelector("#bouton");
const texte = document.querySelector("#texte");
const contenu = document.querySelector("#contenu");
const simple = document.querySelector("#simple");
const hex = document.querySelector("#hex");
let mode = "simple";
let couleur;

function getRandom(tableau) {
  return tableau[Math.round(Math.random() * (couleurs.length - 1))];
}

function createCouleur() {
  resultat = "#";
  for (let i = 0; i < 6; i++) {
    resultat += getRandom(caracteres);
  }
  return resultat;
}

simple.addEventListener("click", function(event){
  mode = "simple";
  event.preventDefault();
});

hex.addEventListener("click", function(event){
  mode = "hex";
  event.preventDefault();
});

bouton.addEventListener("click", function () {
  mode === "simple" ? couleur = getRandom(couleurs) : couleur = createCouleur();
  texte.textContent = couleur;
  contenu.style.backgroundColor = couleur;
  this.style.backgroundColor = couleur;
});
