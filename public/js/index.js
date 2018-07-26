var socket = io();

socket.on('connect',function(){
	console.log('Connected to server');

	// socket.emit('newMessage',{
	// 	from: 'Person2',
	// 	text: 'Message from Client'
	// });

	// socket.emit('createEmail',{
	// 	to: 'adkh@example.com',
	// 	text: 'Hello!'
	// });
});

socket.on('disconnect',function(){
	console.log('Disconnected from server');
});

// socket.on('newEmail',function(email){
// 	console.log('New Email',email);
// })

socket.on('createMessage',function(message){
	console.log('New Message: ',message);
});