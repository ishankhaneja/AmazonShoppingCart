# AmazonShoppingCart
## Tech Challenge to automate basic shopping flow using selenium
### Login to Amazon and search for an item and add it to cart and purchase it


## Tools and technologies used:

1. Language: Java 
2. Testing framework: TestNg
3. BDD framework: Cucumber jvm
4. Automation tool: Selenium webdriver
5. Build tool: maven
7. Browser: Chrome, IE, Gecko


## Features of the framework
1. BDD framework using Cucumber-jvm. Feature files can be written easily using Given,When, Then etc.
2. The browser to use for the test execution is a configurable property.
3. Screenshots and logs are captured for the execution.
4. Html report gets generated after each test run and can be found /target folder.
5. Test Data is captured from propert file.


**package: resources** : It has exe of chromedriver, geckodriver and IE. This is required while creating the webdriver session.

## Setting up the project

Unzip the file in local system and run :

**$ mvn clean**


## Execution of tests  
There is 1 feature file to login to Amazon and add an item and proceed to checkout. The final purchase is not done as no dummy cards are available.

## Run the test using Maven Build
The Maven build agent can trigger the tests by launching the Maven on IDE and double clicking the "test" in lifecycle:


## Run the test using Terminal
Command line can also be used to run the tests:

**$ mvn test**


