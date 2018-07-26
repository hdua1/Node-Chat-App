const expect = require('expect');

const {generateMessage} = require('./message');

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