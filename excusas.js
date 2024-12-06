var quien = ["El gato ", "Mi perro ", "Tu loro ", "Mi caballo "]; 
var verbo = ["se comió ", "se llevó ", "me escondió ", "ha roto "]; 
var que = ["mis ejercicios ", "mi pantalón ", "las flores ", "tu comida "]; 
var como = ["mientras dormía", "cuando paseaba", "cuando leía un libro", "al salir de casa"]; 
function generarUnaExcusa() { 
  var quienIndex = Math.floor(Math.random() * quien.length); 
  var verboIndex = Math.floor(Math.random() * verbo.length); 
  var queIndex = Math.floor(Math.random() * que.length); 
  var comoIndex = Math.floor(Math.random() * como.length); 
  let excusa = quien[quienIndex] + verbo[verboIndex] + que[queIndex] + como[comoIndex]; document.getElementById("excusa").innerHTML = excusa; }
