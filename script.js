document.addEventListener("DOMContentLoaded", function() {
    const mainContent = document.getElementById("mainContent");
    const humedadSpan = document.getElementById("humedad");
    const luzSpan = document.getElementById("luz");
  
    // Simulación de valores de humedad y luz
    setInterval(() => {
      const humedad = Math.floor(Math.random() * 100) + 1;
      const luz = Math.floor(Math.random() * 100) + 1;
      humedadSpan.textContent = `${humedad}%`;
      luzSpan.textContent = `${luz}%`;
    }, 5000); // Actualizar cada 5 segundos
  
    // Función para cargar vistas
    function cargarVista(vista) {
      fetch(`${vista}.html`)
        .then(response => response.text())
        .then(data => {
          mainContent.innerHTML = data;
          if (vista === "historial") {
            cargarHistorial();
          } else if (vista === "programacion") {
            const formProgramacion = document.getElementById("formProgramacion");
            formProgramacion.addEventListener("submit", function(event) {
              event.preventDefault();
              const frecuencia = document.getElementById("frecuencia").value;
              const duracion = document.getElementById("duracion").value;
              // Simulación de conexión al módulo Bluetooth
              enviarBluetooth(frecuencia, duracion);
              agregarRiego(frecuencia, duracion);
              formProgramacion.reset();
            });
          }
        })
        .catch(error => console.log("Error al cargar la vista", error));
    }
  
    // Función para agregar riego al historial
    function agregarRiego(frecuencia, duracion) {
      const fecha = new Date().toLocaleString();
      const listaRiegos = document.getElementById("listaRiegos");
      const nuevoRiego = document.createElement("li");
      nuevoRiego.innerHTML = `<strong>Frecuencia:</strong> ${frecuencia} días, <strong>Duración:</strong> ${duracion} minutos - ${fecha}`;
      listaRiegos.prepend(nuevoRiego);
  
      // Simulación de guardar en el backend
      guardarEnBackend(frecuencia, duracion, fecha);
    }
  
    // Función para cargar el historial de riegos
    function cargarHistorial() {
      const listaRiegos = document.getElementById("listaRiegos");
      // Simulación de historial de riegos
      const historial = [
        { frecuencia: 3, duracion: 10, fecha: "2024-03-01 10:00:00" },
        { frecuencia: 1, duracion: 15, fecha: "2024-03-02 09:30:00" },
        { frecuencia: 5, duracion: 8, fecha: "2024-03-03 12:45:00" }
      ];
      listaRiegos.innerHTML = "";
      historial.forEach(riego => {
        const nuevoRiego = document.createElement("li");
        nuevoRiego.innerHTML = `<strong>Frecuencia:</strong> ${riego.frecuencia} días, <strong>Duración:</strong> ${riego.duracion} minutos - ${riego.fecha}`;
        listaRiegos.appendChild(nuevoRiego);
      });
    }
  
    // Simulación de conexión al módulo Bluetooth
    function enviarBluetooth(frecuencia, duracion) {
      console.log(`Enviando datos al módulo Bluetooth - Frecuencia: ${frecuencia} días, Duración: ${duracion} minutos`);
    }
  
    // Simulación de guardar en el backend
    function guardarEnBackend(frecuencia, duracion, fecha) {
      console.log(`Guardando en el backend - Frecuencia: ${frecuencia} días, Duración: ${duracion} minutos, Fecha: ${fecha}`);
    }
  
    // Event Listeners para los botones de navegación
    const btnProgramacion = document.getElementById("btnProgramacion");
    const btnHistorial = document.getElementById("btnHistorial");
  
    btnProgramacion.addEventListener("click", function() {
      cargarVista("programacion");
    });
  
    btnHistorial.addEventListener("click", function() {
      cargarVista("historial");
    });
  
    // Cargar vista por defecto al inicio
    cargarVista("programacion");
  });
  