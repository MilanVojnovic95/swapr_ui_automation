// 
// rewards page
// rewards_page.js
// 

const BasePage = require('./base_page')


class Rewards extends BasePage {

    //Selectors
    get createCampaign_Button() { return $('(//div//a)[11]') }

    // Methods

    checkIfYouAreOnRewardsPage() {
        console.log('Check')
        this.isDisplayed(this.createCampaign_Button)
    }
  
}

module.exports = new Rewards()