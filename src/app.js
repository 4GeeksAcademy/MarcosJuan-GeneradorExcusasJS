window.onload = function() {
  let name = ["Marcos", "Juan", "Laura", "María"];
  let action = ["comió", "estudió", "durmió", "apareció"];
  let place = ["en la playa", "en la calle", "en el monte", "en la carretera"];
  let when = ["ayer", "hoy", "la semana pasada", "el lunes"];
  let indexName = Math.floor(Math.random() * name.length);
  let indexAction = Math.floor(Math.random() * action.length);
  let indexPlace = Math.floor(Math.random() * place.length);
  let indexWhen = Math.floor(Math.random() * when.length);
  document.querySelector("#excuse").innerHTML = name[indexName] + " " + action[indexAction] + " " + place[indexPlace] + " " + when[indexWhen];
};
