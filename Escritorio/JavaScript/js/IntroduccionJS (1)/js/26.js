// This
const reservacion = {
    nombre: "fer",
    apellido:"toscano",
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log (`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);

    }
}
const resvacion2 = {
    nombrte: `pedro`,
    apellido: `De la torre`,
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);

    }
}

reservacion.informacion();
reservacion2.informacion();