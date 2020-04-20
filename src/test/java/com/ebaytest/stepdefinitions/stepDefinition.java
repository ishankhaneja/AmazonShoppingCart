package com.ebaytest.stepdefinitions;

import com.ebaytest.pageobjects.HomePage;
import com.ebaytest.pageobjects.LoginPage;
import com.ebaytest.pageobjects.SearchPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

public class stepDefinition {


    private Hook_DriverInitialization driverhook;
    public WebDriver driver;
    public static Logger logs;

    public stepDefinition(Hook_DriverInitialization driverhook) {
        this.driverhook = driverhook;
    }


    @Given("^the user launches the browser$")
    public void user_launches_chrome_browser() {
        driver = driverhook.getDriver();
        driver.manage().window().maximize();
        logs = Logger.getLogger("ebayWebTest");
        PropertyConfigurator.configure("Configurations/Log4j.properties");
        logs.info("*****Broswer launched*****");
    }

    @When("^navigates to \"([^\"]*)\"$")
    public void user_navigates_to_url(String url){
        try {
            logs.info("*****Opening website*****");
            driver.get(url);
        } catch (Exception e) {
            logs.error("Error opening the URL");
            e.printStackTrace();
            Assert.fail();
        }
        Assert.assertEquals(driver.getTitle(),"Amazon.com.au: Shop online for Electronics, Apparel, Toys, Books, DVDs & more");
        logs.info("*****User is on Website*****");
    }

    @Then("^clicks on Sign in button$")
    public void user_clicks_button() {
        driver.findElement(By.xpath("//span[text()='Hello. Sign in']")).click();
    }

    @When("^user logs into the website$")
    public void user_signs_in() {
        LoginPage login = new LoginPage(driver);
        login.enterUsedId();
        login.clickContinue();
        login.enterPassword();
        login.clickSignin();
        logs.info("*****User is on homepage*****");
    }

    @And("^user searches for the product$")
    public void user_searches_product(){
        HomePage home = new HomePage(driver);
        home.searchProduct();
        logs.info("*****User is on searching for product*****");
    }

    @Then("^user should select a product and proceeds to checkout$")
    public void user_selects_product(){
        SearchPage search = new SearchPage(driver);
        search.selectProduct(driver);
        search.addToCart();
        search.proceedCheckout();
        logs.info("*****User finds product*****");
    }


}
