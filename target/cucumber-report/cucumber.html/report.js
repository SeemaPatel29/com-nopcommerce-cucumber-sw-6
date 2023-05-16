$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ComputerMenu.feature");
formatter.feature({
  "line": 1,
  "name": "Computer menu Test",
  "description": "",
  "id": "computer-menu-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4418164000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should see products are arrange in Alphabatical order",
  "description": "",
  "id": "computer-menu-test;user-should-see-products-are-arrange-in-alphabatical-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Computer Tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Desktop menu",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select Sort By position Name: Z to A",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should verify the Products are arrange in Descending order.",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 107213600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 1334233500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnDesktopMenu()"
});
formatter.result({
  "duration": 486028000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iSelectSortByPositionNameZToA()"
});
formatter.result({
  "duration": 189595800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iShouldVerifyTheProductsAreArrangeInDescendingOrder()"
});
formatter.result({
  "duration": 248109600,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: stale element not found\n  (Session info: chrome\u003d113.0.5672.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#stale_element_reference\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [dd53c9acfb72504d88f7667578669776, getElementText {id\u003d93EB3FCFEC3A81554C775ED91BBBC1E3_element_40}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.93, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\seema\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56712}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:56712/devtoo..., se:cdpVersion: 113.0.5672.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (dd53c9acfb72504d88f7667578669776)] -\u003e tag name: h2]\nSession ID: dd53c9acfb72504d88f7667578669776\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:257)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:207)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.defaultProductList(DesktopPage.java:43)\r\n\tat com.nopcommerce.demo.steps.ComputerPageSteps.iShouldVerifyTheProductsAreArrangeInDescendingOrder(ComputerPageSteps.java:35)\r\n\tat ✽.Then I should verify the Products are arrange in Descending order.(ComputerMenu.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1016030100,
  "status": "passed"
});
formatter.uri("ElectronicMenu.feature");
formatter.feature({
  "line": 1,
  "name": "Electronic menu Test",
  "description": "",
  "id": "electronic-menu-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3153767300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to Cell Phone page successfully",
  "description": "",
  "id": "electronic-menu-test;user-should-navigate-to-cell-phone-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover to Electronics Tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover and click on Cell Phones tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to Cell Phone page",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 143300,
  "status": "passed"
});
formatter.match({
  "location": "EletronicSteps.iMouseHoverToElectronicsTab()"
});
formatter.result({
  "duration": 219051100,
  "status": "passed"
});
formatter.match({
  "location": "EletronicSteps.iMouseHoverAndClickOnCellPhonesTab()"
});
formatter.result({
  "duration": 1158408000,
  "status": "passed"
});
formatter.match({
  "location": "EletronicSteps.iShouldNavigateToCellPhonePage()"
});
formatter.result({
  "duration": 58157600,
  "status": "passed"
});
formatter.after({
  "duration": 780860100,
  "status": "passed"
});
formatter.before({
  "duration": 3049333100,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should add product to Cart and Place the Order Successfully",
  "description": "",
  "id": "electronic-menu-test;user-should-add-product-to-cart-and-place-the-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I mouse hover to Electronics Tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I mouse hover and click on Cell Phones tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should navigate to Cell Phone page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click on List view tab",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Nokia Lumia 1020",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see Nokia Lumia 1020",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I should see price $349.00",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I change the Qty to 2",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see The product is added to your shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I click cross",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I mouse hover on Shopping cart and click on Go to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see text Shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I should see Qty is 2",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see price is $698.00",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on check box of terms and service",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see Welcome Please Sign In!",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 49300,
  "status": "passed"
});
formatter.match({
  "location": "EletronicSteps.iMouseHoverToElectronicsTab()"
});
formatter.result({
  "duration": 183707200,
  "status": "passed"
});
formatter.match({
  "location": "EletronicSteps.iMouseHoverAndClickOnCellPhonesTab()"
});
formatter.result({
  "duration": 1127099500,
  "status": "passed"
});
formatter.match({
  "location": "EletronicSteps.iShouldNavigateToCellPhonePage()"
});
formatter.result({
  "duration": 51047900,
  "status": "passed"
});
formatter.match({
  "location": "EletronicSteps.iClickOnListViewTab()"
});
formatter.result({
  "duration": 134811200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1020",
      "offset": 23
    }
  ],
  "location": "EletronicSteps.iClickOnNokiaLumia(int)"
});
formatter.result({
  "duration": 2944335700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1020",
      "offset": 25
    }
  ],
  "location": "EletronicSteps.iShouldSeeNokiaLumia(int)"
});
formatter.result({
  "duration": 48245600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "349",
      "offset": 20
    },
    {
      "val": "00",
      "offset": 24
    }
  ],
  "location": "EletronicSteps.iShouldSeePrice$(int,int)"
});
formatter.result({
  "duration": 45206900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "EletronicSteps.iChangeTheQtyTo(int)"
});
formatter.result({
  "duration": 323531200,
  "status": "passed"
});
formatter.match({
  "location": "EletronicSteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 116090400,
  "status": "passed"
});
formatter.match({
  "location": "EletronicSteps.iShouldSeeTheProductIsAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 264885500,
  "status": "passed"
});
formatter.match({
  "location": "EletronicSteps.iClickCross()"
});
formatter.result({
  "duration": 97956000,
  "status": "passed"
});
formatter.match({
  "location": "EletronicSteps.iMouseHoverOnShoppingCartAndClickOnGoToCart()"
});
formatter.result({
  "duration": 1558914900,
  "status": "passed"
});
formatter.match({
  "location": "EletronicSteps.iShouldSeeTextShoppingCart()"
});
formatter.result({
  "duration": 54819500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "EletronicSteps.iShouldSeeQtyIs(int)"
});
formatter.result({
  "duration": 73347300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "698",
      "offset": 23
    },
    {
      "val": "00",
      "offset": 27
    }
  ],
  "location": "EletronicSteps.iShouldSeePriceIs$(int,int)"
});
formatter.result({
  "duration": 21027717600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//strong[text()\u003d\u0027$2,950.00\u0027])[2]\"}\n  (Session info: chrome\u003d113.0.5672.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [545b72c4afb98c02de11b53408334c37, findElement {using\u003dxpath, value\u003d(//strong[text()\u003d\u0027$2,950.00\u0027])[2]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.93, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\seema\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56758}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:56758/devtoo..., se:cdpVersion: 113.0.5672.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 545b72c4afb98c02de11b53408334c37\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy25.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.ShoppingCartPage.verifyPriceText(ShoppingCartPage.java:78)\r\n\tat com.nopcommerce.demo.steps.EletronicSteps.iShouldSeePriceIs$(EletronicSteps.java:100)\r\n\tat ✽.And I should see price is $698.00(ElectronicMenu.feature:27)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EletronicSteps.iClickOnCheckBoxOfTermsAndService()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EletronicSteps.iClickOnCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EletronicSteps.iShouldSeeWelcomePleaseSignIn()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1215450700,
  "status": "passed"
});
formatter.uri("TopMenu.feature");
formatter.feature({
  "line": 2,
  "name": "TopMenu",
  "description": "As user I want to navigate to selected menu page",
  "id": "topmenu",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should verify page navigation",
  "description": "",
  "id": "topmenu;user-should-verify-page-navigation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on tab menu from \"\u003cTopmenu tab\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to computer page  \"\u003cNavigate Page\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "topmenu;user-should-verify-page-navigation;",
  "rows": [
    {
      "cells": [
        "Topmenu tab",
        "Navigate Page"
      ],
      "line": 10,
      "id": "topmenu;user-should-verify-page-navigation;;1"
    },
    {
      "cells": [
        "Computers",
        "Computers"
      ],
      "line": 11,
      "id": "topmenu;user-should-verify-page-navigation;;2"
    },
    {
      "cells": [
        "Electronics",
        "Electronics"
      ],
      "line": 12,
      "id": "topmenu;user-should-verify-page-navigation;;3"
    },
    {
      "cells": [
        "Apparel",
        "Apparel"
      ],
      "line": 13,
      "id": "topmenu;user-should-verify-page-navigation;;4"
    },
    {
      "cells": [
        "Digital downloads",
        "Digital downloads"
      ],
      "line": 14,
      "id": "topmenu;user-should-verify-page-navigation;;5"
    },
    {
      "cells": [
        "Books",
        "Books"
      ],
      "line": 15,
      "id": "topmenu;user-should-verify-page-navigation;;6"
    },
    {
      "cells": [
        "Jewelry",
        "Jewelry"
      ],
      "line": 16,
      "id": "topmenu;user-should-verify-page-navigation;;7"
    },
    {
      "cells": [
        "Gift Cards",
        "Gift Cards"
      ],
      "line": 17,
      "id": "topmenu;user-should-verify-page-navigation;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2753563500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should verify page navigation",
  "description": "",
  "id": "topmenu;user-should-verify-page-navigation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on tab menu from \"Computers\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to computer page  \"Computers\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 40800,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 699652800,
  "status": "passed"
});
formatter.before({
  "duration": 2567858600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should verify page navigation",
  "description": "",
  "id": "topmenu;user-should-verify-page-navigation;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on tab menu from \"Electronics\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to computer page  \"Electronics\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 61400,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 691554800,
  "status": "passed"
});
formatter.before({
  "duration": 2481801700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should verify page navigation",
  "description": "",
  "id": "topmenu;user-should-verify-page-navigation;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on tab menu from \"Apparel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to computer page  \"Apparel\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 37900,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 671024500,
  "status": "passed"
});
formatter.before({
  "duration": 2917919100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should verify page navigation",
  "description": "",
  "id": "topmenu;user-should-verify-page-navigation;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on tab menu from \"Digital downloads\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to computer page  \"Digital downloads\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 23000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 672225500,
  "status": "passed"
});
formatter.before({
  "duration": 3158484700,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should verify page navigation",
  "description": "",
  "id": "topmenu;user-should-verify-page-navigation;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on tab menu from \"Books\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to computer page  \"Books\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 57700,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 784693900,
  "status": "passed"
});
formatter.before({
  "duration": 3327924000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should verify page navigation",
  "description": "",
  "id": "topmenu;user-should-verify-page-navigation;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on tab menu from \"Jewelry\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to computer page  \"Jewelry\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 33900,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 722982600,
  "status": "passed"
});
formatter.before({
  "duration": 2495837500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should verify page navigation",
  "description": "",
  "id": "topmenu;user-should-verify-page-navigation;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on tab menu from \"Gift Cards\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to computer page  \"Gift Cards\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 57000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 699826800,
  "status": "passed"
});
});