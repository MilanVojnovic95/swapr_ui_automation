// 
// swap page
// swap_page.js
// 


const BasePage = require('./base_page')


class Swap extends BasePage {

    //Selectors
    get swapPage_Button() { return $('(//a[contains(text(),"Swap")])[1]') }
    get rewardsPage_Button() { return $('(//a[contains(text(),"Rewards")])[1]') }
    get connectWallet_Button() { return $('(//button[contains(text(),"Connect wallet")])[1]') }
    get connectMetamask_Button() { return $('//li[@id="connect-METAMASK"]') }
    get enterAmount_Button() { return $('//div[contains(text(),"Enter amount")]') }

    // Methods

    checkIfYouAreOnSwapPage() {
        this.isDisplayed(this.swapPage_Button)
    }

    checkIfWalletIsConnected() {
        this.isDisplayed(this.enterAmount_Button)
    }

    goToRewardsPage() {
        this.click(this.rewardsPage_Button)
    }

    clickOnConnectWallet() {
        this.click(this.connectWallet_Button)
    }

    clickOnConnectMetamask(){
        this.click(this.connectMetamask_Button)
    }
  
}

module.exports = new Swap()