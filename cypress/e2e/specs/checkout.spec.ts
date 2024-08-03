import CheckoutPage from "../../pageobjects/Checkout.page";
import CartPage from "../../pageobjects/Cart.page"
import LogInPage from "../../pageobjects/LogIn.page"
import MainPage from "../../pageobjects/MainPage.page"

describe('Sausedemo Checkout Test', () => {
  beforeEach(() => {
    MainPage.visitUrl();
  })

  it('Verify that the correct user information is pre-filled based on the logged-in user', () => {
    LogInPage.fillUser("standard_user");
    LogInPage.fillPassword("secret_sauce");
    LogInPage.clickLoginBtn();
    CartPage.clickCartIcon()
    CartPage.clickCheckoutBtn()
    CheckoutPage.inputFirstName.should("not.be.empty")
    CheckoutPage.inputLastName.should("not.be.empty")
    CheckoutPage.inputPostalCode.should("not.be.empty")
    //The user's information in checkout is not pre-filled so the check has failed .
    CheckoutPage.clickContinueBtn()
    cy.url().should('include','/www.saucedemo.com/checkout-step-one.html');
  })

  it('Should fill the correct credentials in Checkout:Your Information and verify correct items and total price', () => {
    LogInPage.fillUser("standard_user");
    LogInPage.fillPassword("secret_sauce");
    LogInPage.clickLoginBtn();
    cy.addToCart(['add-to-cart-sauce-labs-backpack', 'add-to-cart-sauce-labs-bike-light']);
    CartPage.clickCartIcon()
    CartPage.clickCheckoutBtn()
    CheckoutPage.fillFirstName("User")
    CheckoutPage.fillLastName("Userovich")
    CheckoutPage.fillPostalCode("88888")
    CheckoutPage.clickContinueBtn()    
    CartPage.cartItem1.should('be.visible')
    CartPage.cartItem2.should('be.visible')
    CheckoutPage.totalPriceLabel.should('be.visible')
  })

  it('Verify information in Checkout:Complete', () => {
    CheckoutPage.clickFinishBtn()
    CheckoutPage.confirmationMessage.should('be.visible')
    cy.url().should('include','/www.saucedemo.com/checkout-complete.html');
  })

  //Additional test case
  it('Should fill empty credentials in Checkout:Your Information and check error message', () => {
    LogInPage.fillUser("standard_user");
    LogInPage.fillPassword("secret_sauce");
    LogInPage.clickLoginBtn();
    CartPage.clickCartIcon()
    CartPage.clickCheckoutBtn()
    CheckoutPage.clickContinueBtn()  
    CheckoutPage.errorMessage.should("be.visible")  
  })
})
