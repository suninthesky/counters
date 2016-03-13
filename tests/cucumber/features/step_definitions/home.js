(function() {

  'use strict';

  module.exports = function() {

    var url = require('url');

    this.Given(/^I am a new user$/, function (callback) {
      callback();
    });

    this.When(/^I navigate to "([^"]*)"$/, function (relativePath) {
      return this.client
        .url(url.resolve(process.env.ROOT_URL, relativePath));
    });

    this.Then(/^I should see the title "([^"]*)"$/, function (expectedTitle) {
      let el = 'h1';
      browser.waitForVisible(el);
      expect(browser.getText(el)).toEqual(expectedTitle);
    });
    
  };

})();
