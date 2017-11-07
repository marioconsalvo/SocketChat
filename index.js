const express = require('express');
const sockio = require('socket.io');
const public = __dirname+'/public';

var port = process.env.PORT || 3000;
var app = express();
var http = require('http').Server(app);
var io = sockio(http);

app.get('/', function (req,res) {
  res.sendFile(public+'/index.html')
})

//  console.log(socket.id+' connected');
  socket.on('disconnect', function () {
    console.log(socket.id+' disconnected');
  });

  socket.on('send message', function (data) {
    io.emit('send message', data);
  })
});


http.listen(port, function () {
  console.log('listening on *:'+port);
})
