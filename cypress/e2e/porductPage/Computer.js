import compare from "../compare/compare"
import homepage from "../homePage/homepage"
import login from "../register&login/log"
import shopping from "../shoppingCart/shoppingCart"
import wishlist from "../wishlist/whishlist"

class computer{
    get processor(){
       return cy.get('#product_attribute_1')
    }
    get ram(){
        return cy.get('#product_attribute_2')
    }
    get HDD400(){
        return cy.get('#product_attribute_3_7')
    }
    get osPremium(){
        return cy.get('#product_attribute_4_9')
    }
    get office(){
        return cy.get('#product_attribute_5_10')
    }
    get reader(){
        return cy.get('#product_attribute_5_11')
    }
    get totalCommander(){
        return cy.get('#product_attribute_5_12')
    }
    get quantity(){
        return cy.get('#product_enteredQuantity_1')
    }
    get addToCart(){
        return cy.get('#add-to-cart-button-1')
    }
    get addToWishlist(){
        return cy.get('#add-to-wishlist-button-1')
    }
    get addToCompare(){
        return cy.get('.add-to-compare-list-button')
    }
    get EmailToFriend(){
        return cy.get('.email-a-friend-button')
    }
    //Methods
    selectprocessor(b){
        this.processor.select(b)
        return this
    }
    selectRam(a){
        this.ram.select(a)
        return this
    }
    selectHDD(){
        this.HDD400.check()
        return this
    }
    selectOS(){
        this.osPremium.check()
        return this
    }
    selectOffice(){
        this.office.check()
        return this
    }
    selectReader(){
        this.reader.check()
        return this
    }
    selectTotalCommander(){
        this.totalCommander.check()
        return this
    }
    enterQuantity(Q){
        this.quantity.type(Q)
        return this
    }
    addToCart(){
        this.addToCart.click()
        return shopping
    }
    addToWishlist(){
        this.addToWishlist.click()
        return wishlist
    }
    addToCompare(){
        this.addToCompare.click()
        return compare
    }
    addProductToCart(B,A,Q){
        const home = new homepage
        home.openProductPage()
        this.selectprocessor(B).selectRam(A).selectHDD().selectOS().selectReader().selectTotalCommander().enterQuantity(Q).addProductToCart()
        return shopping
    }
    addProductToWishlist(B,A,Q){
        const home = new homepage
        home.openProductPage()
        this.selectprocessor(B).selectRam(A).selectHDD().selectOS().selectReader().selectTotalCommander().enterQuantity(Q).addProductToCart()
        return shopping
    }
    addProductToCompare(B,A,Q){
        const home = new homepage
        home.openProductPage()
        this.selectprocessor(B).selectRam(A).selectHDD().selectOS().selectReader().selectTotalCommander().enterQuantity(Q).addProductToCart()
        return shopping
    }
}
export default computer