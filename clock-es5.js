'use strict'

var Clock = (function(){
    var EventEmitter = require('events').EventEmitter,
    inherits = require('util').inherits

    //Constructor
    var Clock = function () {
        var self = this

        setInterval(function(){
            //console.log('Hola')
            self.emit('tictac')
        }, 1000)
    }

    inherits(Clock, EventEmitter)

    Clock.prototype.theTime = function(){
        var date = new Date(),
            hrs = date.getHours(),
            min = date.getMinutes(),
            seg = date.getSeconds(),
            msg = hrs + ":" + min + ":" + seg

        console.log(msg)
    }
})()

module.exports = Clock;