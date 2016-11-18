const base = (process.env.SITE || 'http://localhost:3000');

describe('Demo', function () {
  describe('with Nightwatch', function () {
    after(function (client, done) {
      client.end(function () {
        done();
      });
    });

    afterEach(function (client, done) {
      if (client.options.screenshots) {
        client.saveScreenshot(client.options.screenshotsPath + '/' + client.currentTest.module + '/' + client.options.desiredCapabilities.browserName + '-after-' + client.currentTest.name + '.png');
      }
      done();
    });

    it('should access a page and assert a valid title', function (client) {
      client
        .url(base + '/docs/examples/elements/forms')
        .expect.element('body').to.be.present.before(100);
      client.assert.containsText('h1', 'Your details');
    });
  });
});
