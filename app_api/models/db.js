var mongoose = require('mongoose');

require('./villages.js');


var dbURI = 'mongodb://localhost/MyBotControl';

var conectado=function(){
    console.log("conectado a BBDD MongoDB "+dbURI);
}

var error=function(error){
    console.log("Error de conexión "+error);
}

var desconectado=function(){
    console.log("desconectado de la BBDD MongoDB "+dbURI);
}

var cierreControlado=function(msg, callback){
    mongoose.connection.close(function(){
        console.log("desconectado de la BBDD MongoDB desde "+msg);
    }
        )
}

process.once('SIGUSR2', function () {
    cierreControlado('nodemon restart', function () {
    process.kill(process.pid, 'SIGUSR2');
    });
});

process.on('SIGINT', function () {
    cierreControlado('Aplicación terminada', function () {
    process.exit(0);
});
});

process.on('SIGTERM', function() {
    cierreControlado('Heroku app shutdown', function () {
    process.exit(0);
});
});

mongoose.connect(dbURI);

mongoose.connection.on('connected',conectado);
mongoose.connection.on('error', error);
mongoose.connection.on('disconnected', desconectado);