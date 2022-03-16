// 
// Connect Metamask Wallet Steps
// connect_metamask_wallet_steps.js
// 


const { Given, When, Then } = require('@wdio/cucumber-framework');
const SwaprPage = require('../pageobjects/swapr_browser_page');
const SwapPage = require('../pageobjects/swap_page');
const HelpersPage = require('../pageobjects/helpers_page');
const MetamaskPage = require('../pageobjects/metamask_setup_page');
const MetamaskData = require('../config/data/metamaskData');
const MetamaskNotificationPage = require('../pageobjects/metamask_notification_page');

let handleStack = [];

Given(/^User is on the Swap page$/,  function () {
    SwaprPage.openSwapr();
    let baseHandle = browser.getWindowHandle();
    handleStack.push(baseHandle);
    SwapPage.checkIfYouAreOnSwapPage();
});

Given(/^User setup Metamask wallet$/,  function () {
   let nextHandle = HelpersPage.switchWindows("/welcome");
   handleStack.push(nextHandle);
   console.log("next window handle: " + nextHandle);
   MetamaskPage.setupWallet(MetamaskData.recoveryPhase, MetamaskData.password);
});

When(/^User click on Connect Wallet$/, function () {
    handleStack.pop();
    let nextHandle = HelpersPage.switchWindows("/swap?chainId=1");
    handleStack.push(nextHandle);
    console.log("next window handle: " + nextHandle);
    SwapPage.clickOnConnectWallet();
    SwapPage.clickOnConnectMetamask();
});

When(/^User Approve connection$/, function () { const parentWindowID = browser.getWindowHandle()
    const windowIDs = browser.getWindowHandles()
    handleStack.pop();
    console.log(handleStack);
    let nextHandle = HelpersPage.switchWindows("/notification.html");
    handleStack.push(nextHandle);
    console.log("next window handle: " + nextHandle);
    MetamaskNotificationPage.approveWalletConnection();
});

Then(/^Wallet should be connected$/, function () {
    let wHandles = browser.getWindowHandles();
    handleStack.pop()
    let nextHandle = HelpersPage.switchWindows(handleStack[handleStack.length - 1]);
    handleStack.push(nextHandle);
    console.log("next window handle: " + nextHandle);
    SwapPage.checkIfWalletIsConnected();
});
