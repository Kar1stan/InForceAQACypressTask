import LogInPage from "../../pageobjects/LogIn.page"
import MainPage from "../../pageobjects/MainPage.page"

describe('Sausedemo Login Test', () => {
  beforeEach(() => {
    MainPage.visitUrl();
  })

  it('Verify that the login page is accessible and loads without errors', () => {
    cy.url().should('include','/www.saucedemo.com');
  })

  it('Verify that a user with valid login credentials can log in successfully.', () => {
    LogInPage.fillUser("standard_user");
    LogInPage.fillPassword("secret_sauce");
    LogInPage.clickLoginBtn()
    cy.url().should('include','/www.saucedemo.com/inventory.html');
  })

  it('Verify that a user with invalid login credentials cannot log in and sees an error message', () => {
    LogInPage.fillUser("wrong_user");
    LogInPage.fillPassword("error_sauce");
    LogInPage.clickLoginBtn()
    LogInPage.logErrorBtn.should('be.visible');
    cy.url().should('include','/www.saucedemo.com');
  })

  it('Verify the user successfully logout', () => {
    LogInPage.fillUser("standard_user");
    LogInPage.fillPassword("secret_sauce");
    LogInPage.clickLoginBtn()
    LogInPage.clickBurgerMenuBtn()
    LogInPage.clickLogoutBtn()
    LogInPage.userInput.should('be.empty')
    LogInPage.passwordInput.should('be.empty')
    cy.url().should('include','/www.saucedemo.com');

  })
})
