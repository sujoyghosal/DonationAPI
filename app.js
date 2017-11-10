var express = require('express');

var app = express();
var server = app.listen(9000);
var io = require('socket.io').listen(server);

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});

function getEventsCount(email) {
    console.log(email + ":30");
    return "30";
}
io.on('connection', function(socket) {
    socket.emit('BOOKS', { title: 'Harry Potter' });
    socket.on('get events count', function(data) {
        console.log(JSON.stringify(data));
        socket.emit('events-count', getEventsCount(data.email));
    });
});