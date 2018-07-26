const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage',()=>{
	it('should generate correct message object',()=>{
		var from = 'Person1';
		var text = 'Text Message';
		var message = generateMessage(from,text);

		expect(typeof message.createdAt).toBe('number');
		expect(message).toMatchObject({
			from,
			text
		});
	})
});

describe('generateLocationMessage',()=>{
	it('should generate correct location object',()=>{
		var from = 'Person';
		var latitude = 1;
		var longitude = 2;
		var url = 'https://www.google.com/maps?q=1,2';
		var locationMessage = generateLocationMessage(from,latitude,longitude);

		expect(typeof locationMessage.createdAt).toBe('number');
		expect(locationMessage).toMatchObject({
			from,url
		});
	});
});