// Vamos implementar esta funcion en el script de Clase 13 al principio.
// La idea es que antes de la carga de la window hagamos un chequeo del Storage.
/* -------------------------------------------------------------------------- */
/*                [10] FUNCION: chequeamos si existe un usuario               */
/* -------------------------------------------------------------------------- */

function chequearUsuarioValido() {
  // 👇 objeto que obtenemos del storage
  const usuarioLS = localStorage.getItem("datosUsuario") 
  console.log(usuarioLS);

  const usuario = JSON.parse(usuarioLS)


  if (usuario !== null) {
    const { email, password, rol, terminos } = usuario
        

    console.log("usuario");
    console.log(`-> ${email}\n-> ${password}\n-> ${rol}\n-> ${terminos}\n `);

  } else {
    alert("Ud no esta logueado para iniciar sesion");
    location.replace("./")
    localStorage.clear()

  }

}
chequearUsuarioValido()

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* ----------------------------- MESA DE TRABAJO ---------------------------- */

// 1. Levantar el objeto desde el localStorage con key=LISTADO
// 2. Devolver un array con nombre y apellido de las personas mayores a 18 años (hay que usar map y filter)
// 3. Volver a guardarlo en localStorage bajo el mismo key
// 4. Mostrar por consola el resultado, asegurándose de que sea el requerido
localStorage.setItem("LISTADO",  '[{"nombre":"Pedro", "apellido":"Gomez","nacimiento":"11/05/1998"},{"nombre":"Joaquin","apellido":"Sotto","nacimiento":"21/10/1985"},{"nombre":"Gabriela","apellido":"Perez","nacimiento":"02/02/2010"},{"nombre":"Agustina","apellido":"Estevez","nacimiento":"21/08/1986"},{"nombre":"Paola","apellido":"Serra","nacimiento":"22/09/2009"},{"nombre":"Juan","apellido":"Coprez","nacimiento":"12/04/1977"}]')

function mesaTrabajo() {
  let listado = JSON.parse(localStorage.getItem("LISTADO"));
  let fechaActual = new Date().getFullYear();

  let personasMap = listado.map(persona => {
    let personaFiltro = {};
    const { nombre, apellido } = persona;
    let fechaNacimiento = parseInt(persona.nacimiento.split("/")[2]); //Hice esto por el problema de fechas que hay con las fechas del navegador que usa americanas en mi caso
    let edad = fechaActual - fechaNacimiento;
    personaFiltro.nombre = nombre;
    personaFiltro.apellido = apellido;
    personaFiltro.edad = edad;
    return personaFiltro;
  });

  let mayoresEdad = personasMap.filter(x => x.edad > 18);


  localStorage.setItem("LISTADO", JSON.stringify(mayoresEdad));
  let listadoMayores = JSON.stringify(localStorage.getItem("LISTADO"));
  console.log(listadoMayores);
}

mesaTrabajo();

