const prompt=require("prompt-sync")({sigint:true});

// Crear una función que reciba un número que será la cantidad de aciertos del
// usuario sobre el total de casillas disponibles. La función deberá devolver el
// monto del premio, el cual es proporcional al número de aciertos.


// const premioTotal = 2500 ;
// const casillas = 10;
// function calcular(aciertos){
//     return premioTotal * aciertos/casillas
// }

// console.log(calcular(5));
// console.log(calcular(10));

//----------------------------------------------------------------------------------------

// Crear un programa que consista en una apuesta donde el usuario tenga que
// ingresar un objeto o lugar con el que soñó ese día, para que luego lo muestre
// en pantalla y se calcula aleatoriamente un resultado numérico con 4 posibles
// casos de premios que pueda ganar: si el resultado es 0, gana $1000, si es 1,
// gana $10000; si es 2 gana $10000, y si es 3 gana $100000.


// let suenio

// function resultadoLoteria() {
//     suenio = prompt("Ingrese un objeto o lugar con el que haya soñado hoy: ")
//     let premios = [1000,10000,100000,100000];


//     console.log(suenio);
//     const resultadoRandom = Math.floor(Math.random() * premios.length);
//     console.log(premios[resultadoRandom]);

// }


// resultadoLoteria()

//----------------------------------------------------------------------------------------

// Crear una función que sortee un numero random ganador, luego haga un ciclo
// desde 1 hasta el final de la ruleta, imprimiendo por consola el número de esa
// iteración. Pero en el caso del número que sea el ganador, imprimir por consola
// “Numero ganador:” seguido del número.

const finalRuleta = 25;
function tirarRuleta(){
    const resultadoRandom = Math.floor(Math.random() * finalRuleta);

    for(let i = 0; i<25 ; i++){
        if(i === resultadoRandom){
            console.log(`El numero ganador es: ${resultadoRandom}`);
        }
        else{
            console.log(i);
        }
    }
}

tirarRuleta();

