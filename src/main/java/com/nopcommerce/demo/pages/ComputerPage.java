package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ComputerPage extends Utility {
    private static final Logger log = LogManager.getLogger(ComputerPage.class.getName());

    public ComputerPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[@class='page-title']")
    WebElement pageTitleText;

    @CacheLookup
    @FindBy(xpath = "//a[@title='Show products in category Desktops'][normalize-space()='Desktops']")
    WebElement desktop;

    public String verifyPageTitleText() {
      log.info("Get text Computer"+pageTitleText.toString()+"<br>");
        return getTextFromElement(pageTitleText);
    }

    public void clickOnDesktop() {
     log.info("Click on Desktop"+desktop.toString()+"<br>");
        clickOnElement(desktop);

    }

}
