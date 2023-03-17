/* -------------------------- estado por defecto ------------------------- */
const estadoUsuario = {
  email: "",
  password: "",
  rol: "",
  terminos: false,
};

// ponemos en true solo cuando estén correctos
const estadoErroresOK = {
  email: false,
  password: false,
  rol: false,
  terminos: false,
};

/* ---------------------------------- nodos --------------------------------- */

// capturamos todos los elementos que necesitamos
const formulario = document.forms[0];

const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const inputRol = document.querySelector("#rol");
const inputTerminos = document.querySelector("#terminos");

const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const rolError = document.querySelector("#rolError");
const terminosError = document.querySelector("#terminosError");

/* -------------------------------------------------------------------------- */
/*                   [1] FUNCION: mostrar errores al usuario                  */
/* -------------------------------------------------------------------------- */
function mostrarErrores() {
  // por cada small mostramos u ocultamos el error
  estadoErroresOK.email
    ? emailError.classList.remove("visible")
    : emailError.classList.add("visible");
  estadoErroresOK.password
    ? passwordError.classList.remove("visible")
    : passwordError.classList.add("visible");
  estadoErroresOK.rol
    ? rolError.classList.remove("visible")
    : rolError.classList.add("visible");
  estadoErroresOK.terminos
    ? terminosError.classList.remove("visible")
    : terminosError.classList.add("visible");
}

/* -------------------------------------------------------------------------- */
/*               [2] FUNCION: actulizamos los estados de la app               */
/* -------------------------------------------------------------------------- */

// 👇 por cada cambio en el formulario actualizamos
formulario.addEventListener("change", function () {
  // 👇 actualizo el estado de la pantalla con los datos
  estadoUsuario.email = inputEmail.value;
  estadoUsuario.password = inputPassword.value;
  estadoUsuario.rol = inputRol.value;
  estadoUsuario.terminos = inputTerminos.value;
  // console.log(estadoUsuario);

  // 👇 actualizo el estado del error segun el estado del usuario
  estadoErroresOK.email = validarEmail(estadoUsuario.email);
  estadoErroresOK.password = validarPassword(estadoUsuario.password);
  estadoErroresOK.rol = validarRol(estadoUsuario.rol);
  estadoErroresOK.terminos = validarTerminos(estadoUsuario.terminos);
  // console.log(estadoErroresOK);

  // finalmente muestro los errores presentes
  mostrarErrores();
});

/* -------------------------------------------------------------------------- */
/*                        [3] FUNCIONES: validar campos                       */
/* -------------------------------------------------------------------------- */
function validarEmail(email) {
  let resultado = false;

  // EJEMPLO VALIDACIÓN A MANO 👇
  if (
    email.includes("@") &&
    email.includes(".") &&
    !email.includes(" ") &&
    email.length > 5
  ) {
    resultado = true;
  }

  // EJEMPLO CON EXPRESION REGULAR 👇
  // let regExp = new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}"); // ojo con las extensiones
  // if (regExp.test(email)) {
  //   resultado = true;
  // }

  return resultado;
}

function validarPassword(password) {
  let resultado = false;

  // si pasa las pruebas lo damos por válido 👇
  if (password.length > 5 && !password.includes(" ")) {
    resultado = true;
  }
  return resultado;
}

function validarRol(rol) {
  let resultado = false;

  // si pasa las pruebas lo damos por válido 👇
  if (rol === "frontend" || rol === "backend") {
    resultado = true;
  }

  return resultado;
}

function validarTerminos(verificacion) {
  let resultado = false;

  // si pasa las pruebas lo damos por válido 👇
  if (verificacion) {
    resultado = true;
  }

  return resultado;
}

/* -------------------------------------------------------------------------- */
/*                      [4] FUNCION: escuchamos el submit                     */
/* -------------------------------------------------------------------------- */

// en el evento submit nos remitimos a chequear nuestro estado de errores
formulario.addEventListener("submit", function (evento) {
  // prevenimos el default para manejar nososotro el comportamiento
  evento.preventDefault();

  console.log(estadoUsuario);
  console.log(estadoErroresOK);

  if (
    estadoErroresOK.email &&
    estadoErroresOK.password &&
    estadoErroresOK.rol &&
    estadoErroresOK.terminos
  ) {
    navegarPaginaExito();
    // ☝ luego reemplazar esto por la funcion de éxito
  }
});

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                [5] FUNCION: Formulario completado con éxito                */
/* -------------------------------------------------------------------------- */
// Esta funcion se va a encargar de realizar la redirección cuando el formulario se complete correctamente.
// Para eso debera cumplir con los siguientes requerimientos.
// 1 - Deshabilitar el boton del formulario.
// 2 - Esperar 3 segundos para redireccionar a la página de
// 3 - Durante ese tiempo el boton deshabilitado debe mostrar el texto: "Cargando..."
// 4 - Cuando vaya a la página de 'usuario.html' NO se debe permitir que mediante el botón de "Atrás"(la flechita del navegador) el usuario vuelva a index.

function navegarPaginaExito() {
  // Deshabilita el botón y muestra el mensaje de "Cargando..."
  let botonSubmit = document.querySelector("button[type='submit']");
  botonSubmit.setAttribute("disabled", true);
  botonSubmit.innerText = "Cargando...";

  // Espera tres segundos antes de cambiar la URL y actualizar el historial
  setTimeout(() => {
    // Cambia la URL
    window.location.href = "usuario.html";
  
    // Actualiza la entrada del historial actual
    history.replaceState(null, null, window.location.href);
  
    // Agrega un eventListener para el evento beforeunload
    window.addEventListener("beforeunload", function(event) {
      // Actualiza la entrada del historial una vez más justo antes de descargar la página actual
      history.replaceState(null, null, window.location.href);
    });
  }, 3000);
}
