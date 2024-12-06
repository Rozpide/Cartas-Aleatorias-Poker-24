let quien = ['Mi gato ', 'Mi madre ', 'Mi hijo ', 'Mi vecino'];
let accion = ['se comio', ' ha perdido ', 'ha roto ', 'ha escondido '];
let que = ['mis ejercicios ', 'mi telefono ', 'mi tarea ', 'mi libro '];
let cuando = ['mientras paseaba ', 'cuando estaba dormido', 'porque no le gustaba', 'cuando estaba jugando', 'porque estaba aburrido'];
function generarUnaExcusa() {
    let quienIndex = Math.floor(Math.random() * quien.length);
    let accionIndex = Math.floor(Math.random() * accion.length);
    let queIndex = Math.floor(Math.random() * que.length);
    let cuandoIndex = Math.floor(Math.random() * cuando.length);

    let excusa = quien[quienIndex] + accion[accionIndex] + que[queIndex] + cuando[cuandoIndex];
    document.getElementById('excusa').innerHTML = excusa;}