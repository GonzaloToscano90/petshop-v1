// Classes

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
     formatearProducto() {
       return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
     }
     
     obtenerPrecio() {
       console.log(this.precio);
     }
}

const producto2 = new Producto(`Monitor Curvado de 800"`);
const producto3 = new Producto(`Laptop`,300);

// Herencia 

class libro extends producto {
  constructor(nombre, precio, isbn) {
    super( nombre,precio);
    this.isbn;
  }
  formatearProducto() {
    return `${super.formatearProducto () } y su ISBN es ${this.isbn}`;
  }

  obtenerPrecio() {
    super.obtenerPrecio();
    console.log( "Y si hay en existencia");
  }
}

const libro = new libro("JavaScripts la Revoluciom",120,"291234578362725");
console.log(libro.formatearProducto() );
console.log(libro.obtenerPrecio() );
console.log(producto2.formatearProducto() );
