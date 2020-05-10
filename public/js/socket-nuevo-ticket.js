//Comando para establecer la conexion

var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect',function(){

    console.log('Conectado con el servidor');



});

socket.on('disconnect', function(){
    console.log('Desconectado del servidor');

});

 socket.on('estadoActual',function(data){

    console.log(data);
    label.text( data.actual );
    
 });

$('button').on('click', function(){

    socket.emit('siguienteTicket',null, function(siguienteTicket){
        label.text(siguienteTicket);
    });
    console.log('click');
});

