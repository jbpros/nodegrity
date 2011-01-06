var NodegrityServer = require('../lib/nodegrity_server');
describe('NodegrityServer', function() {
  var port = 4444;

  beforeEach(function() {
    this.valid_config = {port: port};
    port++;
  });
  
  it('has a configuration', function() {
    var server = new NodegrityServer(this.valid_config);
    expect(server.config).toBe(this.valid_config);
  });

  describe('on creation', function() {
    it('requires a configuration hash', function() {
      expect(function() {
        var server = NodegrityServer();
      }).toThrow("Missing configuration");
    });
  });
});