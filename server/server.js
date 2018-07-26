const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
	console.log('New user connected');

	socket.emit('welcomeMessage',generateMessage('Admin','Welcome to the Chat App'));

	socket.broadcast.emit('welcomeUser',generateMessage('Admin','New User Joined'));

	socket.on('newMessage',(message)=>{
		console.log('New Message: ',message);
		io.emit('createMessage',generateMessage(message.from,message.text));
	});

	socket.on('disconnect',()=>{
		console.log('Disconnected from client');
	});
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
