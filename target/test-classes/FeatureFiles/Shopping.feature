@cart
Feature: Login to ebay and add an item to cart.

  Scenario Outline: Verify the user is able to shop.
    Given the user launches the browser
    When navigates to "<url>"
    Then clicks on Sign in button
    When user logs into the website
    And user searches for the product
    Then user should select a product and proceeds to checkout
    Examples:
      | url                       |
      | https://www.amazon.com.au/|