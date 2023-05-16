package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']/li")
    List<WebElement> topMenuTab;

    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[normalize-space()='Computers']")
    WebElement computerTab;

    @CacheLookup
    @FindBy(xpath = "//h2[text()='Welcome to our store']")
    WebElement getTextWelcome;

    @CacheLookup
    @FindBy(xpath = "(//a[text()='Electronics '])[1]")
    WebElement mouseHoverToElectronic;

    @CacheLookup
    @FindBy(xpath = "(//a[text()='Cell phones '])[1]")
    WebElement getMouseHoverToElectronicAndClickOnCellPhone;

    public void selectMenu(String menu) {
        try {
            List<WebElement> list = topMenuTab;
            for (WebElement listOfElement : list) {
                if (listOfElement.getText().equals(menu)) {
                    listOfElement.click();
                }
            }
        } catch (StaleElementReferenceException e) {
            List<WebElement> list = topMenuTab;
        }
        log.info("Click on Top Menu" + topMenuTab.toString()+"<br>");
    }

    public void clickOnComputerTab() {
     log.info("Click Computer Tab"+computerTab.toString()+"<br>");
        clickOnElement(computerTab);

    }

    public String verifyWelcomeText() {
     log.info("Welcome Text"+getTextWelcome.getText()+"<br>");
        return getTextFromElement(getTextWelcome);
    }

    public void setMouseHoverToElectronic() {
        log.info("Mouse Hover To Electronic"+mouseHoverToElectronic.getText()+"<br>");
        mouseHoverToElement(mouseHoverToElectronic);
    }

    public void setGetMouseHoverToElectronicAndClickOnCellPhone() {
        log.info("Get Mouse Hover to Electronic And Click On Cell Phone"+getMouseHoverToElectronicAndClickOnCellPhone.getText()+"<br>");
        mouseHoverToElementAndClick(getMouseHoverToElectronicAndClickOnCellPhone);

    }

}
