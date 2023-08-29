array1 = ["maria", "josefa", "roberta"];
array2 = ["pedro", "marcelo", array1, "josefina"];

for (let array in array2) {
    if(array == 2){
        for (array of array1){
            continue;
            document.write(array + "<br>");
        }
    }else {
        document.write(array2[array] + "<br>");
    }
}


/* El for in:
    nos da la posicion o indice 
    el for of:
    pasa el valor*/