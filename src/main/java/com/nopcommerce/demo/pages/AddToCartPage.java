package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AddToCartPage extends Utility {
    private static final Logger log = LogManager.getLogger(AddToCartPage.class.getName());

    public AddToCartPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Build your own computer')]")
    WebElement buildYourOwnComputerText;
    @CacheLookup
    @FindBy(name = "product_attribute_1")
    WebElement processor;

    @CacheLookup
    @FindBy(xpath = "//select[@id='product_attribute_2']")
    WebElement ram;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_3_7']")
    WebElement hdd;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_4_9']")
    WebElement os;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_5_12']")
    WebElement software;

    @CacheLookup
    @FindBy(xpath = "//span[@id='price-value-1']")
    WebElement price;

    @CacheLookup
    @FindBy(xpath = "//button[@id='add-to-cart-button-1']")
    WebElement getAddToCartText;

    @CacheLookup
    @FindBy(xpath = "//body/div[@id='bar-notification']/div[1]/p[1]")
    WebElement getAddToCartSuccessfull;

    @CacheLookup
    @FindBy(xpath = "//body/div[@id='bar-notification']/div[1]/span[1]")
    WebElement crossButton;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Shopping cart')]")
    WebElement shopingCart;

    @CacheLookup
    @FindBy(xpath = "//button[text()='Go to cart']")
    WebElement goToCart;


    public String verifyBuildYourOwnComputerText() {
        log.info("verify build your computer text"+ buildYourOwnComputerText.toString()+ "<br>");
        return getTextFromElement(buildYourOwnComputerText);
    }

    public void selectProcessor() {
        log.info("select 2.2 GHz Intel Pentium Dual-Core E2200 " + processor.toString()+"<br>");
        selectByVisibleTextFromDropDown(processor, "2.2 GHz Intel Pentium Dual-Core E2200");

    }

    public void selectRam() {
        log.info("select 8GB [+$60.00]"+ram.toString()+"<br>");
        selectByVisibleTextFromDropDown(ram, "8GB [+$60.00]");

    }

    public void selectHDD() {
        log.info("Click Hdd"+ hdd.toString()+"<br>");
        clickOnElement(hdd);

    }

    public void selectOS() {
        log.info("Click os"+os.toString()+"<br>");
        clickOnElement(os);

    }

    public void selectSoftware() {
        log.info("click on software"+software.toString()+"<br>");
        clickOnElement(software);
    }

    public String verifyThePrice() {
        log.info("Get Price Text"+price.getText()+"<br>");
        return getTextFromElement(price);
    }

    public void clickOnAddToCart() {
        log.info("Add to Cart"+getAddToCartText.toString()+"<br>");
        clickOnElement(getAddToCartText);

    }

    public String verifyAddToCartSuccessfully() {
        log.info("Get add to cart successfully"+getAddToCartSuccessfull.toString()+"<br>");
        return getTextFromElement(getAddToCartSuccessfull);
    }

    public void clickOnCrossButton() {
        log.info("Click on cross button"+crossButton.toString()+"<br>");
        clickOnElement(crossButton);

    }

    public void mouceHoverToShopingCart() {
        log.info("Mouse Hover to Shopping Cart"+shopingCart.toString()+"<br>");
        mouseHoverToElement(shopingCart);

    }

    public void clickOnGoToCart() {
        log.info("Click on Go to Cart"+goToCart.toString()+"<br>");
        clickOnElement(goToCart);

    }


}
