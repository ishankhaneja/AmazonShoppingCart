package com.amazonWeb.stepdefinitions;

import com.amazonWeb.pageobjects.HomePage;
import com.amazonWeb.pageobjects.LoginPage;
import com.amazonWeb.pageobjects.SearchPage;
import com.amazonWeb.utilities.TakeScreenShot;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import static org.testng.Assert.assertTrue;

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
    public void user_navigates_to_url(String url) throws Exception {
        try {
            logs.info("*****Opening website*****");
            driver.get(url);
        } catch (Exception e) {
            logs.error("Error opening the URL");
            e.printStackTrace();
            Assert.fail();
        }
        // Verify the user is on website landing page
        Assert.assertEquals(driver.getTitle(),"Amazon.com.au: Shop online for Electronics, Apparel, Toys, Books, DVDs & more");
        // logs to capture execution
        logs.info("*****User is on Website*****");
        // taking screenshot
        TakeScreenShot.ScreenShot(driver, "WebsiteReached");
    }

    @Then("^clicks on Sign in button$")
    public void user_clicks_button() {
        driver.findElement(By.xpath("//span[text()='Hello. Sign in']")).click();
    }

    @When("^user logs into the website$")
    public void user_signs_in() throws Exception {
        LoginPage login = new LoginPage(driver);
        login.enterUsedId();
        login.clickContinue();
        login.enterPassword();
        login.clickSignin();
        // verify the user is logged in
        String strWelcomeText = driver.findElement(By.xpath("//span [contains(text(),'Hello, ' )]")).getText();
        assertTrue(strWelcomeText.contains("Hello,"));
        // log to capture successful sign in
        logs.info("*****User is on homepage*****");
        // taking screenshot
        TakeScreenShot.ScreenShot(driver, "LoggedIn");
    }

    @And("^user searches for the product$")
    public void user_searches_product() throws Exception {
        HomePage home = new HomePage(driver);
        home.searchProduct();
        // log to capture search
        logs.info("*****User is on searching for product*****");
        // taking screenshot
        TakeScreenShot.ScreenShot(driver, "SearchProduct");
    }

    @Then("^user should select a product and proceeds to checkout$")
    public void user_selects_product() throws Exception {
        SearchPage search = new SearchPage(driver);
        search.selectProduct(driver);
        // logs to capture execution flow
        logs.info("*****User finds product*****");
        // taking screenshot
        TakeScreenShot.ScreenShot(driver, "AddToCart");
        // user selects a product and adds it to shopping cart
        search.addToCart();
        String strText = driver.findElement(By.xpath("//*[contains(text(),'Added to Cart' )]")).getText();
        // verify the item has been added to cart
        assertTrue(strText.contains("Added to Cart"));
        search.proceedCheckout();
        // logs to capture execution flow
        logs.info("*****User is on checkout*****");
        // taking screenshot
        TakeScreenShot.ScreenShot(driver, "CheckoutScreen");
    }


}
