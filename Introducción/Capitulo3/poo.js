class animales {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Hola, soy un ${especie}, y tengo ${edad} años, soy de color ${color}. xD`
    }
    verInfo(){
        document.write(this.info + "<br>");
    }
}

/* Instancia */
const perro = new animales("Perro", "5", "Negro");

// document.write(perro.especie);

perro.verInfo();
