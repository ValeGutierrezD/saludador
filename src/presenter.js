import {saludar, saludoInicial, obtenerContactosAdmisiones} from "./saludar.js";

const nombreInput = document.querySelector("#nombre");
const edadInput = document.querySelector("#edad");
const generoInput = document.querySelector("#genero");
const idiomaInput = document.querySelector("#idioma");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

div.innerHTML = "<p>" + saludoInicial(idioma) + "</p>"

form.addEventListener("submit", (event) => { 
  event.preventDefault();

  const nombre = nombreInput.value;
  const edad = parseInt(edadInput.value)
  const genero = generoInput.value;
  const idioma = idiomaInput.value;
  const contactosTexto = obtenerContactosAdmisiones();

  div.innerHTML = "<p>" + saludar(nombre, edad, genero, idioma) + "</p>";
  div.innerHTML += contactosTexto;
});
