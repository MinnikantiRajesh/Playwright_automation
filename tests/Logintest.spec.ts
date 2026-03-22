import { test } from "../fixtures/loginfixture.spec";

test('Login test', async ({ loginPage }) => {
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.verifyLogin();
})