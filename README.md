
# Trabajo práctico 01

## Datos Personales
Nombre y Apellido: Héctor Santiago Orellana Gonzalez
Correo Electrónico: hso76santiago@gmail.com
teléfono: 3834-801585

## Descripción
Este proyecto construye un script en Node.js que procesa datos de la ficha de una pelicula e imprime su ficha técnica estructurada en la consola y en un archivo de texto. Además, incluye un script secundario para analizar el orden de ejecución de tareas en el entorno de Node.js.

## Cómo ejecutar
Para ejecutar los programas desde la terminal en la raíz del proyecto, uso el siguiente comando

 node ficha-pelicula
## Archivo generado
El archivo de salida se genera automáticamente en la siguiente ruta:
ficha-pelicula/salida/ficha-pelicula.txt

## Conceptos
¿Qué diferencia existe entre JavaScript, V8 y el runtime de Node.js?

JavaScript: Es el lenguaje de programación con sus reglas de sintaxis y tipos de datos.

V8: Es el motor desarrollado por Google que toma el código JavaScript y lo traduce a código de máquina para que el procesador lo ejecute rápido.

Runtime de Node.js: Es el entorno completo que envuelve al motor V8 y le añade herramientas del sistema operativo (como lectura de archivos y red) para poder ejecutar JavaScript en la computadora fuera de un navegador.

##  ¿Por qué el callback de setTimeout(..., 0) se ejecuta después del código principal?

Se ejecuta después porque Node.js organiza las tareas mediante el Event Loop. Cuando usamos setTimeout, su función callback no se ejecuta de inmediato, sino que se envía a una cola de espera (Callback Queue). Node.js primero procesa todo el código síncrono que está en la pila principal (Call Stack), y únicamente cuando esta queda vacía, el Event Loop mueve la función de la cola a la pila para ejecutarla.

## ¿Cuál es la diferencia general entre I/O bloqueante y no bloqueante?

I/O Bloqueante: Detiene por completo la ejecución del programa mientras espera que se complete una lectura o escritura de datos (por ejemplo, leer un archivo pesado). Nada más puede avanzar hasta que termine esa operación.

I/O No bloqueante: Inicia la operación de entrada/salida y permite que el programa siga ejecutando otras instrucciones inmediatamente sin quedarse congelado a la espera.

## ¿Qué responsabilidades cumplen node:path y node:fs en index.js?

node:path: Permite construir y gestionar rutas de archivos de forma segura y portable, evitando errores por las diferencias entre sistemas operativos (como las barras / en Linux/Mac o \ en Windows).

node:fs: Es el módulo del sistema de archivos (File System) que permite crear la carpeta de destino y escribir directamente la ficha técnica en el archivo ficha-pelicula.txt.





