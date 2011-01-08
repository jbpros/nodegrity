var http   = require('http');
var static = require('node-static');

function NodegrityServer(config) {
  if (typeof(config) === 'undefined') {
    throw("Missing configuration");
  }
  this.config = config;
  
  var fileServer = new static.Server('./public');
  http.createServer(function (request, response) {
    request.addListener('end', function () {
      fileServer.serve(request, response);
    });
  }).listen(this.config['port']);
};

module.exports = NodegrityServer;