// Metodos de propiedad
 const reproductor = {
     reproducir : function( ){
         console.log("Reproduciendo Cancion")
     },
     pausar: function() {
         console.log("Pausando...")
     },

crearPLaylist: function(nombre) {
    console.log(`Creando la playlist: ${nombre}`)

},
reproducirPlaylist: function(nombre) {
    console.log(`Reproduciendo la playlist: ${nombre}`) 
},

}



reproductor.borrarCancion = function(id){
    console.log(`Eliminando la cancion: ${id}`)

}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPLaylist(`Heavy Metal`);
reproductor.reproducirPlaylist(`Heavy Metal`);

