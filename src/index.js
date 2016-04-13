import 'babel-polyfill';
import 'source-map-support/register';
import fs from 'fs';
import path from 'path';

/**
 * The AppCJS class will load the appropriate appc.js or
 * the legacy appc.json file and return a class with the properties
 * mapped into properties of the instance returned.  The properties
 * returned will be immutable.
 * @class
 */
export default class AppCJS {
	/**
	 * Creates a new instance of the AppCJS class
	 *
	 * @param {String} filename - filename
	 */
	constructor (filename) {
		let js;
		if (/\.js$/.test(filename)) {
			js = require(path.resolve(filename));
		} else if (/\.json$/.test(filename)) {
			js = JSON.parse(fs.readFileSync(filename, 'utf8'));
		} else {
			throw new Error('unknown file type. must be either .js or .json');
		}
		// for each property, attach it to our instance
		Object.keys(js).forEach((k) => {
			Object.defineProperty(this, k, {
				value: js[k],
				enumerable: true,
				writable: false
			});
		});
	}

	/**
	 * returns truthy if the directory contains an appropriate appc.js or appc.json file
	 */
	static exists (dir) {
		let found;
		if (fs.existsSync((found=path.join(dir, 'appc.js')))) {
			return found;
		} else if (fs.existsSync(found=path.join(dir, 'appc.json'))) {
			return found;
		}
		return false;
	}

	/**
	 * returns an instance of AppCJS for a given directory assuming that appc.js or appc.json
	 * is found. if not found an Error is thrown
	 */
	static load (dir) {
		const found = AppCJS.exists(dir);
		if (found) {
			return new AppCJS(found);
		}
		throw new Error('no suitable appc configuration found at ' + dir);
	}

}
