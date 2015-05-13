Package.describe({
  name: 'pauli:node-apn',
  summary: 'Button styles',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];


Npm.depends({
  apn: "1.6.2"
});

Package.onUse(function (api) {
	api.versionsFrom('1.0.2.1');
  api.addFiles('lib.js', S);
	api.export('APN', S);
});
