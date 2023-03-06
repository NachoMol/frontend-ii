/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

  datosPersona.nombre = prompt("Ingrese su nombre: ")
  datosPersona.edad = 2023 - prompt("Ingrese su año de nacimiento: ")
  datosPersona.ciudad = prompt("Ingrese su ciudad de origen: ")
  datosPersona.interesPorJs = prompt("Tiene interés por JS? indique true / false")

}


function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  
  let indexNombre = document.querySelector("#nombre")
  let indexEdad = document.querySelector("#edad")
  let indexCiudad = document.querySelector("#ciudad")
  let indexJS = document.querySelector("#javascript")

  indexNombre.innerHTML += datosPersona.nombre
  indexEdad.innerHTML += datosPersona.edad
  indexCiudad.innerHTML += datosPersona.ciudad
  indexJS.innerHTML += datosPersona.interesPorJs

}

renderizarDatosUsuario();

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  

  let botonMaterias = document.querySelector("#obtener-materias")
  let fila = document.querySelector("#fila")

  botonMaterias.addEventListener(onclick, function(){

    listado.forEach(item => {
      let articulo = document.createElement("article")
      articulo.classList.add('tarjeta')

      let imagen = document.createElement(img)
      imagen.setAttribute(src, `${item.imgUrl}`)
      imagen.setAttribute(alt, `${item.lenguajes}`)
      
      document.articulo.appendChild(imagen)

      let lenguajes = document.createElement(p)
      let contenidoLenguajes = document.createTextNode(`${listado.lenguajes}`)
      lenguajes.appendChild(contenidoLenguajes)
      lenguajes.classList.add('lenguajes')

      document.articulo.appendChild(lenguajes)

      let bimestre = document.createElement(p)
      let contenidoBimestre = document.createTextNode(`${listado.bimestre}`)
      lenguajes.appendChild(contenidoBimestre)
      lenguajes.classList.add('bimestre')

      document.articulo.appendChild(bimestre)

      document.fila.appendChild(articulo)
      
    });

    botonMaterias.removeEventListener(onclick)

  })

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 
  


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

