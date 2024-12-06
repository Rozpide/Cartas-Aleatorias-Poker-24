/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let numeroAleatorioParaCarta = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "J",
    "Q",
    "K"
  ];
  document.querySelector(
    ".remplazar-numero"
  ).innerHTML = numeroAleatorioParaCarta;
  let numeroAleatorioParaPalo = Math.floor(Math.random() * 4) + 1;
  console.log(numeroAleatorioParaPalo);
  numeroAleatorioParaCarta = Math.floor(Math.random() * 12) + 1;
  console.log(numeroAleatorioParaCarta);
  //write your code here
  console.log("Hello Rigo from the console!");
};
