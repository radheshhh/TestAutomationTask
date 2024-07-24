//this test case validates if particular items are displayed 
const homePage = require('../pageobjects/Home.page')
const SecurePage = require('../pageobjects/secure.page')
//const { expect } = require('chai');

function isDisplayed(element) {
    return element.isDisplayed();
}

describe('VolvoTest-02', () => {
     it('should validate the presence of items',async () => {
      await homePage.open()      //opening the URL
      browser.maximizeWindow()   //maximizing the window
      await homePage.RejectAllButton.click()  //rejecting the cookies
      await homePage.EC40.scrollIntoView();   //scrolling to the webelement
      browser.pause(2000)    //hard wait for better sync
      const promises = [];    //to handle the Promises error when asserting
      const WebElements = [homePage.EC40,homePage.EX30,homePage.EX90,homePage.XC90];   
          // Iterate through the array of selectors
          WebElements.forEach((element, index) => {    
            // Check if element is displayed
            const displayed = isDisplayed(element);
            const assert = require('assert');
            promises.push(element.isDisplayed().then(displayed => {
                assert.strictEqual(displayed, true, `Element at index is not displayed`);  //asserting the value
            }));
            
            if (displayed === true) {
                console.log('All elements are displayed.');   //to print the value in console
            } else {
                console.log('All elements are not displayed.');
            }
        });
        await Promise.all(promises);        
    });  
 }); 