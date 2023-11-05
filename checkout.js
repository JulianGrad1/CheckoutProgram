const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

var SNKRS = async function(){
    const browser = await puppeteer.launch({headless: false, sloMo:200});
    const page = await browser.newPage();
    //needs to be updated
    await page.setUserAgent()
    await page.goto("https://www.nike.com/launch/t/air-jordan-1-chicago1");
    await page.waitFor(7000);
    await page.click("button[data-size = '11.5']",btn=>btn.click());
    await page.waitFor(2000);
    await page.click('#buttonAddToCart',btn=>btn.click());
    await page.waitFor(3000);
    //needs to be updated
    await page.click("",btn=>btn.click());

    //example
    await page.waitFor(3000);
    await page.type("input[id= 'firstName']",'Jules');
    await page.type('#shippingLastName', 'Galvez');
    //address input 
    await page.type('#address1', '41');
    await page.type('#city', 'Los Angeles');
    await page.select('#state','CA')
    await page.type('#postalCode', '90065');
    await page.type('#phoneNumber', '333-333-3333');
    await page.type('#email', 'noname@gmail.com');

    await page.waitFor(5000);
    await page.click("button[type='saveAddressBtn']",btn=>btn.click());
    await page.waitFor(5000);

    await page.type('#creditCardNumber', '');
    await page.waitFor(200);
    await page.type('#expirationDate', '00,00');
    await page.waitFor(200);
    await page.type('#cvNumber', '00,00');
    await page.waitFor(200);
    
    try {
        await page.click('#continueToOrderReviewBtn', btn=>btn.click());
    } catch (ex){
        await page.click("button[id='continueToOrderReviewBtn']", btn=>btn.click());
    }
    await page.waitFor(2000);
    await page.click("button[id='place-order']",btn => btn.click());

}