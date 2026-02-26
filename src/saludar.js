function saludar(nombre) {
  return "Hola, " + nombre;
}

function saludoInicial() {
  return "Bienvenido soy un saludador ";
}

function saludarSegunHora(fechaActual = new Date()) {
  const hora = fechaActual.getHours();

  if (hora >= 0 && hora < 12) {
    return "Buenos días";
  } else if (hora >= 12 && hora < 19) {
    return "Buenas tardes";
  } else {
    return "Buenas noches";
  }
}

export {saludar, saludoInicial, saludarSegunHora};
