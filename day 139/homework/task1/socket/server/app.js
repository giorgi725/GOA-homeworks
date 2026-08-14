const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server} = require('socket.io')

const server = http.createServer();

const io = new Server(server, {
    cors: "*"
})

io.on('connection', (socket) => {
    console.log(`new socked connected: ${socket.id}`)

    socket.on('msg', (msg) => {
        socket.emit('receive', msg)
    })
})

// const app = express();

// app.get('/health', (req, res) => {
//     res.send('Server is running healthy');
// })

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})