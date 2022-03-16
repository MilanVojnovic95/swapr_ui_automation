// 
// swapr browser page 
// swapr_browser_page.js
// 

const BasePage = require('./base_page')
const urls = require('../config/url')
const ENV = process.env.ENV

class BrowserSwapr extends BasePage {

    async openSwapr() {

        if (ENV == 'swaprTest') {
            console.log("opening url.");
            
            await browser.url(urls.swaprIpfs)

            //let metamask = await browser.switchWindow('*chrome-extension*')

        }

    }

}

module.exports = new BrowserSwapr()