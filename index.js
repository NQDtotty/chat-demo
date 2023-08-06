const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
    console.log("User connected with server");
    socket.on('on-chat', message => {
        io.emit('user-chat', message)
    })
})

server.listen(3001, () => {
    console.log("Server start on port 3001");
})