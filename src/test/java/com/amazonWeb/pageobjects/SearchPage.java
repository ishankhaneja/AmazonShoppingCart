package com.amazonWeb.pageobjects;

import com.amazonWeb.stepdefinitions.Hook_DriverInitialization;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import java.util.List;
import java.util.Random;

public class SearchPage extends Hook_DriverInitialization {
    @FindBy(xpath = "//div[@data-component-type='s-search-result']//a[@class='a-link-normal a-text-normal']")
    List<WebElement> searchResults;

    @FindBy(id = "buybox-see-all-buying-choices-announce")
    WebElement buyingOptions;

    @FindBy(xpath = "//input[@name='submit.add-to-cart']")
    WebElement addToCartBtn;

    @FindBy(xpath = "//*[contains(text(),'Proceed to checkout' )]")
    List<WebElement> checkoutBtn;

    public void selectProduct(WebDriver driver){
        Assert.assertNotEquals( searchResults.size(),0);
        // As the user wants to click random product for each run and not the first
        Random r = new Random();
        int randomValue = r.nextInt(searchResults.size()); //Getting a random value that is between 0 and (list's size)-1
        System.out.println("The int is -->" + randomValue);
        WebDriverWait wait = new WebDriverWait(driver, 15);
        WebElement element = wait.until(ExpectedConditions.elementToBeClickable(searchResults.get(randomValue)));
        element.click();
        }

    public void addToCart() {
        addToCartBtn.click();
    }

    public void proceedCheckout() {
        checkoutBtn.get(0).click();
    }

    public SearchPage(WebDriver driver) { //  Constructor for POM
        PageFactory.initElements(driver, this);
    }
}
