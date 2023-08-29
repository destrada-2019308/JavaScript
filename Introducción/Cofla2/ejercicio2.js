let free = false;

const entrar = (hora) =>{
    let nombre = prompt("Dame tu nombre");
    let edad = prompt("Dame tu edad");    
    if(edad >= 18){
        document.write("Che " + nombre + " dale pasa podés entrar.");
        if(hora > 2 && free == false ){
            document.write("Son mas de las 2 am " + nombre + " entras gratis" );
            free = true;
        }else{
            document.write("Si entras despues de las 2 am entrabas gratis");
        }
    } else {
        document.write("Nel pa, sos menor de edad, no te puedo dejar entrar");
    }
}

entrar(3);
entrar(4);

