const suma = (num1, num2) => document.write("La suma es:" + (parseInt(num1) + parseInt(num2)));

const resta = (num1, num2) => document.write("La resta es:" + (parseInt(num1) - parseInt(num2)));

const divi = (num1, num2) => document.write("La división es:" + (parseInt(num1) / parseInt(num2)));

const multi = (num1, num2) => document.write("La multiplicación es:" + (parseInt(num1) * parseInt(num2)));

let operacion = prompt(`¿Que operacion quiere realizar?  
    1.Sumar
    2.Restar
    3.dividir
    4.Multiplicar`);

let num1 = prompt("Ingresa el primer número");
let num2 = prompt("Ingresa el segundo número");

if (operacion == 1 )
    suma(num1, num2);
else if (operacion == 2 )
    resta(num1, num2);
else if (operacion == 3 )
    divi(num1, num2);
else if (operacion == 4 )
    multi(num1, num2);
else
    alert("Elija una opcion valida");