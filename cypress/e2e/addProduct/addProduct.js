import computers from "../categories/computers"
/// <reference types="Cypress" />

class addProduct{
    get product1CartButton(){
        return cy.get('.product-box-add-to-cart-button').eq(2)
    }
    get prodcut2CartButton(){
        return cy.get('.product-box-add-to-cart-button').eq(5)
    }
    get product1wishlistButton(){
        return cy.get('.add-to-wishlist-button').eq(2)
    }
    get product2wishlistButton(){
        return cy.get('.add-to-wishlist-button').eq(5)
    }
    get product1CompareButton(){
        return cy.get('.add-to-compare-list-button').eq(2)
    }
    get product2CompareButton(){
        return cy.get('.add-to-compare-list-button').eq(5)
    }
    get alert(){
        return cy.get('.close')
    }

    closeAlert(){
        this.alert.click()
    }
    addProduct1ToCart(){
        const comp = new computers
        comp.openNotbooks()
        this.product1CartButton.click()
        this.closeAlert()
        return this
    }
    addProduct2ToCart(){
        this.prodcut2CartButton.click()
        this.closeAlert()
        return this
    }
    addProduct1ToWishlist(){
        const comp = new computers
        comp.openNotbooks()
        this.product1wishlistButton.click()
        this.closeAlert()
        return this
    }
    addProduct2ToWishlist(){                   
        this.product2wishlistButton.click()
        this.closeAlert()
        return this
    }
    addProduct1ToCompareList(){
        const comp = new computers
        comp.openNotbooks()
        this.product1CompareButton.click()
        this.closeAlert()
        return this
    }
    addProduct2ToCompareList(){               
        this.product2CompareButton.click()
        this.closeAlert()
        return this
    }
}
export default addProduct