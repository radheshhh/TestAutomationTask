const { $ } = require('@wdio/globals')
const Page = require('./page');

//sub page containing specific selectors and methods for a specific page
class SecurePage extends Page {
    //define selectors using getter methods
    get Rejectall () {
        return $('#onetrust-reject-all-handler');
    }
}
module.exports = new SecurePage(); 