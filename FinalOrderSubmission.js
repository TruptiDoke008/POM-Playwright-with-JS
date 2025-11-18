const { expect } = require('@playwright/test');
class FinalOrderSubmission
{
    constructor(page)
    {
        this.page = page;
        this.orderBtn = page.locator("[routerlink*='myorders']");
    }

async order()
{
    await this.page.locator(".hero-primary").waitFor();

    await expect(this.page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    //cross check if the text is preset or not.

    //Print order id
    const orderID = await this.page.locator(".em-spacer-1 .ng-star-inserted").first().textContent();
    console.log(orderID);
    this.orderBtn.first().click();

    await this.page.locator("tbody tr").first().waitFor();

    const rows = await this.page.locator("tbody tr");
    for(let i=0; i< await rows.count(); ++i)
    {
        const ordertexts = await rows.nth(i).locator("th").textContent();
        if(orderID.includes(ordertexts)) //innclude use to check if the text is include in that element or not.  
        {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }

    const country = await expect(this.page.locator(".address p").last()).toHaveText(" Country - India ");
    console.log(country);

}
}

module.exports = {FinalOrderSubmission};