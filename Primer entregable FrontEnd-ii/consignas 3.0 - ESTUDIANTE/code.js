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

  indexNombre.innerHTML = datosPersona.nombre
  indexEdad.innerHTML = datosPersona.edad
  indexCiudad.innerHTML = datosPersona.ciudad
  indexJS.innerHTML = datosPersona.interesPorJs

}

renderizarDatosUsuario();

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  

  let botonMaterias = document.getElementById("obtener-materias")
  let fila = document.getElementById("fila")

  botonMaterias.addEventListener('click', function(){

    listado.forEach(item => {
      fila.innerHTML += `
      
      <article class="caja">
      
        <image src= "${item.imgUrl}" alt= "${item.lenguajes}"></image>
        <p class="lenguajes">"${item.lenguajes}"</p>
        <p class="bimestre">"${item.bimestre}"</p>

      </article>
      `
    
    });

    botonMaterias.removeEventListener('click',function(){

      listado.forEach(item => {
        fila.innerHTML += `
        
        <article class="caja">
        
          <image src= "${item.imgUrl}" alt= "${item.lenguajes}"></image>
          <p class="lenguajes">"${item.lenguajes}"</p>
          <p class="bimestre">"${item.bimestre}"</p>
  
        </article>
        `
      
      });

    })

  })

}

recorrerListadoYRenderizarTarjetas()

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let sitio = document.getElementById("sitio")


  


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

