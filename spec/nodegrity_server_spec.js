var zombie          = require('zombie');
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

  it('serves static files through HTTP', function() {
    var server = NodegrityServer(this.valid_config);
    var requestFinished = false;
    zombie.visit("http://localhost:"+this.valid_config['port']+"/", {debug: false}, function(err, browser) {
      requestFinished = true;
      expect(err).toBeNull();
      if (err === null) {
        expect(browser.lastResponse.status).toBe(200);
      }
    });
    waitsFor(function() { return requestFinished; }, "Time out", 2000);
  });

  it('servers the main page of the application at /', function() {
    var server = NodegrityServer(this.valid_config);
    var requestFinished = false;
    zombie.visit("http://localhost:"+this.valid_config['port']+"/", {debug: false}, function(err, browser) {
      requestFinished = true;
      expect(err).toBeNull();
      if (err === null) {
        expect(browser.response[2]).toMatch(/Nodegrity/);
        expect(browser.response[2]).toMatch(/html/);
        console.log(browser.response);
      }
    });
    waitsFor(function() { return requestFinished; }, "Time out", 2000);
  });
});