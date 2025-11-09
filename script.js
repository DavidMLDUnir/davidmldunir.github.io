
// Reenvia a W3Scholl HTML si el usuario quiere
function AprenderHTML() {
    if (confirm("Vas a ser redirigido, ¿Estas seguro que deseas salir?")) {
        window.location.href = ("https://www.w3schools.com/html/default.asp");
    } else {
        window.alert("Gracias por seguir con nosotros");
    }
}

// Reenvia a W3Scholl CSS si el usuario quiere
function AprenderCSS() {
    if (confirm("Vas a ser redirigido, ¿Estas seguro que deseas salir?")) {
        window.location.href = ("https://www.w3schools.com/css/default.asp");
    } else {
        window.alert("Gracias por seguir con nosotros");
    }
    
}

// Reenvia a W3Scholl JavaScript si el usuario quiere
function AprenderJS() {
    if (confirm("Vas a ser redirigido, ¿Estas seguro que deseas salir?")) {
        window.location.href = ("https://www.w3schools.com/js/default.asp");
    } else {
        window.alert("Gracias por seguir con nosotros");
    }
    
}


// Validacion del formulario
document.getElementById("form-contacto").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevenir el envío del formulario

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const feedback = document.getElementById("feedback");

  // Validar el correo electrónico (mínima validación)
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    feedback.textContent = "Por favor ingresa un correo electrónico válido.";
    feedback.style.color = "red";
    return;
  }

  // Validación del mensaje
  if (nombre.trim() === "") {
    feedback.textContent = "El nombre no puede estar vacío.";
    feedback.style.color = "red";
    return;
  }

  // Si todo está bien, mostrar mensaje de éxito
  feedback.textContent = "¡Mensaje enviado con éxito!";
  feedback.style.color = "green";

   // Limpiar el formulario
    document.getElementById("form-contacto").reset();
});
