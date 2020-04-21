package com.amazonWeb.pageobjects;

import com.amazonWeb.stepdefinitions.Hook_DriverInitialization;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Hook_DriverInitialization {
    @FindBy(id = "twotabsearchtextbox")
    WebElement searchBox;

    @FindBy(xpath = "//input[@value='Go']")
    WebElement searchBtn;

    public void searchProduct(){
        searchBox.sendKeys(keyword);
        searchBtn.click();
    }


    public HomePage(WebDriver driver) { //  Constructor for POM

        PageFactory.initElements(driver, this);
    }
}
