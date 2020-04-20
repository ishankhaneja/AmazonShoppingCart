$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Shopping.feature");
formatter.feature({
  "line": 2,
  "name": "Login to ebay and add an item to cart.",
  "description": "",
  "id": "login-to-ebay-and-add-an-item-to-cart.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@cart"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify the user is able to shop.",
  "description": "",
  "id": "login-to-ebay-and-add-an-item-to-cart.;verify-the-user-is-able-to-shop.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the user launches the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "navigates to \"\u003curl\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "clicks on Sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user logs into the website",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user searches for the product",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should select a product and proceeds to checkout",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "login-to-ebay-and-add-an-item-to-cart.;verify-the-user-is-able-to-shop.;",
  "rows": [
    {
      "cells": [
        "url"
      ],
      "line": 12,
      "id": "login-to-ebay-and-add-an-item-to-cart.;verify-the-user-is-able-to-shop.;;1"
    },
    {
      "cells": [
        "https://www.amazon.com.au/"
      ],
      "line": 13,
      "id": "login-to-ebay-and-add-an-item-to-cart.;verify-the-user-is-able-to-shop.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2605012239,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify the user is able to shop.",
  "description": "",
  "id": "login-to-ebay-and-add-an-item-to-cart.;verify-the-user-is-able-to-shop.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@cart"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user launches the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "navigates to \"https://www.amazon.com.au/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "clicks on Sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user logs into the website",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user searches for the product",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should select a product and proceeds to checkout",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.user_launches_chrome_browser()"
});
formatter.result({
  "duration": 388190277,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.amazon.com.au/",
      "offset": 14
    }
  ],
  "location": "stepDefinition.user_navigates_to_url(String)"
});
formatter.result({
  "duration": 4258755391,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_clicks_button()"
});
formatter.result({
  "duration": 541729621,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_signs_in()"
});
formatter.result({
  "duration": 5520840229,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_searches_product()"
});
formatter.result({
  "duration": 3230807822,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_selects_product()"
});
formatter.result({
  "duration": 10959975367,
  "status": "passed"
});
formatter.after({
  "duration": 221252555,
  "status": "passed"
});
});