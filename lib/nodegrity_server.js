function NodegrityServer(config) {
  if (typeof(config) === 'undefined') {
    throw("Missing configuration");
  }
  this.config = config;
};

module.exports = NodegrityServer;