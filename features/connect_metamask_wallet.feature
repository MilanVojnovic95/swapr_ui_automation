# 
# Connect Metamask Wallet Feature
# connect_metamask_wallet.feature
# 

Feature: Open Swapr

  Scenario Outline: For testing purposes should be able to open Connect wallet on Swapr

    Given User is on the Swap page
    And User setup Metamask wallet
    When User click on Connect Wallet
    And User Approve connection
    Then Wallet should be connected
    
   
