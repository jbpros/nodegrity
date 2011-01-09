var helper = require('../support/spec_helper.js');

describe('public/index.html', function() {
  it('titles "Nodegrity"', function() {
    var finished = false;
    helper.visitAppPage('/', {debug: false}, function(err, browser) {
      expect(err).toBeNull();
      if (err === null) {
        expect(browser.text('title')).toBe('Nodegrity');
      }
      finished = true;
    });
    waitsFor(function() { return finished; }, "Time out", 2000);
  });
});