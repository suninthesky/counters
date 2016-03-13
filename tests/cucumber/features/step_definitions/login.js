(function() {

  'use strict';

  module.exports = function() {

    this.Given(/^I am an existing user$/, function () {
      fixtures.user.create();
    });

    this.Given(/^I am not already logged in$/, function () {
      fixtures.user.logout();
    });

    this.Then(/^I click the "([^"]*)" button, I'm taken to "([^"]*)"$/, function (loginButton, loginPath) {
      this.client.waitForVisible(loginButton);
      this.client.click(loginButton);
      expect(browser.getUrl()).toEqual(process.env.ROOT_URL + loginPath);
    });

    this.When(/^I enter "([^"]*)" and password "([^"]*)"$/, function (email, password) {
      this.client.setValue("[name='email']", email);
      this.client.setValue("[name='password']", password);
    });

    this.When(/^I submit the form$/, function () {
      this.client.click('input[type="submit"]');
    });

    this.Then(/^I should be redirected to the "([^"]*)" page$/, function (countersPath) {
      browser.pause(1000);
      expect(browser.getUrl()).toEqual(process.env.ROOT_URL + countersPath);
    });

    this.Then(/^see a list of my counters$/, function () {
      pending();
    });

  };

})();
