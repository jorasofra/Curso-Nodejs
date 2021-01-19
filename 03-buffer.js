/*
    BUFFERS
        Una tira de bytes (datos binarios)
        Similar a un array de enteros
        Tamaño fijo
        Manipular datos directamente
            Sockets
            Streams
            Implementar protocolos complejos
            Manipulación de ficheros/imágenes
            Criptografía
*/

'use strict'

var buff = new Buffer.alloc(100), 
    buff2 = new Buffer.alloc(26),
    str = '\u00bd + \u00bc = \u00be'

buff.write('abcd', 0, 4, 'ascii')
console.log(
    buff,
    buff.toString('ascii'),
    str,
    str.length + ' caracteres',
    Buffer.byteLength(str, 'utf8') + ' bytes',
    buff2.length
)

for (var i = 0; i < buff2.length; i++)
{
    buff2[i] = i + 97
}

console.log(buff2.toString('ascii'))