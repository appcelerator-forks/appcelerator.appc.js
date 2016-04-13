import fs from 'fs';
import path from 'path';
import AppCJS from '../src/index';

describe('appc.js', () => {

	it('should load appc.js', () => {
		let app = new AppCJS(path.join(__dirname, 'fixtures', 'appc.js'));
		expect(app.name).to.equal('name');
		expect(app.type).to.equal('type');
	});

	it('should load appc.json', () => {
		let app = new AppCJS(path.join(__dirname, 'fixtures', 'appc.json'));
		expect(app.name).to.equal('name');
		expect(app.type).to.equal('type');
	});

	it('should exist', () => {
		expect(AppCJS.exists(__dirname)).to.be.false;
		expect(AppCJS.exists(path.join(__dirname, 'fixtures'))).to.be.ok;
	});

	it('should load', () => {
		const instance = AppCJS.load(path.join(__dirname, 'fixtures'));
		expect(instance).to.be.ok;

		var fn = function () { AppCJS.load(__dirname, 'fixtures'); }
		expect(fn).to.throw(Error);
	});
});
