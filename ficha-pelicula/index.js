
//programa que genera una ficha de película en un archivo de texto utilizando los módulos nativos de Node.js "fs" y "path".//
const fs = require("node:fs");
const path = require("node:path");

const pelicula = {
titulo: "Una Mente Brillante",
direccion: "Ron Howard",
anio: 2001,
generos: ["Drama", "Biografía", "Romance"], 
disponible: true,
};
console.log("Pelicula:", pelicula);

const generosComoTexto = pelicula.generos.join(", ");
const estado = pelicula.disponible ? "Disponible" : "No disponible";
console.log("Generos:", generosComoTexto);
console.log("Estado:", estado);

const ficha = `FICHA DE PELÍCULA
=================
Título: ${pelicula.titulo}     
Dirección: ${pelicula.direccion}
Año: ${pelicula.anio}
Géneros: ${generosComoTexto}    
Estado: ${estado}
`;
const carpetaSalida = path.join(__dirname, "salida");
const rutaArchivo = path.join(carpetaSalida, "ficha-pelicula.txt");

fs.mkdirSync(carpetaSalida, { recursive: true });
fs.writeFileSync(rutaArchivo, ficha, "utf8");   

console.log(ficha);
console.log(`Archivo generado en: ${rutaArchivo}`);

