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

  const horaActual = new Date().getHours();
  let saludoTemporal = "";

  if (horaActual >= 6 && horaActual < 12) {
    saludoTemporal = "Buenos días ";
  } else if (horaActual >= 12 && horaActual < 19) {
    saludoTemporal = "Buenas tardes ";
  } else {
    saludoTemporal = "Buenas noches ";
  }
  
  return saludoTemporal + ", " + tratamiento + nombre;
}

export {saludar, saludoInicial};
