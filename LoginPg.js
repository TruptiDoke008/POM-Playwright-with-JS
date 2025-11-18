class LoginPg{

constructor(page)
{
    this.page = page;
    //This will get initialze automatically when object will created of class
    this.userName = page.locator('#userEmail');
    this.passWord = page.locator('#userPassword');
    this.signInBtn = page.locator('#login');
}

async goTo()
{
    await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
}

async validLogin(userName,passWord)
{
    await this.userName.fill(userName);
    await this.passWord.fill(passWord);
    await this.signInBtn.click();
    await this.page.waitForLoadState('networkidle'); // wait for all the titles get loaded.
}
}

module.exports = {LoginPg}; //this will create the class public and export