

class LogInPage {
    get userInput(){
     return cy.get("#user-name")
    }

    get passwordInput(){
     return cy.get("#password")
    }

    get loginBtn(){
     return cy.get("#login-button")
    }

    get logErrorBtn(){
     return cy.get("button[class='error-button']")
    }

    get burgerMenuBtn(){
        return cy.get("#react-burger-menu-btn")
    }

    get logoutBtn(){
        return cy.get("#logout_sidebar_link")
    }


    fillUser(name:string){
        this.userInput.type(name);
    }

    fillPassword(password:string){
        this.passwordInput.type(password);
    }

    clickLoginBtn(){
        this.loginBtn.click();
    }

    clickBurgerMenuBtn(){
        this.burgerMenuBtn.click();
    }

    clickLogoutBtn(){
        this.logoutBtn.click();
    }
}
export default new LogInPage();
