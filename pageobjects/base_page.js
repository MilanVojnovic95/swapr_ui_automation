// 
// Base page
// Base_page.js
// 

module.exports = class BasePage {


    getText(element){
        element.waitForDisplayed({timeout: 30000})
        return element.getText()
    }

    setValue(element, value){
        element.waitForDisplayed({timeout: 30000})
        element.setValue(value)
    }

    addValue(element, value){
        element.waitForDisplayed({timeout: 30000})
        element.addValue(value)
    }

    click(element){
        element.waitForDisplayed({ timeout: 30000 })
        element.click()
    }

    clearValue(element){
        element.waitForDisplayed({ timeout: 30000})
        element.clearValue()
    }

    getValue(element){
        element.waitForDisplayed({ timeout: 30000})
        return element.getValue()
    }

    isClickable(element){
        browser.waitUntil(function () {
            const state = browser.execute(function () {
              return document.readyState;
            })
            return state === 'complete';
          },
            {
              timeout: 20000, //20secs
              timeoutMsg: 'Oops! Check your internet connection'
            })
        element.waitForDisplayed({timeout: 30000})
        return element.isClickable()
    }

    isDisplayed(element){
        element.waitForDisplayed({timeout: 30000})
        return element.isDisplayed()
    }

    isSelected(element){
        element.waitForDisplayed({timeout: 30000})
        return element.isSelected()
    }

    getColorHexCSSProperty(element) {
        element.waitForDisplayed({timeout: 30000})
        return element.getCSSProperty('color').parsed.hex
      }
}