'use strict'

var myData = require('./my-data.js'),
    Clock = require('./clock-es5'),
    cucu = new Clock()

console.log(
    myData.name,
    myData.email,
    myData.phone
)

cucu.on('tictac', function(){
    cucu.theTime()
})