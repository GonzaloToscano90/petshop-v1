// ejemplos de arreglos
const misPerros = ["Homero" , "Kony" , " El kliford " , "negra"];
console.log(misPerros);

// Como acceder a cada uno
console.log(misPerros[0]);
console.log(misPerros[2]);
console.log(misPerros[2]);

//Acceder a todos con variable contador
for (let i = 0; i < misPerros.length; i++){
    console.log( misPerros[i] );
}

// Saber mas informacion
for ( let i = 0; i < misPerros.length; i++){
console.log( i + ":" + misPerros[i]);
 } 

 //Modificar valores de inidices
 misPerros [1] = "Elkliford";
 console.log(misPerros[2]);

 // Agregar nuevos valores a un arreglo

 misPerros.push("roco");
 console.log(misPerros);

 // Agregar elementos a un Arreglo

 console.log(misPerros.length);
 misPerros[misPerros] = "Lassie";
 console.log(misPerros);



