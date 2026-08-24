//Estas líneas de código en JavaScript sirven para transformar y mostrar la información de una película de una forma clara y fácil de leer para el usuario.//
// Primero, se utiliza el método join() para combinar los géneros de la película en una sola cadena de texto, separando cada género con una coma y un espacio. Esto permite que los géneros se presenten de manera más legible.//
// Luego, se utiliza un operador ternario para determinar el estado de disponibilidad de la película. Si la propiedad disponible es verdadera, se asigna la cadena "Disponible" a la variable estado; de lo contrario, se asigna "No disponible". Esto proporciona una forma rápida y concisa de mostrar si la película está disponible o no.//
// Finalmente, se utilizan console.log() para imprimir en la consola los géneros de la película y su estado de disponibilidad, lo que permite al usuario ver esta información de manera inmediata.//

const generosComoTexto = pelicula.generos.join(", ");

const estado = pelicula.disponible ? "Disponible" : "No disponible";

console.log("Generos:", generosComoTexto);

console.log("Estado:", estado);