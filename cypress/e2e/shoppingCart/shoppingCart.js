import addProduct from "../addProduct/addProduct"

class shopping{
   
get cart(){
    return cy.get('.cart-label')
}   
get terms(){
    return cy.get('#termsofservice')
}
get chechout(){
    return cy.get('#checkout')
}
get removeButton(){
    return cy.get('.remove-btn')
}
get quantity(){
    return cy.get('.qty-input')
}
get updateButton(){
    return cy.get('#updatecart')
}
get continue(){
    return cy.get('.continue-shopping-button')
}
get estimate(){
    return cy.get('#open-estimate-shipping-popup')
}
get country(){
    return cy.get('#CountryId')
}
get state(){
    return cy.get('#StateProvinceId')
}
get zip(){
    return cy.get('#ZipPostalCode')
}
get Byground(){
    return cy.get('.estimate-shipping-row-item-radio').eq(1)
}
get nextDayAir(){
    return cy.get('.estimate-shipping-row-item-radio').eq(2)
}
get ScndNextAir(){
    return cy.get('.estimate-shipping-row-item-radio').eq(3)
}
get apply(){
    return cy.get('.apply-shipping-button')
}

//methods
openCart(){
    this.cart.click()
}
agreeOnTerms(){
    this.terms.check()
    return this
}
checkOut(){
    this.chechout.click()
}
addProductsToCart(){
    const ad = new addProduct
    ad.addProduct1ToCart().addProduct2ToCart()
    this.openCart()
    return this
}
removeProduct(a){
    this.addProductsToCart().removeButton.eq(a).click()
    return this
}
updateCart(b,c){
    this.addProductsToCart().quantity.eq(b).clear().type(c)
    this.updateButton.click()
}
continueShopping(){
    this.addProductsToCart().continue.click()
}
estimateShipping(c,a,t){
    this.addProductsToCart().estimate.click()
    this.country.select(c)
    this.state.select(a)
    this.zip.type(t)
    this.nextDayAir.click()
    this.apply.click()
}
chechoutCartWithoutTerms(){
    this.addProductsToCart().chechout.click()
}
chechoutCart(){
    this.addProductsToCart().terms.click()
    this.chechout.click()
}


}
export default shopping