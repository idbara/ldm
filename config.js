'use strict';
const Store = require('electron-store');

module.exports = new Store({
	defaults: {
		server: 'https://sidekem.pemalangkab.go.id/pelayanan/ldm/',
		villageID: '3327092010'
	}
});
