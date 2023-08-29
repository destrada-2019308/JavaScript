function sumar(){
    let num1 = 32;
    let num2 = 12;    
    let res = num1 + num2;
    document.write(res + "<br>");
}

sumar();

function sumar2(num3, num4){
    let res = num3 + num4;
    document.write(res + "<br>");
}

sumar2(4,5);

//Otra forma de crear funciones 
const saludar = function(nombre){
    let frase = `Hola ${nombre}! ¿Comó estas?`;
    document.write(frase + "<br>");
}

saludar("Pedro");

//Funciones flecha
const saludar2Parametros = (nombre, apellido) =>{
    let frase = `Hola ${nombre} ${apellido}! ¿Comó estas?`;
    document.write(frase + "<br>");
}

saludar2Parametros("Pedro","Suarez");

const saludar1Parametro = nombre=>{
    let frase = `Hola ${nombre}! ¿Comó estas?`;
    document.write(frase + "<br>");
}

saludar1Parametro("Pedro");

//Si solo usamos una linea de codigo o una expresion
const saludo = nombre => document.write("Hola como vas?" + nombre + "<br>");

saludo("pedro");

