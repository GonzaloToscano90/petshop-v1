// Foor Loop
 // for() let i = 0; i < 10; 1++) {
     //console.log(i);

 //}

 //for (let i = 0; i< 10; i++) {
  //    if(i % 2 === 0) {
  //      console.log(`El numero ${i} es PAR`);
  // } else {
  //       console.log(`El Numero ${i} es IMPAR`);
 //   }
 //}

 const carrito = [
    { nombre:"monitor 20 pulgadas",precio:500},
    { nombre:"television 50 pulgadas", precio :700},
    { nombre :"tablet", precio :300},
    { nombre :"audifonos",precio :200},
    { nombre :"celular",precio:500},
    { nombre: "bocinas", precio:300},
    { nombre: "laptop", precio: 800},
    
];
  
for(let i = 0; i <carrito.length; i++) {
    console.log( carrito[i].nombre );
}
// Whilw Loop

// let i = 20; // inidice

// while(i < 10) { // Condicion

//     console.log("Desde el while loop");

//     i++;  // Incremento
// }




// Do While Loop

let i = 100;

do {
    console.log(i);

    i++;
} while( i < 10);