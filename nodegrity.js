var NodegrityServer = require('./lib/nodegrity_server.js');

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err);
});

new NodegrityServer({});