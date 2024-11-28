// This page responsible to handel locators for login android

const loginPageLocators = 
{
    'menuButton':'//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView',
    'loginMenuButton':'//android.view.ViewGroup[@content-desc="menu item log in"]',
    'userNameField':'//android.widget.EditText[@content-desc="Username input field"]',
    'passwordField':'//android.widget.EditText[@content-desc="Password input field"]',
    'loginButton':'//android.view.ViewGroup[@content-desc="Login button"]',
    'notMatchLabel':'//android.widget.TextView[@text="Provided credentials do not match any user in this service."]',
    'userNameMissingLabel':'//android.widget.TextView[@text="Username is required"]',
    'passwordMissingLabel':'//android.widget.TextView[@text="Password is required"]',
    'lockedAccountLabel':'//android.widget.TextView[@text="Sorry, this user has been locked out."]'
}

function getLocator(locator)
{
    return loginPageLocators[locator];
}

module.exports = {getLocator};


