// const socketio = require('socket.io');
// const http = require('http');
// const express = require('express');
// const cors = require('cors');

// const app = express();
// app.use(cors());

// app.use(express.json());


// const server = http.createServer(app);
// const io = socketio(server);


// var app = require('express');
// const cors = require('cors');

// app.use(cors({
//     origin:"http://localhost:4000",
// }));


// const server = require('http').createServer();
// const io = require('socket.io')(server, {
//     origins:["http://127.0.0.1:4000"],
//     path: '/',
//     serveClient: false,
//     // below are engine.IO options
//     pingInterval: 20000,
//     pingTimeout: 5000,
//     cookie: false
// });

// io.on("connection",(socket)=>{
//     console.log("connected"); 
//     socket.emit("test","hai");
// })

// server.listen(5000,()=>{
//     console.log("listening at port 5000"); 
// })