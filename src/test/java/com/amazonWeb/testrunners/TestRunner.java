package com.amazonWeb.testrunners;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = {"src/test/resources/FeatureFiles/" },
        glue = "com.amazonWeb.stepdefinitions",
        dryRun = false, monochrome = false,
        plugin = {"pretty", "html:test-output" },
        tags = { "@cart" })

public class TestRunner extends AbstractTestNGCucumberTests {

}
