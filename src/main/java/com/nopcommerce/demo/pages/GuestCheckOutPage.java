package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class GuestCheckOutPage extends Utility {
    private static final Logger log = LogManager.getLogger(GuestCheckOutPage.class.getName());

    public GuestCheckOutPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//input[@id='BillingNewAddress_FirstName']")
    WebElement firstNameField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='BillingNewAddress_LastName']")
    WebElement lastNameField;
    @CacheLookup
    @FindBy(name = "BillingNewAddress.Email")
    WebElement emailField;
    @CacheLookup
    @FindBy(xpath = "//select[@id='BillingNewAddress_CountryId']")
    WebElement countryField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='BillingNewAddress_City']")
    WebElement cityField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='BillingNewAddress_Address1']")
    WebElement addressField;
    @CacheLookup
    @FindBy(id = "BillingNewAddress_ZipPostalCode")
    WebElement postCodeField;
    @CacheLookup
    @FindBy(id = "BillingNewAddress_PhoneNumber")
    WebElement phoneNumberField;
    @CacheLookup
    @FindBy(xpath = "(//button[text()='Continue'])[1]")
    WebElement continueButton;
    @CacheLookup
    @FindBy(xpath = "//input[@id='shippingoption_1']")
    WebElement nextDayAirButton;
    @CacheLookup
    @FindBy(xpath = "//button[@onclick='ShippingMethod.save()']")
    WebElement continueButton1;
    @CacheLookup
    @FindBy(xpath = "//input[@id='paymentmethod_1']")
    WebElement creditCard;
    @CacheLookup
    @FindBy(xpath = "(//button[text()='Continue'])[4]")
    WebElement continueButton2;
    @CacheLookup
    @FindBy(id = "CreditCardType")
    WebElement masterCard;
    @CacheLookup
    @FindBy(name = "CardholderName")
    WebElement cardholderName;
    @CacheLookup
    @FindBy(id = "CardNumber")
    WebElement cardNumber;
    @CacheLookup
    @FindBy(xpath = "//select[@id='ExpireMonth']")
    WebElement month;
    @CacheLookup
    @FindBy(xpath = "//select[@id='ExpireYear']")
    WebElement year;
    @CacheLookup
    @FindBy(xpath = "//input[@id='CardCode']")
    WebElement cardCode;
    @CacheLookup
    @FindBy(xpath = "(//button[text()='Continue'])[5]")
    WebElement getContinueButton3;
    @CacheLookup
    @FindBy(xpath = "//li[@class='payment-method']")
    WebElement getTextCreditCard;
    @CacheLookup
    @FindBy(xpath = "//li[@class='shipping-method']")
    WebElement getTextOfShippingethod;
    @CacheLookup
    @FindBy(xpath = "(//strong[text()='$2,950.00'])[2]")
    WebElement getTotalPrice;
    @CacheLookup
    @FindBy(xpath = "//button[contains(text(),'Confirm')]")
    WebElement confirmButton;
    @CacheLookup
    @FindBy(xpath = "//h1[text()='Thank you']")
    WebElement getThankYouText;
    @CacheLookup
    @FindBy(xpath = "//strong[text()='Your order has been successfully processed!']")
    WebElement getOrderProcessedText;
    @CacheLookup
    @FindBy(xpath = "//button[@class='button-1 order-completed-continue-button']")
    WebElement continueButton4;

    public void enterDetails() {
        log.info("Enter first name"+firstNameField.toString()+"<br>");
        sendTextToElement(firstNameField, "Ram");
        log.info("Enter last Name"+lastNameField.toString()+"<br>");
        sendTextToElement(lastNameField, "Avatar");
        log.info("Enter Email"+emailField.toString()+"<br>");
        sendTextToElement(emailField, "Abcd123@gmail.com");
        log.info("Enter Country Field"+countryField.toString()+"<br>");
        selectByValueFromDropDown(countryField, "132");
        log.info("Enter City Field"+cityField.toString()+"<br>");
        sendTextToElement(cityField, "Harrow");
        log.info("Enter Address"+addressField.toString()+"<br>");
        sendTextToElement(addressField, "1 Middleton Street");
        log.info("Enter Post Code"+postCodeField.toString()+"<br>");
        sendTextToElement(postCodeField, "M548VU");
        log.info("Enter Phone Number"+phoneNumberField.toString()+"<br>");
        sendTextToElement(phoneNumberField, "1234567890");
    }

    public void clickOnContinueButton() {
        log.info("Click On Continue button"+continueButton.toString()+"<br>");
        clickOnElement(continueButton);
    }

    public void clickOnNextDayAir() {
        log.info("Click on next day air button"+nextDayAirButton.toString()+"<br>");
        clickOnElement(nextDayAirButton);
    }

    public void clickOnContinue() {
        log.info("Click On continue button"+continueButton.toString()+"<br>");
        clickOnElement(continueButton1);
    }

    public void clickOnCreditCard() {
    log.info("Click On Credit Card"+creditCard.toString()+"<br>");
        clickOnElement(creditCard);
    }

    public void clickOnContinues() {
        log.info("Click On continue button"+continueButton.toString()+"<br>");
        clickOnElement(continueButton2);
    }

    public void selectMasterCard() {
        log.info("Select master card from drop down menu"+masterCard.toString()+"<br>");
        selectByValueFromDropDown(masterCard, "MasterCard");
    }

    public void enterDetailsOfCard() {
        log.info("Enter name cardholder name"+cardholderName.toString()+"<br>");
        sendTextToElement(cardholderName, "Ram Avatar");
        log.info("Enter Card Number"+cardNumber.toString()+"<br>");
        sendTextToElement(cardNumber, "5555 5555 5555 4444");
        log.info("Enter Month"+month.toString()+"<br>");
        selectByVisibleTextFromDropDown(month, "04");
        log.info("Enter Year"+year.toString()+"<br>");
        selectByVisibleTextFromDropDown(year, "2026");
        log.info("Enter Security Code"+cardCode.toString()+"<br>");
        sendTextToElement(cardCode, "111");
    }

    public void clickOnContinueButton3() {
        log.info("Get Continue Button"+getContinueButton3.toString()+"<br>");
        clickOnElement(getContinueButton3);
    }

    public String verifyCreditCardPaymentMethod() {
        log.info("Get Text Credit Card"+getTextCreditCard.toString()+"<br>");
                return getTextFromElement(getTextCreditCard);
    }

    public String verifyShippingMethod() {
        log.info("Get Text of Shipping"+getTextOfShippingethod.toString()+"<br>");
        return getTextFromElement(getTextOfShippingethod);
    }

    public String verifyTotalPrice() {
        log.info("Get Total Price"+getTotalPrice.toString()+"<br>");
        return getTextFromElement(getTotalPrice);
    }

    public void clickOnConfirm() {
        log.info("Confirm Button"+confirmButton.toString()+"<br>");
        clickOnElement(confirmButton);
    }

    public String verifyThankYouMessage() {
        log.info("Thank You"+getThankYouText.toString()+"<br>");
        return getTextFromElement(getThankYouText);
    }

    public String verifyOrderPlacedSuccessfullyText() {
        log.info("Process Order"+getOrderProcessedText.getText()+"<br>");
        return getTextFromElement(getOrderProcessedText);
    }

    public void clickOnContinueButton4() {
        log.info("Click On continue button"+continueButton.toString()+"<br>");
        clickOnElement(continueButton4);
    }
}
