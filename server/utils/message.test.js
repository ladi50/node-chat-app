const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate the correct message object', () => {
		let from = 'Bob';
		let text = 'Hello'
		let message = generateMessage(from, text);

			expect(message.text).toBe('Hello');
			expect(message.from).toBe('Bob');
			expect(message).toInclude({from, text});
			expect(typeof message.createdAt).toBe('number');
	});
});

describe('generateLocationMessage', () => {
	it('should generate the correct location coords', () => {
		let from = 'Gary';
		let latitude = 31.952110800000003;
		let longitude = 34.906551;
		let message = generateLocationMessage(from, latitude, longitude);
		
		expect(message.from).toBe('Gary');
		expect(message.url).toBe('https://www.google.com/maps?q=31.952110800000003,34.906551');
	});
});