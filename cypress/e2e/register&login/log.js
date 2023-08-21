/// <reference types="Cypress" />
import homepage from "../homePage/homepage"
import register from "./reg"
import {faker} from '@faker-js/faker';
class login{
get email(){
    return cy.get('#Email')
}
get password(){
    return cy.get('#Password')
}
get rememberme(){
    return cy.get('#RememberMe')
}
get logButton(){
    return cy.get('.login-button')
}
get registerB(){
    return cy.get('.register-button')
}
get forgot(){
    return cy.get('.forgot-password')
}
get x(){
    return cy.get('li').eq(1)
}

//methods
enterEmail(emaill){
    this.email.type(emaill)
    return this
}
enterpassword(pass){
    this.password.type(pass)
    return this
}
rememberMe(){
    this.rememberme.check()
    return this
}
clickLogin(){
    this.logButton.click()
    return homepage
}
goRegister(){
    this.registerB.click()
    return register
}
forgotPassword(){
    this.forgot.click()
}
loginUser(){
    const reg = new register
    const home = new homepage
    const email = faker.internet.email()
    const pass = faker.internet.password()
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    reg.registerUser(email,pass,firstName,lastName)
    this.x.then((a)=>{
        var t = a.text()
        if(t == "Log in"){
    home.openLogin()
    this.enterEmail(email).enterpassword(pass).rememberMe().clickLogin()
      }})
}
invalidPassLogin(){
    const reg = new register
    const home = new homepage
    const email = faker.internet.email()
    const pass = faker.internet.password()
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    reg.registerUser(email,pass,firstName,lastName)
    home.openLogin()
    this.enterEmail(email).enterpassword(123456).rememberMe().clickLogin()
}
unregisteredEmailLogin(){
    const home = new homepage
    const email = faker.internet.email()
    const pass = faker.internet.password()
    home.homepage().openLogin()
    this.enterEmail(email).enterpassword(pass).rememberMe().clickLogin()
}
}
export default login