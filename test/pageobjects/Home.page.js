//this page contains the locators of the webelements
const { $ } = require('@wdio/globals')
const Page = require('./page');

//sub page containing specific selectors and methods for a specific page
class homePage extends Page {
    //define selectors using getter methods
    get safety () { $('//*[@id="ModelIntro-1"]/section/div/h1');
    }  //SafetyButton

    get NextButton () {  
        return $('//button[@data-autoid="springCarouselNextButton"]');
    }   //NextButton

    get EX30Electric () {
        return $('//*[@id="ProductListCarousel-1"]/section/div[2]/div/div/div/div/div[1]/div/div/div/div/div[2]/div/a/div[2]/picture');
    }   //EX30Electric

    get EC40 () {
        return $('(//span[@data-autoid="productListCarouselItem:modelName"])[1]');
    }

    get EX30 () {
        return $('(//span[@data-autoid="productListCarouselItem:modelName"])[2]');
    }

    get EX90 () {
        return $('(//span[@data-autoid="productListCarouselItem:modelName"])[3]');
    }

    get XC90 () {
        return $('(//span[@data-autoid="productListCarouselItem:modelName"])[4]');
    }

    get Range () {
        return $('(//h3[@class="heading-1 mb-16 HorizontalModelStatsCallout_heading__AEzam"])[1]');
    }  //Range Button

    get RejectAllButton () {
        return $('//*[@id="onetrust-reject-all-handler"]');
    }   //RejectAllButton

    //overwrite specific options to adapt it to page object
    open () {
        return super.open('/intl/v/safety/highlights');
    }
}
module.exports = new homePage();