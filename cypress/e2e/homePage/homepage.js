import login from "../register&login/log"
import register from "../register&login/reg"
import electronics from "../categories/computers"
import computers from "../categories/computers"
import build from "../buildYourComputer/bulidYourComputer"

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
    return build
}
openProduct(){
    this.productPage.click()
    return build
}
openProductPage(){
    const log = new login
    log.loginUser()
    this.openProduct()
    return build
}
openProduct2Page(){
    const log = new login
    log.loginUser()
    this.addProduct()
    return build
}
openElectronics(){
    const log = new login
    log.loginUser()
    this.homepage().category.click()
    this.electronics.click()
    return electronics
}
openJewelry(){
    const log = new login
    log.loginUser()
    this.homepage().category.click()
    this.jewelry.click()
}
openComputers(){
    const log = new login
    log.loginUser()
    this.homepage().category.click()
    this.computers.click()
    return computers
}
}
export default homepage