class Animales {
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

class Perro extends Animales{
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = raza;
    }
    static ladrar(){
        alert("¡Wow!");
    }
    set setRaza(newRaza){
        this.raza = newRaza;
    }
    get getRaza(){
        return this.raza;
    }
}

/* Instancia */
const perro = new Perro("Perro", "5", "Negro", "Doberman");

// document.write(perro.especie);

// Perro.ladrar();
// perro.verInfo();    
perro.setRaza = "Pedro";

document.write(perro.getRaza);