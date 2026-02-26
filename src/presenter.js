import {saludar, saludoInicial} from "./saludar.js";

const nombreInput = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

div.innerHTML = "<p>" + saludoInicial() + "</p>"

form.addEventListener("submit", (event) => { 
  event.preventDefault();

  const nombre = nombreInput.value;
  const saludoTemporal = obtenerSaludoSegunHora();
  div.innerHTML = "<p>" + saludoTemporal + ", " + nombre + "</p>";
});
