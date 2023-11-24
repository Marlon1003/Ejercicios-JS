function validarContraseña() {
    var contraseña = document.getElementById("contraseña").value;
  
    var validarContraseña = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{7,}$/;
  
    if (contraseña.match(validarContraseña)) {
      alert("Contraseña válida");
    } else {
      alert("Contraseña inválida");
    }
  }