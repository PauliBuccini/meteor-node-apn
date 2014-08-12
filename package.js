Package.describe({
  summary: "Meteor smart package for node-apn"
});

Npm.depends({
  apn: "1.4.3", 
  debug: "0.7.2"
});

Package.on_use(function (api) {
  api.add_files([
    'lib.js'
  ], 'server');

  api.export('APN','server');
});
