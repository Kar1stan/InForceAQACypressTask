import CartPage from "../../pageobjects/Cart.page"
import MainPage from "../../pageobjects/MainPage.page"
import LogInPage from "../../pageobjects/LogIn.page"
import CheckoutPage from "../../pageobjects/Checkout.page";

describe('Sausedemo Cart Test', () => {
  beforeEach(() => {
    MainPage.visitUrl();
  })

it('Should add at least two different items to the cart using the custom command', () => {
    LogInPage.fillUser("standard_user");
    LogInPage.fillPassword("secret_sauce");
    LogInPage.clickLoginBtn();
    cy.addToCart(['add-to-cart-sauce-labs-backpack', 'add-to-cart-sauce-labs-bike-light']);
    CartPage.removeBtn1.should('be.visible');
    CartPage.removeBtn2.should('be.visible');
    CartPage.cartIcon.should('have.text','2')
})

it('Should proceed to Checkout:Overview and check items', () => {
  LogInPage.fillUser("standard_user");
  LogInPage.fillPassword("secret_sauce");
  LogInPage.clickLoginBtn();
  cy.addToCart(['add-to-cart-sauce-labs-backpack', 'add-to-cart-sauce-labs-bike-light']);
  CartPage.clickCartIcon()
  CartPage.cartItem1.should('be.visible')
  CartPage.cartItem2.should('be.visible')
  CartPage.clickCheckoutBtn()
  CheckoutPage.fillFirstName("User")
  CheckoutPage.fillLastName("Userovich")
  CheckoutPage.fillPostalCode("88888")
  CheckoutPage.clickContinueBtn()
  CartPage.cartItem1.should('be.visible')
  CartPage.cartItem2.should('be.visible')
})

//Additional test case
it('Verify sorting items to price function on Products page', () => {
  LogInPage.fillUser("standard_user");
  LogInPage.fillPassword("secret_sauce");
  LogInPage.clickLoginBtn();
  CartPage.selectPriceOption("Price (high to low)");
  CartPage.firstItemFromProducts.should('have.text',"$49.99")
  CartPage.selectPriceOption("Price (low to high)");
  CartPage.firstItemFromProducts.should('have.text',"$7.99")
  
})

})
