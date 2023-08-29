function Tabla(){
    ventana = window.open("","","");
    ventana.document.write("<h1> Tabla de multiplicar </h1>");
    for (var i = 0; i <= 10; i++) {
        valor1 = num1.value *1;
        result = valor1 * i;  
        ventana.document.write(`${valor1} * ${i} = ${result} <br>`);    
    }
}
function confirmarEliminacion(num1) {
    var confirmacion = confirm("¿Estás seguro de que deseas eliminar este elemento?");

    if (confirmacion) {
    } else {



    }
}