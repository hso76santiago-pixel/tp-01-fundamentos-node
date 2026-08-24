//este código no va a funcionar porque no se importan los módulos nativos fs y path, que son necesarios para crear la carpeta de salida y escribir el archivo de texto con la ficha de la película.//
const pelicula = {
titulo: "Horizonte Infinito",
direccion: "Alex Rivera",
anio: 2024,
generos: ["Ciencia ficción", "Aventura"],
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
