/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generarCarta() {
    let numeroAleatorioParaCarta = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let numeroAleatorioParaPalo = [
      { palo: "♠", clase: "spade" },
      { palo: "♣", clase: "club" },
      { palo: "♥", clase: "heart" },
      { palo: "♦", clase: "diamond" }
    ];

    function randomCartas(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    let carta =
      numeroAleatorioParaCarta[
        randomCartas(0, numeroAleatorioParaCarta.length)
      ];
    let paloInfo =
      numeroAleatorioParaPalo[randomCartas(0, numeroAleatorioParaPalo.length)];

    let numeroElemento = document.querySelector(".remplazar-numero");
    let topPaloElemento = document.querySelector(".top-left");
    let bottomPaloElemento = document.querySelector(".bottom-right");
    let cardElemento = document.querySelector(".card");

    if (
      numeroElemento &&
      topPaloElemento &&
      bottomPaloElemento &&
      cardElemento
    ) {
      numeroElemento.innerHTML = carta;
      topPaloElemento.innerHTML = paloInfo.palo;
      bottomPaloElemento.innerHTML = paloInfo.palo;

      // Remover clases de palo anteriores
      cardElemento.classList.remove("spade", "club", "heart", "diamond");

      // Agregar la nueva clase de palo
      cardElemento.classList.add(paloInfo.clase);
    } else {
      console.error("Uno o más elementos no fueron encontrados en el DOM.");
    }
  }

  document.querySelector("#boton").addEventListener("click", generarCarta);

  // Generar una carta al cargar la página
  generarCarta();
};
