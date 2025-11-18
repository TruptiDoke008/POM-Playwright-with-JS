const { expect } = require('@playwright/test');

class Checkout{

constructor(page)
{
    this.page = page;
    this.checkoutBtn = page.locator("button[type='button']");
    this.cvv = page.locator(".field.small input");
    this.cardName = page.locator(".field input");
    this.cupon = page.locator(".field.small input");
    this.placeOrder = page.locator(".actions a");

}

async cardDetails()
{
    await this.checkoutBtn.last().click();
    await this.cvv.first().fill('123');
    await this.cardName.nth(2).fill("Trupti Doke");
    await this.cupon.last().fill('Trupti@123');
}

async shippingInfo(userName)
{
    await this.page.locator("[placeholder*='Select']").pressSequentially("ind", { delay: 150 });

    const dropDown = this.page.locator(".ta-results");
    await dropDown.waitFor();//wait to drop down options get display.
    const dropCount = await dropDown.locator("button").count(); //get the count of drop down elements.
   
    for(let i=0; i<dropCount; ++i)
    {
        const text = await dropDown.locator("button").nth(i).textContent();
        if(text === " India")
        {
            await dropDown.locator("button").nth(i).click();
            break;
        }
    }

    await expect(this.page.locator(".user__name [type='text']").first()).toHaveText(userName);
}

async placeorders()
{
    await this.placeOrder.click();
}
}

module.exports={Checkout};