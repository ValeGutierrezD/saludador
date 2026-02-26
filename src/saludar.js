function saludoInicial() {
  return "Bienvenido soy un saludador ";
}

function saludar(nombre, edad) {
  let tratamiento = "";
  
  if (edad > 30) {
    tratamiento = "Sr./Sra. ";
  } else {
    tratamiento = "Joven ";
  }

  return "Hola, " + tratamiento + nombre;
}

export {saludar, saludoInicial};
