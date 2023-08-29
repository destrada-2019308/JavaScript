/* alumnos presentes(p) y ausentes (A) 
    pasados 30 dias mostrar situacion final de todos los alumnos 
    (numero total de presentes y ausentes)
    se puede tener un maximo de 10% de ausencias por semestre, 
    si se tiene mas aclarar que esta reprobado
*/
let nAlumnos = prompt("cuantos alumnos hay");
let presentes = true;
let alumnosTotales = [];

for (i = 0; i < nAlumnos; i++){
    alumnosTotales[i] = [prompt("Nombre del alumno"), 0];
}

const tomarAsistencia = (nombre,p) =>{
    let presencia = prompt(nombre);
    if(presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
} 

for (i = 0; i < 30; i++){
    for(alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    ______Presentes: ${alumnosTotales[alumno][1]}:<br>   
    ______Ausencias: ${30 - alumnosTotales[alumno][1]}:<br>
    `;
    if(30 - alumnosTotales[alumno][1] > 18){
        resultado += "REPROBADO POR INASISTENCIAS";
    }else{
        resultado+="<br><br>"
    }
    document.write(resultado);
}