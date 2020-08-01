const expect = require('chai').expect;
const rewire = require('rewire');

let app = rewire('../client.js');
let frontend = rewire('../frontend.js');

// app (client.js)

describe ('getAllBlogs', () => {
	let getAllBlogs = app.__get__('getAllBlogs');
	
	it('should be a function', () => {
		expect(getAllBlogs).to.be.a('function');
	});
	it('should ... ', () => {
		expect(getAllBlogs()).to.
	});
})


// frontend
