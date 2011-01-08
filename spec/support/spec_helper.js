var NodegrityServer = require('../../lib/nodegrity_server');
var zombie = require('zombie');

var config = { port: 12345 };

module.exports = {
  visitAppPage: function(path, options, callback) {
    var server = NodegrityServer(config);
    zombie.visit("http://localhost:"+config['port']+path, options, function(err, browser) {
      callback(err, browser);
    });
    config['port']++;
  }
};