import {saludar, saludoInicial, obtenerContactosAdmisiones} from "./saludar.js";

const nombreInput = document.querySelector("#nombre");
const edadInput = document.querySelector("#edad");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

div.innerHTML = "<p>" + saludoInicial() + "</p>"

form.addEventListener("submit", (event) => { 
  event.preventDefault();

  const nombre = nombreInput.value;
  const edad = parseInt(edadInput.value)
  const contactosTexto = obtenerContactosAdmisiones();

  div.innerHTML = "<p>" + saludar(nombre, edad) + "</p>";
  div.innerHTML += contactosTexto;
});
