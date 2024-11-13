window.onload = function() {
  let nombre = ["Marcos", "Juan", "Laura", "María"];
  let acción = ["comió", "estudió", "durmió", "apareció"];
  let lugar = ["en la playa", "en la calle", "en el monte", "en la carretera"];
  let cuándo = ["ayer", "hoy", "la semana pasada", "el lunes"];
  let indiceNombre = Math.floor(Math.random() * nombre.length);
  let indiceAcción = Math.floor(Math.random() * acción.length);
  let indiceLugar = Math.floor(Math.random() * lugar.length);
  let indiceCuándo = Math.floor(Math.random() * cuándo.length);
  document.querySelector("#excuse").innerHTML =
  nombre[indiceNombre] + " " + acción[indiceAcción] + " " + lugar[indiceLugar] + " " + cuándo[indiceCuándo];
};
