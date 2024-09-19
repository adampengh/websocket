const express = require('express')
const app = express()
const server = require('http').createServer(app)

const { Server } = require('socket.io')
const io = new Server(server, {
  cors: {
    origin: '*',
  }
})


io.on('connection', (socket) => {
  socket.on('webhookApiRouteHandler', (data) => {
    io.emit('webhookExecution', data)
  })
})

server.listen(3000, () => {
  console.log('Websocket server listening on *:3000')
})
