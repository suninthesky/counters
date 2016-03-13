Feature: Login

  As an existing user
  I want to be able to login
  So I can see my data

  Background:
    Given I am an existing user
    And I am not already logged in

  Scenario: Exisiting user log's in
    When I navigate to "/"
    Then I click the ".login" button, I'm taken to "/login"
    When I enter "123@123.com" and password "123123"
    And I submit the form
    Then I should be redirected to the "/counters" page
    And see a list of my counters
