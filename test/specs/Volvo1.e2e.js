//this test case validates the category  and a name of of a particualr vehicle 
const homePage = require('../pageobjects/Home.page')
const SecurePage = require('../pageobjects/secure.page')

describe('VolvoTest-01', () => {
    it('TestScript01', async () => {
        await homePage.open()   //opening the URL
        browser.maximizeWindow()  //maximizing the window
        await homePage.RejectAllButton.click()  //rejecting the cookies
        await homePage.NextButton.scrollIntoView();  //scrolling to the webelement
        browser.pause(2000)  //hard wait for better sync
        const isVisible = homePage.NextButton.isDisplayed();  
        await homePage.NextButton.click()  //clicking on the Next Button
        const assert = require('assert')
        const extractText = await homePage.XC90.getText()   //get text method for asserting
        assert.strictEqual(extractText, 'XC90')
        const category = $('(//em[@data-autoid="productListCarouselItem:category"])[4]')
        const extractText2 = await category.getText()
        assert.strictEqual(extractText2, 'SUV')  //asserting
        browser.executeScript('window.scrollTo(0, 0);');
       const safety = $('//*[@id="ModelIntro-1"]/section/div/h1')
       safety.isDisplayed();
  })
})