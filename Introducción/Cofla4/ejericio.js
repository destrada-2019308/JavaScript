let materias = {
    fisica: ["juan", "pedro"],
    matematicas: ["maria", "juan"]
}

const inscripcion = (alumno, materia) => {
    alumnos = materias[materia]
    if (alumno.length >= 2){
        document.write(`No te puedo inscribir ${alumno}, porque ya no hay cupo en ${materia}`)
    } else{
        alumnos.push(alumno)
        if (materia == "fisica") {
            materias = {
                fisica: alumno,
                matematicas: materias["matematicas"]
            }
        } else if(materia == "matematicas"){
            materias = {
                fisica: materia["fisica"],
                matematicas: alumno
            }
        }
    }
} 

inscripcion("pedrito", "fisica")


