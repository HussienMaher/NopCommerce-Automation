import shopping from "../shoppingCart/shoppingCart"

class prodcut{
get addtocart(){
    return cy.get('#add-to-cart-button-4')
}
get shopping(){
    return cy.get('.cart-label')
}

//methods
addToCart(){
    this.addtocart.click()
    return this
}
goToCart(){
    this.shopping.click()
    return shopping
}

}

export default prodcut