class Celulares{
    constructor(color, peso, rdp, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = false;
    }
    botonEncendido(){
        if(this.encendido == false){
            alert("Celular prendido");
            this.encendido = true;
        } else {
            alert("El celular apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("Reiniciando sistema");
        } else {
            alert("Celular apagado");
        }
    }
    tomarFoto(){
        alert(`Foto tomada con una resolución de ${this.rdc} `);
    }
    grabarVideo(){
        alert(`Grabando video en una ${this.rdc} `);
    }
    info(){
        return `
        Color: ${this.color}<br>
        Peso: ${this.peso}<br>
        Resolución de pantalla: ${this.rdp}<br>
        Resolución de cámara: ${this.rdc}<br>
        Memoria RAM: ${this.ram}<br>
        `;
    }
}

class CelularAltaGama extends Celulares{
    constructor(color, peso, rdp, rdc, ram, cExtra){
        super(color, peso, rdp, rdc, ram);
        this.cExtra = cExtra;
    }
    grabarVideolento(){
        alert("Estas grabando en cámara lenta");
    }
    reconocimientoFacial(){
        alert("Iniciando reconocimiento facial");
    }
    infoGamaAlta(){
        return this.info() + `
        Cámara Extra: ${this.cExtra} <br>
        `;
    }
}

const celular1 = new Celulares("Blanco", "150g", "5'", "Full HD", "4GB");
const celular2 = new Celulares("Negro", "200g", "5.5'", "HD", "6GB");
const celular3 = new Celulares("Azul", "100g", "5.2'", "Full HD", "8GB");

const celularGamaAlta1 = new CelularAltaGama("Blanco", "90g", "6'", "Full HD 4K", "16GB", "asd");
const celularGamaAlta2 = new CelularAltaGama("Blanco", "110g", "7'", "Full HD", "14GB", "as");

celular1.botonEncendido();
celular1.tomarFoto();   
celular1.grabarVideo();
celular1.reiniciar();
celular1.botonEncendido();

document.write(`
    ${celular1.info()}<br>
    ${celular2.info()}<br>
    ${celular3.info()}<br>
    ${celularGamaAlta1.infoGamaAlta()}<br>
    ${celularGamaAlta2.infoGamaAlta()}<br>
    `);

celularGamaAlta1.grabarVideolento();
celularGamaAlta1.tomarFoto();
celularGamaAlta2.reconocimientoFacial();