const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Serve static files (like index.html)
app.use(express.static('.'));

// Socket.IO logic
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // Broadcast message to all
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start server
http.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
