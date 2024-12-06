/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generateExcuse() {
    let who = [
      "El perrito ",
      "Mi abuela ",
      "El cartero ",
      "El gato ",
      "El conejo enano "
    ];
    let action = [
      "ha perdido ",
      "no encuentra ",
      "se le dio por romper ",
      "me ayudó a terminar "
    ];
    let what = ["mi trabajo ", "mi teléfono", "el coche ", "tu trabajo "];
    let when = [
      "antes de clase",
      "mientras dormías",
      "al hacer ejercicio",
      "durante la comida",
      "al volverse loco"
    ];
    var whoIndex = Math.floor(Math.random() * who.length);
    var actionIndex = Math.floor(Math.random() * action.length);
    var whatIndex = Math.floor(Math.random() * what.length);
    var whenIndex = Math.floor(Math.random() * when.length);

    return `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`;
  }
  const excuseElement = document.getElementById("excuse");
  if (excuseElement) {
    excuseElement.innerHTML = generateExcuse();
  } else {
    console.error('No se encontró el elemento con id "excuse"');
  }
  console.log(generateExcuse());
  //write your code here
};
