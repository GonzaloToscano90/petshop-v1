const carrito = [
    { nombre:"monitor 20 pulgadas",precio:500},
    { nombre:"television 50 pulgadas", precio :700},
    { nombre :"tablet", precio :300},
    { nombre :"audifonos",precio :200},
    { nombre :"celular",precio:500},
    { nombre: "bocinas", precio:300},
    { nombre: "laptop", precio: 800},
    
    ];
    // ForEach
    const arreglo1 = carrito.forEach( producto => console.log(producto.nombre));

    // map
    const arreglo2 = carrito.map( producto => `${producto.nombre} - ${producto.precio}`);

    console.log(caarrito2);