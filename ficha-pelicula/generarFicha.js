// This code snippet generates a movie information sheet (ficha de película) in a text file format.//
// It uses the Node.js native modules "fs" and "path" to handle file system operations and path manipulations.//
// The code defines a movie object with properties such as title, director, year, genres, and availability.//
// It then formats this information into a structured text format and writes it to a file named "ficha-pelicula.txt" in a specified output folder.//
// The code also ensures that the output folder is created if it doesn't already exist, and it provides feedback to the user by printing the generated information and the file path to the console.//
// The code uses template literals to create a multi-line string that represents the movie information sheet.//

const ficha = `FICHA DE PELÍCULA
=================
Título: ${pelicula.titulo}
Dirección: ${pelicula.direccion}
Año: ${pelicula.anio}
Géneros: ${generosComoTexto}
Estado: ${estado}
`;
// Define the output folder and file path//
// The path.join() method is used to create a cross-platform compatible path to the output folder and file.//
// The __dirname variable represents the current directory of the script being executed, ensuring that the output folder is created in the correct location.//
const carpetaSalida = path.join(__dirname, "salida");
// The path.join() method is used again to create a cross-platform compatible path to the output file "ficha-pelicula.txt" within the output folder.//
// The resulting path is stored in the rutaArchivo variable, which will be used later to write the ficha content to the file.//
// The fs.mkdirSync() method is used to create the output folder if it doesn't already exist.//
// The { recursive: true } option allows the creation of nested directories if needed.//
// The fs.writeFileSync() method is used to write the ficha content to the specified output file in UTF-8 encoding.//
// Finally, console.log() is used to print the ficha content and the path to the generated file in the console, providing feedback to the user about the successful creation of the output file.//
const rutaArchivo = path.join(carpetaSalida, "ficha-pelicula.txt");


fs.mkdirSync(carpetaSalida, { recursive: true });
fs.writeFileSync(rutaArchivo, ficha, "utf8");

console.log(ficha);
console.log(`Archivo generado en: ${rutaArchivo}`);
