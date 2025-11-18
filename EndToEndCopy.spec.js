const {test, expect} = require ("@playwright/test");
const { waitForDebugger } = require('inspector');
const {POManager} = require('./POManager'); 

test('End to End Coding', async ({browser})=>
{
    
    const context = await browser.newContext();
    const page = await context.newPage();

    const pOManager = new POManager(page);

    const userName = "truptidoke008@gmail.com";
    const passWord = "Vikroli@123";
    const productName = "ZARA COAT 3";

    //Log in details
    const loginPg = pOManager.getLoginPg(); // creating object of class from POM/LoginPg.js class
    await loginPg.goTo();
    await loginPg.validLogin(userName,passWord);

    //products are visible
    const dash = pOManager.getdashboardPg();
    await dash.searchProdsAddCart(productName);
    await dash.navToCart();

    await page.locator("div li").first().waitFor(); 
    //wait for page 1st element get loaded. in short wait until items are not get loaded.

    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    // h3 is tag for all product names.

    expect(bool).toBeTruthy();
    //.toBeTruthy() → checks if the value inside expect() evaluates to true in a Boolean context.

    //Fill up the Personal Information and place the order
    const checkout = pOManager.getcheckoutPg();
    await checkout.cardDetails();
    await checkout.shippingInfo(userName);
    await checkout.placeorders();

    
    //Last order page and thank you message verify
    const finalOrder = pOManager.getOrderSubmission();
    await finalOrder.order();

});