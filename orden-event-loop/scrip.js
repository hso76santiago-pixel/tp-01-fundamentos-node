//Event loop y orden de ejecución//
//El event loop es un mecanismo que permite a Node.js manejar operaciones asíncronas, como la lectura de archivos, la comunicación con bases de datos y la ejecución de temporizadores, sin bloquear el hilo principal de ejecución. Esto significa que mientras se espera a que una operación asíncrona se complete, Node.js puede continuar ejecutando otras tareas.//
//En el ejemplo proporcionado, se observa cómo se ejecutan las instrucciones de manera secuencial, pero cuando se encuentra un temporizador con setTimeout, la función asociada a ese temporizador se coloca en la cola de eventos y se ejecuta después de que todas las demás instrucciones sincrónicas hayan terminado de ejecutarse. Esto demuestra cómo el event loop permite que Node.js maneje operaciones asíncronas sin bloquear el hilo principal de ejecución.//
console.log("A");
setTimeout(() => {
console.log("C");
}, 0);
console.log("B");
console.log("D");
console.log("E");
//En este ejemplo, la salida en consola será:
//A
//B     
//D
//E
//C
//Esto se debe a que la función asociada al temporizador con setTimeout se coloca en la cola de eventos y se ejecuta después de que todas las demás instrucciones sincrónicas hayan terminado de ejecutarse.
//En resumen, el event loop es un mecanismo fundamental en Node.js que permite manejar operaciones asíncronas de manera eficiente, evitando el bloqueo del hilo principal de ejecución y mejorando el rendimiento de las aplicaciones.//