alert("Prueba Tecnica1");

/*Tipos de datos de Javascript:
 tipo de dato string,numerico,object,array,boolean,
 function,Symbol,tipo clase,undefined y null*/

 // (a)
 function obtenerporcentaje(numero,porcentaje) {
     return numero/ 100 * porcentaje;
     console.log(obtenerporcentaje( 100, 30 ));

 }

 // (b)

 //ej1
 
 let persona = {
    nombre: "Fernando",
    apellido: "Toscano",
    edad:"23",
    dni: "41408394",
    email: "toscafer889@gmail"
}

console.log(persona.nombre);

//ej2

let moto = {
    rueda: "llantas",
    faro: "luz led",
    freno: "delantero",
    acelerador: "puño"
}
console.log(moto.rueda);


//c
  
//ej1
const nombres = ["iker" , "martina" , " homero " , "nancy"];
console.log(nombres);

console.log(nombres[0]);
console.log(nombres[1]);
console.log(nombres[2]);
console.log(nombres[3]);

//ej2

const auto = ["rueda", "volante" , "GPS" , "espejos" , "parabrisas"];
console.log(auto);

for (i = 0; 1 < auto.length; i ++){
    console.log( i + "." + auto[i]);
}

   
