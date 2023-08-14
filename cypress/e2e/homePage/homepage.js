import computer from "../porductPage/Computer"
import login from "../register&login/log"
import prodcut from "../porductPage/macBook"
import register from "../register&login/reg"
import electronics from "../categories/computers"
import computers from "../categories/computers"

class homepage{

get registerPage(){
    return cy.get('.ico-register')
}
get loginPage(){
    return cy.get('.ico-login')
}
get addproduct(){
    return cy.get('.product-box-add-to-cart-button').eq(1)
}
get productPage(){
    return cy.get('.product-title').eq(0)
}
get category(){
    return cy.get('.menu-toggle')
}
get computers(){
    return cy.get('a[href="/computers"]').eq(1)
}
get electronics(){
    return cy.get('a[href="/electronics"]').eq(1)
}
get jewelry(){
    return cy.get('[href="/jewelry"]').eq(1)
}

homepage(){
    cy.visit('https://demo.nopcommerce.com/')
    return this
}
openRegister(){
    this.registerPage.click()
    return register
}
openLogin(){
    this.loginPage.click()
    return login
}
addProduct(){
    this.addproduct.click()
    return prodcut
}
openProduct(){
    this.productPage.click()
    return computer
}
openProductPage(){
    const log = new login
    log.loginUser()
    this.openProduct()
    return computer
}
openProduct2Page(){
    const log = new login
    log.loginUser()
    this.addProduct()
    return prodcut
}
openElectronics(){
    this.homepage().category.click()
    this.electronics.click()
    return electronics
}
openJewelry(){
    this.homepage().category.click()
    this.jewelry.click()
}
openComputers(){
    this.homepage().category.click()
    this.computers.click()
    return computers
}
}
export default homepage