function saludoInicial() {
  return "Bienvenido soy un saludador ";
}

function saludar(nombre, edad, genero) {
  let prefijo = "";
  
  if (edad > 30) {
    if (genero == "masculino") 
    {
      prefijo = "Sr. ";
    } 
    else {
      prefijo = "Sra. ";
    }
  } 
  else {  
      if (genero == "masculino") 
      {
        prefijo = "Joven ";
      } 
      else {
        prefijo = "Señorita ";
      }
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
  
  return saludoTemporal + ", " + prefijo + nombre;
}

function obtenerContactosAdmisiones() {
  return `
    <h3>Contactos de Admisiones UCB:</h3>
    <ul>
      <li><strong>WhatsApp:</strong> +591 70000000</li>
      <li><strong>Email:</strong> admisiones@ucb.edu.bo</li>
      <li><strong>Horario:</strong> 08:00 - 18:00</li>
    </ul>
  `;
}

export { saludoInicial, saludar, obtenerContactosAdmisiones };
