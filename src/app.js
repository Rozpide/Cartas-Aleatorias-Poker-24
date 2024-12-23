/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
// espera a que la pagina este cargada
window.onload = function() {
  function generarCarta() {
    //defino las dos variables para las opciones de numero y palo
    const numeroAleatorioParaCarta = [
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
    const numeroAleatorioParaPalo = [
      { palo: "♠", clase: "spade" },
      { palo: "♣", clase: "club" },
      { palo: "♥", clase: "heart" },
      { palo: "♦", clase: "diamond" }
    ];
    // funcion para generar un numero aleatori o dentro de un rango pendiente de asignar, que sera variable.length
    function randomCartas(length) {
      return Math.floor(Math.random() * length);
    }
    //constantes que generan un numero y palo aleatorio
    const carta =
      numeroAleatorioParaCarta[randomCartas(numeroAleatorioParaCarta.length)];
    const paloInfo =
      numeroAleatorioParaPalo[randomCartas(numeroAleatorioParaPalo.length)];
    // obtenemos las referencias a los elementos del Dom
    const numeroElemento = document.querySelector(".remplazar-numero");
    const topPaloElemento = document.querySelector(".top-left");
    const bottomPaloElemento = document.querySelector(".bottom-right");
    const cardElemento = document.querySelector(".card");
    //verificamos que los elementos existen y los actualizamos con innerHTML de carta y paliInfo
    if (
      numeroElemento &&
      topPaloElemento &&
      bottomPaloElemento &&
      cardElemento
    ) {
      numeroElemento.innerHTML = carta;
      topPaloElemento.innerHTML = paloInfo.palo;
      bottomPaloElemento.innerHTML = paloInfo.palo;

      // y  eliminamos clase de palo anterior
      cardElemento.classList.remove("spade", "club", "heart", "diamond");

      // a continuacion añadimos la nueva clase de palo
      cardElemento.classList.add(paloInfo.clase);
    }
  }
  // agrgo un evento listener al boton con id 'boton' con unclick  y genera una carta nueva
  document.querySelector("#boton").addEventListener("click", generarCarta);

  // Genera una carta nueva tambien al cargar la página
  generarCarta();
};
