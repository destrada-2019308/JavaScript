let cadena = "cadena de prueba";
let cadena1 = "cadena "

//mira si empieza con las mismas palabras
result = cadena.startsWith(cadena1);
//mira si termina con las mismas palabras
result1 = cadena.endsWith(cadena1);
//verifica si encuentra la cadena
// sin importar donde este
result2 = cadena.includes(cadena1);



document.write(result + "<br>");
document.write(result1 + "<br>");


//split() funciona com array
//separa los valores como le digamos
let cadenasplit = "Hola,como,estas";
result3 = cadenasplit.split(",");

document.write(result3 + "<br>");
document.write(result3[2] + "<br>");

//toLowerCase() traduce todo en minusculas
document.write(cadenasplit.toLowerCase() + "<br>");
//toUpperCase() traduce todo en mayúsculas
document.write(cadenasplit.toUpperCase() + "<br>");

//toString() convierte todo a String

//trim() elimina los espacios en blanco 

