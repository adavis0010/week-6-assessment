import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})


test('I can start a game', async () => {
    
    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test('Clicking upper right square adds x', async () => {
    
    await driver.sleep(2000);
    await driver.findElement(By.id('cell-0')).click();
    
});

test('Clicking lower right square adds x', async () => {
    
    await driver.sleep(2000);
    await driver.findElement(By.id('cell-6')).click();
    
});

test ('3 X\'s in a row is a win condition', async () => {
    await driver.sleep(2000);
    await driver.findElement(By.id('cell-3')).click()
});

afterAll(async () => {
    await driver.sleep(5000);
    await driver.quit();
})