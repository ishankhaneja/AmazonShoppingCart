package com.ebaytest.stepdefinitions;


import com.ebaytest.utilities.ReadParameters;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import java.net.MalformedURLException;
import java.util.concurrent.TimeUnit;

//Cucumber Hook file for initializations
public class Hook_DriverInitialization {

    public WebDriver driver;

    ReadParameters rd = new ReadParameters();
    public String browser = rd.getBrowserName();
    public String chromepath = rd.getChromePath();
    public String firefoxpath = rd.getFirefoxPath();
    public String iepath = rd.getIEPath();
    public String email = rd.getEmail();
    public String password = rd.getPassword();
    public String keyword = rd.getKeyword();

    @Before
    public void driverSetup() throws MalformedURLException {

        try {

            if (browser.equals("chrome")) {
                System.setProperty("webdriver.chrome.driver", chromepath);
                driver = new ChromeDriver();
            } else if (browser.equals("firefox")) {
                System.setProperty("webdriver.gecko.driver", firefoxpath);
                driver = new FirefoxDriver();
            } else if (browser.equals("ie")) {
                System.setProperty("webdriver.ie.driver", iepath);
                driver = new InternetExplorerDriver();
            }
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        } catch (NullPointerException ex) {
            throw new RuntimeException("Selenium driver could not be initialised");
        }
    }

    public WebDriver getDriver() {
        return driver;
    }

    @After
    public void driverKill() {
        driver.manage().deleteAllCookies();
        driver.quit();
    }

}

