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
  "duration": 62588508,
  "error_message": "org.openqa.selenium.WebDriverException: Cannot find firefox binary in PATH. Make sure firefox is installed. OS appears to be: MAC\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027C02ZQ03JLVDN\u0027, ip: \u0027fe80:0:0:0:146a:7117:45a2:afe1%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.1\u0027, java.version: \u00271.8.0_232\u0027\nDriver info: driver.version: FirefoxDriver\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:100)\n\tat java.util.Optional.orElseGet(Optional.java:267)\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinary(FirefoxOptions.java:216)\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:187)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:147)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\n\tat com.amazonWeb.stepdefinitions.Hook_DriverInitialization.driverSetup(Hook_DriverInitialization.java:44)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\n\tat org.testng.TestRunner.run(TestRunner.java:505)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\n\tat org.testng.TestNG.run(TestNG.java:1017)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:283)\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:120)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.user_clicks_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.user_signs_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.user_searches_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.user_selects_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 84676,
  "error_message": "java.lang.NullPointerException\n\tat com.amazonWeb.stepdefinitions.Hook_DriverInitialization.driverKill(Hook_DriverInitialization.java:81)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\n\tat org.testng.TestRunner.run(TestRunner.java:505)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\n\tat org.testng.TestNG.run(TestNG.java:1017)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:283)\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:120)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\n",
  "status": "failed"
});
});