// Tenemos varias funciones a disposicion en nuestro programa.
// Debemos reutilizarlas y acomodar nuestro juego para que el mismo sea al mejor de 3 partidas.
// Esto significa que el primero que gane 2 partidas va ser el ganador. Con lo cual pueden repetirse varias rondas hasta que esto suceda.

// Listemos las funciones para recordarlo mejor
// FUNCION 1: iniciarJuego()
// -> Es la que se encarga de recopilar el nombre del jugador y saludarlo.
// FUNCION 2: pedirJugada()
// -> Esta se encarga de pedirle una eleccion al usuario hasta que ingrese un número válido.
// FUNCION 3: jugadaRandom()
// -> Utiliza el objeto Math para generar un numero aleatorio entre 1 y 3
// FUNCION 4: compararJugadas()
// -> Se encarga de comparar ambas elecciones y definir cómo le fue al usuario

/* ------------------------------ 👇Comenzamos ------------------------------ */
// Primero debemos limpiar los scripts anteriores y dejar solo las funciones, quitamos las variables y las empezamos a declarar solo en este script

function iniciarJuego() {

    // suludamos al usuario
    alert("Bienvenido al piedra papel o tijera de Frontend II.");
    // guardamos en una variable en nombre ingresado
    let nombre = prompt("Ingese su nombre por favor:")

    while ( nombre != null && nombre.length < 3){
        console.warn("El nombre no es valido")
        nombre = prompt("El nombre no es valido. Ingese su nombre nuevamente por favor: ")

    }

    nombre = nombre.toUpperCase()

    alert("Gracias por jugar " + nombre + ". ¡Mucha suerte!");


    // mostramos los datos por consola
    console.log("----------------------------");
    console.log("El jugador es:")
    console.log(nombre);
    console.log("----------------------------");

    return nombre;
}

function pedirJugada() {
    // empezamos con la variable eleccion en 0
    let eleccion = 0;

    do {
        // pedimos que elija una opcion válida
        // convertimos el texto que nos llega en un número
        // y reemplazamos en valor guardado en la variable
        eleccion = parseInt(prompt("Ingrese para jugar: 1(piedra), 2(papel) o 3(tijera)"));

        // si el dato ingresado no es válido entonces se vuelve a pedir hasta que cumpla
    } while (isNaN(eleccion) || eleccion < 1 || eleccion > 3)

    // mostramos los datos por consola
    console.log("----------------------------");
    console.log("La eleccion del jugador es:")
    console.log(eleccion);
    console.log("----------------------------");

    // finalmente devolvemos el valor de la eleccion
    return eleccion;
}

function jugadaRandom() {
    let numero = parseInt(Math.random() * 3 + 1);

    // mostramos los datos por consola
    console.log("----------------------------");
    console.log("La computadora saca:")
    console.log(numero);
    console.log("----------------------------");

    // finalmente devolvemos el valor de la eleccion aleatoria
    return numero;
}

function compararJugadas() {
    const RESULTADOS_POSIBLES = ['¡Genial, ganaste!', 'Esto fue un empate.', 'Una lástima, perdiste.'];

    const eleccionJugador = pedirJugada();
    const eleccionComputadora = jugadaRandom();

    // 👇 Por defecto el jugador gana
    let resultadoRonda = RESULTADOS_POSIBLES[0];

    // 👇 Chequeamos el caso en que empata
    if (eleccionJugador === eleccionComputadora) {
        resultadoRonda = RESULTADOS_POSIBLES[1];

        // 👇 Chequeamos los posibles casos en que pierde, sino ya sabemos que ganó
    } else if ((eleccionJugador === 1 && eleccionComputadora === 2) || (eleccionJugador === 2 && eleccionComputadora === 3) || (eleccionJugador === 3 && eleccionComputadora === 1)) {
        resultadoRonda = RESULTADOS_POSIBLES[2];
    }

    // devolvemos la frase con el resultado de la partida
    return resultadoRonda;
}

let mostrarResultado = texto => {
    console.log(texto);

    alert(texto)

    if(texto == "Una lástima, perdiste."){
        alert("Intentalo nuevamente!")
    }

}


let puntajes = {
    usuario: 0,
    computadora: 0,
    empates: 0
}


while(puntajes.computadora < 2 || puntajes.usuario < 2){

    const nombreJugador = iniciarJuego();

// 👇 mientras ninguno haya llegado a 2 puntos seguimos jugando
while (puntajes.usuario < 2 && puntajes.computadora < 2) {


    const resultadoDePartida = compararJugadas()
    alert(resultadoDePartida);

    console.log(resultadoDePartida);
    if (resultadoDePartida.includes("ganaste")) {
        puntajes.usuario++;
    } else if (resultadoDePartida.includes("ganaste")) {
        puntajes.computadora++
    }else{
        puntajes.empates++
    }

    console.table(puntajes);

    alert(`Tu puntaje es ${puntajes.usuario}`)
}

}



alert(`Ganaste: ${puntajes.usuario} partidas, Empataste: ${puntajes.empates} partidas, Perdiste: ${puntajes.computadora} partidas`)
console.log(`Ganaste: ${puntajes.usuario} partidas, Empataste: ${puntajes.empates} partidas, Perdiste: ${puntajes.computadora} partidas`);

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar el objeto puntajes para poder contabilizar los empates tambien. --> LISTO
// 2- Modificar el bucle para poder sumar tambien la cantidad de empates.
// 3- Mostrar en cada partida el resultado al usuario.
// 4- Mostrar finalmente la cantidad de partidas jugadas y que sepa cuantas ganó, perdió o empató durante el juego.