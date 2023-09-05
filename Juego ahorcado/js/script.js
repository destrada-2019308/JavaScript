//Creamos el array o el vector de 15
const listaPalabras = ["guitarra",
"teclado","reloj","tarjeta","ñu","vaso","pachon","filete","luz","trapo","ventana","puerta","sol","pelota","EDIFICIO"]
const palabra = document.querySelector(".palabra-ul");
let palabraActual;
const botonesDelTeclado = document.querySelector(".teclado");
let letrasAdivinadas = 0


//Creamos una funcion flecha para que nos de una palabra aleatoria
const palabraRandom = () =>{
    //creamos una constante para la lista de palabras
    //con la Clase Math.floor redondeamos el numero ramdom que viene después 
    // y lo multiplicamos por la lista de palabras para que nos tire un numero entre
    //0 y la cantidad de parametros que tenga el array
    // el .length es para contar String, pero también sirve para contar los arreglos
    //que existan en el
    const lista = listaPalabras[Math.floor(Math.random() * listaPalabras.length)]
    //Lo hace 
    palabraActual = lista.toLowerCase()
    //Probamos que funcione las palabras aleartorias
    console.log(palabraActual);
    //Sirve para graficar la cantidad de espacios que lleva la palabra
    palabra.innerHTML = lista.split("").map(() => `<li class="palabra"></li>`).join("");
}
//Mandamos a llamar a la funcion palabraRandom
palabraRandom();

/*
Funciones flecha
const nombreDeLaFuncion = (parametro, parametro2) =>{
    let frase = `Hola ${nombre} ${apellido}! ¿Comó estas?`;
    document.write(frase + "<br>");
}
*/
let intentos = 0;
const totalLetras = palabraActual.length;

const presion = (button) => {
    // Supongamos que palabraActual es una cadena de texto que contiene la palabra objetivo.
    // Verificar si la palabraPresionada está presente en palabraActual
    if (palabraActual.includes(button)) {
        // Convertir palabraActual a un array de caracteres
        const caracteresPalabra = palabraActual.split('');
        // Recorrer cada carácter de palabraActual
        caracteresPalabra.forEach((caracter, index) => {
            if (caracter === button) {
                // Actualizar el elemento en la posición index con la letra correcta
                palabra.querySelectorAll("li")[index].innerText = caracter;
                const botonUsado = document.getElementById(button)
                botonUsado.classList.add("disable")
                letrasAdivinadas++
            }});
    }else {
        //Ponemos lo que va a pasar si la letraPresionada es incorrecta con la palabraActual
        intentos++
        const palabrasIncorrectas = document.getElementById("intentos")
        palabrasIncorrectas.textContent = intentos
        const palabraCorrecta = document.getElementById("palabraCorrecta")
        palabraCorrecta.textContent = palabraActual
        const botonUsado = document.getElementById(button)
        botonUsado.classList.add("disable")
        if (intentos == 1) {
            cabeza()
        }else if(intentos == 2){
            torso()
        }else if(intentos == 3){
            brazo1()
        }else if(intentos == 4){
            brazo2()
        }else if(intentos == 5){
            pierna1()
        }else if(intentos == 6){
            pierna2()
        }else if(intentos == 7){
            muerto()
            const perdiste = document.querySelector(".perdiste")
            perdiste.classList.add("entrar")
        }
    }
    if(letrasAdivinadas === totalLetras){
        const ganaste = document.querySelector(".ganaste");
        ganaste.classList.add("entrar");
//        console.log("ganaste")
    }
}

//Función para volver a cargar el juego si ya terminó (en caso de que gané o pierda)
function volverJugar() {
    //Sirve para recargar un página y es como que si el juego volviera a funcionar
    location.reload()
}   

// Agrupamos todos lo botones en un arreglo
const botonesLetras = document.querySelectorAll(".boton-letra");
const contenidoElemento = document.getElementById("contador")

// Define un manejador de eventos común para todos los botones de letras
const presionLetra = (event) => {
    // Obtenemos la letra que corresponde del boton que presionó
    const letraPresionada = event.target.innerText.toLowerCase();
    // Llama a la función presion con la letra actual
    presion(letraPresionada);
};

const arrayBotones = []
// Manejamos los eventos de cada letra con el addEventListener
botonesLetras.forEach((boton) => {
    boton.addEventListener("click", presionLetra)
    boton.addEventListener("click", () => {
        const contenidoBoton = boton.textContent
        //Se crea una cadena para almacenar los caracteres
        let contenidoFinal = ''
        let espacio = " "
        //Recorremos el array para mostrar la palabra con el bucle for 
        arrayBotones.push(...contenidoBoton) 
        for(let i = 0; i < arrayBotones.length; i++){
            //Agregamos cada caracter a la cadena
            contenidoFinal += arrayBotones[i]
            contenidoFinal += espacio
            //console.log(contenidoFinal)
        }
        //Mostramos en el elemento de html todo el String de antes
        document.getElementById("contador").innerHTML = contenidoFinal.toUpperCase() 
    })
});

const canvas = document.getElementById("canvas")
const contexto = canvas.getContext("2d")

//Creamos la parte del ahorcado con canvas esto en funciones para luego mandarlas a llamar
//Creamos el marco para el ahorcado
const marco = () =>{
    contexto.beginPath()
    contexto.lineWidth=4
    contexto.moveTo(25, 25)
    contexto.lineTo(100,25)
    contexto.lineTo(100,40)
    contexto.moveTo(25,25)
    contexto.lineTo(25,125)
    contexto.stroke()
}

//creamos la cabeza de la persona
const cabeza = () =>{
    contexto.beginPath()
    contexto.lineWidth=2
    contexto.arc(100, 55, 15,0, 2*Math.PI)
    contexto.stroke()
}

//Creamos el torso de la persona
const torso = () =>{
    contexto.beginPath()
    contexto.lineWidth=2
    contexto.moveTo(100,70)
    contexto.lineCap='round'
    contexto.lineTo(100,105)
    contexto.stroke()
}

const brazo1 = () =>{
    contexto.beginPath()
    contexto.lineWidth=2
    contexto.moveTo(100,75)
    contexto.lineCap="round"
    contexto.lineTo(80,85)
    contexto.stroke()
}

const brazo2 = () =>{
    contexto.beginPath()
    contexto.lineWidth=2
    contexto.moveTo(100,75)
    contexto.lineCap="round"
    contexto.lineTo(120,85)
    contexto.stroke()
}

const pierna1 = () =>{
    contexto.beginPath()
    contexto.lineWidth=2
    contexto.moveTo(100,105)
    contexto.lineCap="round"
    contexto.lineTo(85,120)
    contexto.stroke()
}

const pierna2 = () =>{
    contexto.beginPath()
    contexto.lineWidth=2
    contexto.moveTo(100,105)
    contexto.lineCap="round"
    contexto.lineTo(120,119)
    contexto.stroke()
}


const muerto = () =>{
    //calculamos el centro del torso para crear una X
    contexto.beginPath()
    contexto.lineWidth=7
    contexto.strokeStyle = "#f00";
    const centroX = 100;
    const centroY = (70 + 105) / 2; 
    contexto.moveTo(centroX - 20, centroY - 20);
    contexto.lineTo(centroX + 20, centroY + 20);
    contexto.moveTo(centroX + 20, centroY - 20);
    contexto.lineTo(centroX - 20, centroY + 20);
    contexto.stroke();
}
//Mandamos a llamar a las funciones
marco()


