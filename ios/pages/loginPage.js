// This page responsible to handel locators for login android

const loginPageLocators = 
{
    'menuButton':'//XCUIElementTypeButton[@name="tab bar option menu"]',
    'loginMenuButton':'//XCUIElementTypeOther[@name="menu item log in"]',
    'userNameField':'//XCUIElementTypeTextField[@name="Username input field"]',
    'passwordField':'//XCUIElementTypeSecureTextField[@name="Password input field"]',
    'loginButton':'//XCUIElementTypeOther[@name="Login button"]',
    'notMatchLabel':'//XCUIElementTypeStaticText[@name="Provided credentials do not match any user in this service."]',
    'userNameMissingLabel':'//XCUIElementTypeStaticText[@name="Username is required"]',
    'passwordMissingLabel':'//XCUIElementTypeStaticText[@name="Password is required"]',
    'lockedAccountLabel':'//XCUIElementTypeStaticText[@name="Sorry, this user has been locked out."]'
}

function getLocator(locator)
{
    return loginPageLocators[locator];
}

module.exports = {getLocator};


