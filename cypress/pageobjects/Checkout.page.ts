
class CheckoutPage{

    get inputFirstName(){
        return cy.get("#first-name")
    }

    get inputLastName(){
        return cy.get("#last-name")
    }

    get inputPostalCode(){
        return cy.get("#postal-code")
    }

    get continueBtn(){
        return cy.get("#continue")
    }

    get totalPriceLabel(){
        return cy.xpath("//div[text()='43.18']")
    }

    get confirmationMessage(){
        return cy.xpath("//h2[text()='Thank you for your order!']")
    }

    get finishBtn(){
        return cy.get("#finish")
    }

    get errorMessage(){
        return cy.get("h3[data-test='error']")
    }

    fillFirstName(name:string){
        this.inputFirstName.type(name)
    }

    fillLastName(last_name:string){
        this.inputLastName.type(last_name)
    }

    fillPostalCode(password:string){
        this.inputPostalCode.type(password)
    }

    clickContinueBtn(){
        this.continueBtn.click();
    }

    clickFinishBtn(){
        this.finishBtn.click();
    }
   
}
export default new CheckoutPage();
