
// crear un archivo saludo, para ello vamos a trabajar con argumentos//

//process es un objeto global que nos permite acceder a información sobre el proceso de Node.js en ejecución, incluyendo los argumentos que se pasan al script desde la línea de comandos.//
const nombre = process.argv[2] ?? "Estudiante";

console.log(`Bienvenido, ${nombre}`);