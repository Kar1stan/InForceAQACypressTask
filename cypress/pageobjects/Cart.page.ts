
class CartPage {  
    
    get removeBtn1(){
     return cy.get("#remove-sauce-labs-backpack")
    }

    get removeBtn2(){
        return cy.get("#remove-sauce-labs-bike-light")
    }

    get cartIcon(){
        return cy.get("#shopping_cart_container")
    }

    get cartItem1(){
        return cy.xpath("//div[text()='Sauce Labs Backpack']")
    }

    get cartItem2(){
        return cy.xpath("//div[text()='Sauce Labs Bike Light']")
    }

    get checkoutBtn(){
        return cy.get("#checkout")
    }

    clickCartIcon(){
        this.cartIcon.click();
    }

    clickCheckoutBtn(){
        this.checkoutBtn.click();
    }

}
export default new CartPage();
