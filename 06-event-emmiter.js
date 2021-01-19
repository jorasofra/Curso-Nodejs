/*
    Patrón Observador: https://es.wikipedia.org/wiki/Observer_(patr%C3%B3n_de_dise%C3%B1o)
*/

'use strict'

const { EventEmitter } = require('events')

var EventEmmiter = require('events').EventEmitter,
    pub = new EventEmitter()

pub
    .on('myEvent', function(message){
        console.log(message)
    })
    .once('myEvent', function(message){
        console.log('Se emite la primera vez: ' + message)
    })
    .emit('myEvent', 'Soy un emisor de eventos')
pub.emit('myEvent', 'Volviendo a emitir')
pub.removeAllListeners('myEvent')
pub.emit('myEvent', 'Volviendo a emitir por tercera vez')