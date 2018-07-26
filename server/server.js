const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
	console.log('New user connected');

	socket.emit('welcomeMessage',{
		from: 'Admin',
		text: 'Welcome to the Chat App',
		createdAt: new Date().getTime()
	});

	socket.broadcast.emit('welcomeUser',{
		from: 'Admin',
		text: 'New User Joined',
		createdAt: new Date().getTime()
	});

	// socket.emit('createMessage',{
	// 	from: 'Person1',
	// 	text: 'Message from server',
	// 	createdAt: 123
	// });

	// socket.emit('newEmail',{
	// 	from: 'abc@example.com',
	// 	text: 'sample text',
	// 	createdAt: 123
	// });

	socket.on('newMessage',(message)=>{
		console.log('New Message: ',message);
		io.emit('createMessage',{
			from: message.from,
			text: message.text,
			createdAt: new Date().getTime()
		});
		// socket.broadcast.emit('createMessage',{
		// 	from: message.from,
		// 	text: message.text,
		// 	createdAt: new Date().getTime()
		// });
	});

	socket.on('disconnect',()=>{
		console.log('Disconnected from client');
	});
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
