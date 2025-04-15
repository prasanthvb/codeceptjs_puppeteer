Feature('Codecept Learning');

Scenario('Launch URL', ({ I }) => {
    I.amOnPage("/");
    I.wait(1);
    I.amOnPage("/doodles");
    I.wait(1);
    I.amOnPage("https://codecept.io/puppeteer/#mocking-network-requests");
    I.wait(1);
    I.amOnPage("https://www.udemy.com/course/puppeteer/");
    I.wait(1);
});

Scenario('Locators', ({ I }) => {
    I.amOnPage("https://opensource-demo.orangehrmlive.com/");
    I.see("Login"); //Assertion
    I.fillField("//*[@name='username']", "Admin"); //Xpath
    I.fillField("input[name='password']", "admin123");// Css selector
    I.click("button[type='submit']")
    I.saveScreenshot("loggedIn.jpg")
    I.see("Dashboard"); //Assertion
    I.dontSee("Login");//Assertion
})
