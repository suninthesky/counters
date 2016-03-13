Feature: Signup

  As an new user
  I want to be able sign up
  So I can use the app

  Background:
    Given I am a new user

  Scenario: New user signs up
    When I navigate to "/"
    Then I should see the "Create account" button
    When I enter "123@123.com" and password "123123"
    And submit the form
    Then I should be redirected to the "/counters" page
    And see a the "Add a counter" prompt
