const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
	it('should reject non-string values', () => {
		let str = isRealString(33);

		expect(str).toNotBeA('string');
	});

	it('should reject string with only spaces', () => {
		let str = isRealString('   ');

		expect(str).toNotBeA('string');
	});

	it('should allow string with non-space characters', () => {
		let str = isRealString('ff');

		expect(str).toBe(true);
	});
});