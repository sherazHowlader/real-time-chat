const express = require('express');
const  { createServer} = require('node:http');
const { join} = require('node:path');
const { Server } = require('socket.io');

const app = express();
const  server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    // res.send('hello sheraz');
    res.sendFile(join(__dirname,'index.html'))
})


io.on('connection', (socket) => {
    // receive message from client side
    socket.on('message', (msg) => {
        // send message to client side
        io.emit('chat', msg);
    })
})


server.listen(3000, () => {
    console.log('server running')
})