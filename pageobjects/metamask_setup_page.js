// 
// metamask setup
// metamask_setup_page.js
// 


const BasePage = require('./base_page')


class MetamaskSetupPage extends BasePage {

    //Selectors
    get getStarted_Button() { return $('//button') }
    get importWallet_Button() { return $('//button[contains(text(),"Import wallet")]') }
    get importWords_Field() { return $('(//input)[1]') }
    get password_Field() { return $('(//input)[3]') }
    get confirmPassword_Field() { return $('(//input)[4]') }
    get termsOfUse_Field() { return $('(//input)[5]') }
    get iAgree_Button() { return $('//button[contains(text(),"I Agree")]') }
    get importWallet_Button() { return $('//button[contains(text(),"Import")]') }
    get allDone_Button() { return $('//button[contains(text(),"All Done")]') }
    get closeModalWindow_Button() { return $('//button[@title="Close"]') }
    get changeNetwork_Button() { return $('//span[contains(text(),"Ethereum Mainnet")]') }
    get showHideTestNewtork_Button() { return $('//a[contains(text(),"Show/hide")]') }

    // Methods

    setupWallet(recoveryPhase, password) {
        this.click(this.getStarted_Button)
        this.click(this.importWallet_Button)
        this.click(this.iAgree_Button)
        this.setValue(this.importWords_Field, recoveryPhase);
        this.setValue(this.password_Field, password)
        this.setValue(this.confirmPassword_Field, password);
        this.click(this.termsOfUse_Field)
        this.click(this.importWallet_Button)
        this.click(this.allDone_Button)
        this.click(this.closeModalWindow_Button)
    }
    
}

module.exports = new MetamaskSetupPage()