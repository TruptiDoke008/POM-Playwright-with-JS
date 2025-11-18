class dashboardPg
{
constructor(page)
{
    this.page = page;
    this.products = page.locator('.card-body');
    this.productsOfTexts = page.locator(".card-body b");
    this.cart = page.locator("[routerlink*='cart']");
}

async searchProdsAddCart(productName)
{
    
    const titles = await this.productsOfTexts.allTextContents();
    console.log(titles);

    const count = await this.products.count(); //store the count of all products.
    for(let i=0; i<count; ++i)
    {
        if(await this.products.nth(i).locator('b').textContent() === productName) 
            //b is the contains the titles see above const titles css path.
        {
            //add product to the cart.
            await this.products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }

}

async navToCart()
{
    await this.cart.click();
}

}
module.exports= {dashboardPg};