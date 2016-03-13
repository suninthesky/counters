Feature: Static pages

  As a new user
  I want to be able to access the home page
  So I can see what this app is about

  Background:
    Given I am a new user

  Scenario: Visit the home page
    When I navigate to "/"
    Then I should see the title "Home"
