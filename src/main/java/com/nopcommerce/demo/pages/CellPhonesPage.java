package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CellPhonesPage extends Utility {
    private static final Logger log = LogManager.getLogger(CellPhonesPage.class.getName());

    public CellPhonesPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Cell phones')]")
    WebElement getTextCellPhone;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'List')]")
    WebElement listView;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Nokia Lumia 1020')]")
    WebElement nokiaLumia1020;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Nokia Lumia 1020')]")
    WebElement getTextNokia;

    @CacheLookup
    @FindBy(xpath = "//span[@id='price-value-20']")
    WebElement getPrice;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_enteredQuantity_20']")
    WebElement changeQty;

    @CacheLookup
    @FindBy(xpath = "//button[@id='add-to-cart-button-20']")
    WebElement addToCart;

    @CacheLookup
    @FindBy(xpath = "//p[text()='The product has been added to your ']")
    WebElement addToCartSuccessfully;

    @CacheLookup
    @FindBy(xpath = "//body/div[@id='bar-notification']/div[1]/span[1]")
    WebElement crossButton;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Shopping cart')]")
    WebElement shoppingCart;

    @CacheLookup
    @FindBy(xpath = "//button[contains(text(),'Go to cart')]")
    WebElement goToCart;


    public String verifyTextCellPhone() {
        log.info("Get Text Cell Phone"+getTextCellPhone.toString()+"<br>");
        return getTextFromElement(getTextCellPhone);
    }

    public void clickOnListView() {
        log.info("Click on List View"+listView.toString()+"<br>");
        clickOnElement(listView);

    }

    public void clickOnNokiaLumia1020() {
        log.info("Click on Nokia Lumia 1020"+nokiaLumia1020.toString()+"<br>");
        clickOnElement(nokiaLumia1020);

    }

    public String verifyTextNokiaLumia1020() {
        log.info("Click on Nokia Lumia 1020"+getTextNokia.toString()+"<br>");
        return getTextFromElement(getTextNokia);

    }

    public String verifyPrice() {
      log.info("Get Price Text"+getPrice.toString()+"<br>");
        return getTextFromElement(getPrice);
    }

    public void changeThatQty() {
        log.info("Change Qty"+changeQty.toString()+"<br>");
        clickOnElement(changeQty);
        changeQty.clear();
        sendTextToElement(changeQty, "2");

    }

    public void clickOnAddToCart() {
        log.info("Click on Add to Cart"+addToCart.toString()+"<br>");
        clickOnElement(addToCart);

    }

    public String verifyAddToCartSuccessfully() {
        log.info("Get text Add to Cart Successfully"+addToCartSuccessfully.toString()+"<br>");
        return getTextFromElement(addToCartSuccessfully);
    }

    public void clickOnCrossButton() {
        log.info("Click on Cross Button"+crossButton.toString()+"<br>");
        clickOnElement(crossButton);

    }

    public void mouseHoverToShoppingCart() {
        log.info("Mouse hover to Shopping cart"+goToCart.toString()+"<br>");
        mouseHoverToElement(shoppingCart);
        clickOnElement(goToCart);

    }
}
