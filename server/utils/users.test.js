const expect = require('expect');

const {Users} = require('./users.js');

describe('Users', () => {
	let users;

	beforeEach (() => {
		users = new Users();
		users.users = [{
			id: '1',
			name: 'Adi',
			room: 'Banana'
		},
		{
			id: '2',
			name: 'Ben',
			room: 'Orange'
		},
		{
			id: '3',
			name: 'Jenny',
			room: 'Banana'
		}];
	});

	it('should add a new user', () => {
		let users = new Users();
		let user = {
			id: '123', 
			name: 'Adi',
			room : 'Hamburger'
		};
		let resUser = users.addUser(user.id, user.name, user.room);

		expect(users.users).toInclude(user);
		expect(users.users).toEqual([user]);
	});

	it('should remove a user', () => {
		let user = users.removeUser('3');

		expect(user.name).toBe('Jenny');
		expect(users.users.length).toBe(2);
	});

	it('should not remove a user', () => {
		let user = users.removeUser('5');

		expect(404);
		expect(user).toNotExist();
		expect(users.users.length).toBe(3);
	});

	it('should find a user', () => {
		let user = users.getUser('2');

		expect(user.name).toBe('Ben');
	});

	it('should not find a user', () => {
		let user = users.getUser('4');

		expect(404);
		expect(user).toNotExist();
	});

	it('should return names for Banana room', () => {
		let userList = users.getUserList('Banana');

		expect(userList).toEqual(['Adi', 'Jenny']);
	});

	it('should return names for Orange room', () => {
		let userList = users.getUserList('Orange');

		expect(userList).toEqual(['Ben']);
	});
});