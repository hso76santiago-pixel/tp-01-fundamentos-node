//defincion de una contante e importacion del modulo fs//
const fs = require("node:fs");
// fs no es un modulo de terceros, es un modulo nativo de node.js que nos permite trabajar con el sistema de archivos del sistema operativo. //
//se imprime en consola un mensaje indicando que se va a leer un archivo de manera bloqueante// 
console.log("1. Antes de leer");
// se lee el contenido del archivo de manera bloqueante utilizando fs y el metodo readFileSync//
const contenido = fs.readFileSync(__filename, "utf8");
// se imprime en consola un mensaje indicando la cantidad de caracteres leidos del archivo//
console.log(`2. Se leyeron ${contenido.length} caracteres`);
// se imprime en consola un mensaje indicando que se ha terminado de leer el archivo//
console.log("3. Fin");