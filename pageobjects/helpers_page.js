//
// Helpers page
// helpers_page.js
//


const BasePage = require('./base_page')


class HelpersPage extends BasePage {

  switchWindows(windowParam){
    browser.pause(1000)
    const parentWindowID = browser.getWindowHandle()
    const windowIDs = browser.getWindowHandles()
    if(typeof windowParam == 'number'){
      browser.switchToWindow(windowIDs[windowParam])
    } else if(typeof windowParam == 'string') {
        browser.switchWindow(windowParam)
      } else {
        const parentWindowIDIndex = windowIDs.indexOf(parentWindowID)
        browser.switchToWindow(windowIDs[parentWindowIDIndex + 1])
    }
    
    return browser.getWindowHandle();
  }

}

module.exports = new HelpersPage();