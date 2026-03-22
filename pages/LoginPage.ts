import { test, Locator, Page, expect} from '@playwright/test'

export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginbutton: Locator;

    constructor(page: Page){
    this.page = page;
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginbutton = page.locator('[data-test="login-button"]');
    }

    async navigate(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login( name: string, pass: string){
        await this.username.fill(name);
        await this.password.fill(pass);
        await this.loginbutton.click();    
    }

    async verifyLogin(){
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    }
}

export { expect };