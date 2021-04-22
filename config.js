'use strict';
const Store = require('electron-store');

module.exports = new Store({
	defaults: {
		server: 'http://localhost:5000/pelayanan/ldm/',
		villageID: '3327092010'
	}
});
