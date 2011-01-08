var NodegrityServer = require('./lib/nodegrity_server.js');

try {
  new NodegrityServer({port:3333});
}
catch (exception) {
  console.log(exception.stack);
}