var express = require('express');
var app = express(); 
var http = require('http').Server(app);
var io = require('socket.io')(http,  { cors: { origin: '*' } });

io.on("connection",(socket)=>{
    console.log("connected"); 
    socket.emit("test","hello from server socket conn");
})

http.listen(3000,()=>{
    console.log("listening at port 3000"); 
})