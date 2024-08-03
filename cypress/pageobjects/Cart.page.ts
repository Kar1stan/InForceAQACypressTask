
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

    get firstItemFromProducts(){
        return cy.xpath("(//div[@class='inventory_item'])[1]//div[@class='inventory_item_price']")
    }

    get selectBtn(){
        return cy.get("select[class='product_sort_container']")
    }

    clickCartIcon(){
        this.cartIcon.click();
    }

    clickCheckoutBtn(){
        this.checkoutBtn.click();
    }

    selectPriceOption(option:string){
        this.selectBtn.select(option);
    }

}
export default new CartPage();
