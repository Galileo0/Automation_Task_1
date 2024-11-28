// This file responisble for execute test cases 
// Feature: Login Page
// Type: Acceptance

var assert = require('assert');
var {Builder, By, until} = require('selenium-webdriver');
var loginPageAssets = require('../pages/loginPage');
var testData = require('./testData.json');

var buildDriver = function() {
    return new Builder()
      .usingServer('http://127.0.0.1:4723/wd/hub')
      .build();
};

async function invalidCredintails() 
{
    let driver = buildDriver();
    let defaultTimeOut = 5000;
    //begine Test
    try
    {
        
        // Click on menu button
        await driver.wait(until.elementLocated(By.xpath(loginPageAssets.getLocator('menuButton'))),defaultTimeOut).click()
        // Click on Login Menu Button
        await driver.wait(until.elementLocated(By.xpath(loginPageAssets.getLocator('loginMenuButton'))),defaultTimeOut).click()
        // Fill Data
        var userNameField = await driver.wait(until.elementLocated(By.xpath(loginPageAssets.getLocator('userNameField'))),defaultTimeOut);
        var passwordField = await driver.wait(until.elementLocated(By.xpath(loginPageAssets.getLocator('passwordField'))),defaultTimeOut);
        await userNameField.sendKeys(testData.NO_MATCH.username);
        await passwordField.sendKeys(testData.NO_MATCH.password);
        // Click On Login Button
        await driver.wait(until.elementLocated(By.xpath(loginPageAssets.getLocator('loginButton'))),defaultTimeOut).click();
        //asertion 
        var loginLabelValue = await driver.wait(until.elementLocated(By.xpath(loginPageAssets.getLocator('notMatchLabel'))),defaultTimeOut).getText();
        assert(loginLabelValue == testData.NO_MATCH.assertionMessage);
        //Update Browserstack with test results
        const executorConfig = {
            "action": "setSessionName",
            "arguments": {
              "name": "Login With Invalid Credintails",
              "status":"passed"
            }
        };
        await driver.executeScript('browserstack_executor: ' + JSON.stringify(executorConfig), []);
    }catch(e)
    {
        await driver.executeScript(
            'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Some elements failed to load"}}'
        );
    }finally
    {
        if(driver)
            await driver.quit()
    }
}

async function lockedCredintails() 
{
    let driver = buildDriver();
    let defaultTimeOut = 5000;
    //begine Test
    try
    {
        
        // Click on menu button
        await driver.wait(until.elementLocated(By.xpath(loginPageAssets.getLocator('menuButton'))),defaultTimeOut).click()
        // Click on Login Menu Button
        await driver.wait(until.elementLocated(By.xpath(loginPageAssets.getLocator('loginMenuButton'))),defaultTimeOut).click()
        // Fill Data
        var userNameField = await driver.wait(until.elementLocated(By.xpath(loginPageAssets.getLocator('userNameField'))),defaultTimeOut);
        var passwordField = await driver.wait(until.elementLocated(By.xpath(loginPageAssets.getLocator('passwordField'))),defaultTimeOut);
        await userNameField.sendKeys(testData.LOCKED.username);
        await passwordField.sendKeys(testData.LOCKED.password);
        // Click On Login Button
        await driver.wait(until.elementLocated(By.xpath(loginPageAssets.getLocator('loginButton'))),defaultTimeOut).click();
        //asertion 
        var loginLabelValue = await driver.wait(until.elementLocated(By.xpath(loginPageAssets.getLocator('lockedAccountLabel'))),defaultTimeOut).getText();
        assert(loginLabelValue == testData.LOCKED.assertionMessage);
        //Update Browserstack with test results
        const executorConfig = {
            "action": "setSessionName",
            "arguments": {
              "name": "Login Via Locked User",
              "status":"passed"
            }
        };
        await driver.executeScript('browserstack_executor: ' + JSON.stringify(executorConfig), []);
    }catch(e)
    {
        await driver.executeScript(
            'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Some elements failed to load"}}'
        );
    }finally
    {
        if(driver)
            await driver.quit()
    }
}

async function emptyFields() 
{
    let driver = buildDriver();
    let defaultTimeOut = 5000;
    //begine Test
    try
    {
        
        // Click on menu button
        await driver.wait(until.elementLocated(By.xpath(loginPageAssets.getLocator('menuButton'))),defaultTimeOut).click()
        // Click on Login Menu Button
        await driver.wait(until.elementLocated(By.xpath(loginPageAssets.getLocator('loginMenuButton'))),defaultTimeOut).click()
        // Click Login
        await driver.wait(until.elementLocated(By.xpath(loginPageAssets.getLocator('loginButton'))),defaultTimeOut).click();
        // Assert 
        var message = await driver.wait(until.elementLocated(By.xpath(loginPageAssets.getLocator('userNameMissingLabel'))),defaultTimeOut).getText();
        assert(message == testData.NO_USER_DETAILS.assertionMessage);
        // Fill Username 
        var userNameField = await driver.wait(until.elementLocated(By.xpath(loginPageAssets.getLocator('userNameField'))),defaultTimeOut);
        await userNameField.sendKeys(testData.LOCKED.username);
        // Click Login
        await driver.wait(until.elementLocated(By.xpath(loginPageAssets.getLocator('loginButton'))),defaultTimeOut).click();
        // Assert 
        var message = await driver.wait(until.elementLocated(By.xpath(loginPageAssets.getLocator('passwordMissingLabel'))),defaultTimeOut).getText();
        assert(message == testData.NO_PASSWORD.assertionMessage);
        //Update Browserstack with test results
        const executorConfig = {
            "action": "setSessionName",
            "arguments": {
              "name": "Empty Fields",
              "status":"passed"
            }
        };
        await driver.executeScript('browserstack_executor: ' + JSON.stringify(executorConfig), []);
        
    }catch(e)
    {
        await driver.executeScript(
            'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Some elements failed to load"}}'
        );
    }finally
    {
        if(driver)
            await driver.quit()
    }
}

async function validCredintails() 
{
    let driver = buildDriver();
    let defaultTimeOut = 5000;
    //begine Test
    try
    {
        
        // Click on menu button
        await driver.wait(until.elementLocated(By.xpath(loginPageAssets.getLocator('menuButton'))),defaultTimeOut).click()
        // Click on Login Menu Button
        await driver.wait(until.elementLocated(By.xpath(loginPageAssets.getLocator('loginMenuButton'))),defaultTimeOut).click()
        // Fill Data
        var userNameField = await driver.wait(until.elementLocated(By.xpath(loginPageAssets.getLocator('userNameField'))),defaultTimeOut);
        var passwordField = await driver.wait(until.elementLocated(By.xpath(loginPageAssets.getLocator('passwordField'))),defaultTimeOut);
        await userNameField.sendKeys(testData.STANDARD.username);
        await passwordField.sendKeys(testData.STANDARD.password);
        // Click On Login Button
        await driver.wait(until.elementLocated(By.xpath(loginPageAssets.getLocator('loginButton'))),defaultTimeOut).click();
        //Update Browserstack with test results
        const executorConfig = {
            "action": "setSessionName",
            "arguments": {
              "name": "Valid Credintials",
              "status":"passed"
            }
        };
        await driver.executeScript('browserstack_executor: ' + JSON.stringify(executorConfig), []);
    }catch(e)
    {
        await driver.executeScript(
            'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Some elements failed to load"}}'
        );
    }finally
    {
        if(driver)
            await driver.quit()
    }
}

// Execution of test
invalidCredintails();
lockedCredintails();
emptyFields();
validCredintails();
