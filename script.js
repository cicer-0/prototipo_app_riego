document.addEventListener("DOMContentLoaded", function() {
    // Simulación de valores de humedad y luz
    const humedadSpan = document.getElementById("humedad");
    const luzSpan = document.getElementById("luz");
  
    setInterval(() => {
      const humedad = Math.floor(Math.random() * 100) + 1;
      const luz = Math.floor(Math.random() * 100) + 1;
      humedadSpan.textContent = `${humedad}%`;
      luzSpan.textContent = `${luz}%`;
    }, 5000); // Actualizar cada 5 segundos
  
    // Simulación de historial de riegos
    const listaRiegos = document.getElementById("listaRiegos");
  
    function agregarRiego(frecuencia, duracion) {
      const fecha = new Date().toLocaleString();
      const nuevoRiego = document.createElement("li");
      nuevoRiego.innerHTML = `<strong>Frecuencia:</strong> ${frecuencia} días, <strong>Duración:</strong> ${duracion} minutos - ${fecha}`;
      listaRiegos.prepend(nuevoRiego);
    }
  
    // Formulario de Programación de Riego
    const formProgramacion = document.getElementById("formProgramacion");
  
    formProgramacion.addEventListener("submit", function(event) {
      event.preventDefault();
      const frecuencia = document.getElementById("frecuencia").value;
      const duracion = document.getElementById("duracion").value;
      agregarRiego(frecuencia, duracion);
      formProgramacion.reset();
    });
  });
  