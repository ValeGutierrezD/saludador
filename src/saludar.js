function saludoInicial(idioma) {
  return (idioma === "en") ? "Welcome, I am a greeter" : "Bienvenido soy un saludador";
}

function saludar(nombre, edad, genero, idioma) {
  let prefijo = "";
  let saludoTemporal = "";
  const horaActual = new Date().getHours();

  if (idioma === "es") {
    if (edad > 30) 
    {
      prefijo = (genero === "masculino") ? "Sr. " : "Sra. ";
    } 
    else 
    {
      prefijo = (genero === "masculino") ? "Joven " : "Señorita ";
    }

    if (horaActual >= 6 && horaActual < 12) saludoTemporal = "Buenos días";
    else if (horaActual >= 12 && horaActual < 19) saludoTemporal = "Buenas tardes";
    else saludoTemporal = "Buenas noches";

  } else {
    if (edad > 30) 
    {
      prefijo = (genero === "masculino") ? "Mr. " : "Ms. ";
    } 
    else 
    {
      prefijo = (genero === "masculino") ? "Young man " : "Young lady ";
    }

    if (horaActual >= 6 && horaActual < 12) saludoTemporal = "Good morning";
    else if (horaActual >= 12 && horaActual < 19) saludoTemporal = "Good afternoon";
    else saludoTemporal = "Good evening";
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
