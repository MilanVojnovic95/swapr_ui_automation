// 
// metamask notification page
// metamask_notification_page.js
// 


const BasePage = require('./base_page')


class MetamaskNotificationPage extends BasePage {

    //Selectors
    get next_Button() { return $('//button[contains(text(),"Next")]') }
    get connect_Button() { return $('//button[contains(text(),"Connect")]') }
   
    // Methods

    approveWalletConnection() {
        this.click(this.next_Button)
        this.click(this.connect_Button)
        
    }
  
}

module.exports = new MetamaskNotificationPage()