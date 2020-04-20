package com.ebaytest.pageobjects;

import com.ebaytest.stepdefinitions.Hook_DriverInitialization;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

//Page object class for Login Page
public class LoginPage extends Hook_DriverInitialization { // Java OOP Inheritance concept


    @FindBy(id = "ap_email")
    WebElement userId;

    @FindBy(id = "continue")
    WebElement contnBtn;

    @FindBy(id = "signInSubmit")
    WebElement signInBtn;

    @FindBy(id = "ap_password")
    WebElement passWord;

    public void enterUsedId() {
        userId.sendKeys(email);
    }

    public void enterPassword()  {
        passWord.sendKeys(password);
    }

    public void clickContinue() {
        contnBtn.click();
    }

    public void clickSignin() {
        signInBtn.click();
    }

    public LoginPage(WebDriver driver) { //  Constructor for POM

        PageFactory.initElements(driver, this);
    }

}
