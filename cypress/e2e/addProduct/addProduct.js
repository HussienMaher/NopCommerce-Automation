import computers from "../categories/computers"

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

    addProduct1ToCart(){
        const comp = new computers
        comp.openNotbooks()
        this.product1CartButton.click()
        return this
    }
    addProduct2ToCart(){
        const comp = new computers
        comp.openNotbooks()                     //notification blockig the button
        this.prodcut2CartButton.click()
        return this
    }
    addProduct1ToWishlist(){
        const comp = new computers
        comp.openNotbooks()
        this.product1wishlistButton.click()
        return this
    }
    addProduct2ToWishlist(){
        const comp = new computers
        comp.openNotbooks()                     
        this.product2wishlistButton.click()
        return this
    }
    addProduct1ToCompareList(){
        const comp = new computers
        comp.openNotbooks()
        this.product1CompareButton.click()
        return this
    }
    addProduct2ToCompareList(){
        const comp = new computers
        comp.openNotbooks()                     
        this.product2CompareButton.click()
        return this
    }
}
export default addProduct