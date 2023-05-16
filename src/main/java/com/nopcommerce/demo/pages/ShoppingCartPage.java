package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ShoppingCartPage extends Utility {
    private static final Logger log = LogManager.getLogger(ShoppingCartPage.class.getName());

    public ShoppingCartPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Shopping cart')]")
    WebElement getShoppingCartText;

    @CacheLookup
    @FindBy(xpath = "//input[@class='qty-input']")
    WebElement changeQty;
    @CacheLookup
    @FindBy(xpath = "(//strong[text()='$2,950.00'])[2]")
    WebElement getPriceText ;
    @CacheLookup
    @FindBy(xpath = "//button[@id='updatecart']")
    WebElement updateCart ;
    @CacheLookup
    @FindBy(xpath = "//input[@id='termsofservice']")
    WebElement checkBox;
    @CacheLookup
    @FindBy(xpath = "//button[@id='checkout']")
    WebElement checkOut;
    @CacheLookup
    @FindBy(xpath = "//input[@class='qty-input']")
    WebElement getQty;
    @CacheLookup
    @FindBy(xpath = "//tbody/tr[1]/td[6]/span[1]")
    WebElement getTextPrice;

    public String verifyShoppingCartText() {
        log.info("Get Shopping Cart Text"+getShoppingCartText.getText()+"<br>");
        return getTextFromElement(getShoppingCartText);
    }

    public void changeTheQuantity() {

        clickOnElement(changeQty);
        driver.findElement(By.xpath("//input[@class='qty-input']")).clear();
        log.info("Change Qty to 2"+changeQty.getText()+"<br>");
        sendTextToElement(changeQty,"2");
       log.info("Update Cart"+updateCart.getText()+"<br>");
        clickOnElement(updateCart);


    }
    public String verifyTotalPrice(){
        log.info("Get Price Text"+getTextPrice.getText()+"<br>");
        return getTextFromElement(getPriceText);
    }
    public void clickOnCheckBox(){
        log.info("Check Box"+checkBox.getText()+"<br>");
        clickOnElement(checkBox);
    }
    public void clickOnCheckOut(){
        clickOnElement(checkOut);
    }
    public String verifyQty(){
        String expectedQty = "2";
        WebElement actualElement = getQty;
        String actualQty = actualElement.getAttribute("value");
        log.info("Verify Qty"+getQty.getText()+"<br>");
        return actualQty;
    }
    public String verifyPriceText(){
        log.info("Get Price"+getPriceText.getText()+"<br>");
        return getTextFromElement(getTextPrice);
    }
}
