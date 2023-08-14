import homepage from "../homePage/homepage"
import {faker} from '@faker-js/faker';

class register{
    //elements
get gender(){
    return cy.get('#gender-male')
}
get firstName(){
    return cy.get('#FirstName')
}
get lastName(){
    return cy.get('#LastName')
}
get day(){
    return cy.get('[name="DateOfBirthDay"]')
}
get month(){
    return cy.get('[name="DateOfBirthMonth"]')
}
get year(){
    return cy.get('[name="DateOfBirthYear"]')
}
get email(){
    return cy.get('#Email')
}
get company(){
    return cy.get('#Company')
}
get newsletter(){
    return cy.get('#Newsletter')
}
get password(){
    return cy.get('#Password')
}
get confirmPassword(){
    return cy.get('#ConfirmPassword')
}
get registerbutton(){
    return cy.get('#register-button')
}
get countinue(){
    return cy.get('.register-continue-button')
}
//methods
selectGender(){
    this.gender.check()
    return this
}
enterFirstName(name){
    this.firstName.type(name)
    return this
}
enterLastName(lastname){
    this.lastName.type(lastname)
    return this
}
selectDay(Day){
    this.day.select(Day)
    return this
}
selectmonth(Month){
    this.month.select(Month)
    return this
}
selectYear(Year){
    this.year.select(Year)
    return this
}
enterEmail(Email){
    this.email.type(Email)
    return this
}
enterCompany(Company){
    this.company.type(Company)
    return this
}
uncheckNews(){
    this.newsletter.uncheck()
    return this
}
enterPassword(Password){
    this.password.type(Password)
    return this
}
enterConfirmPassword(Confirm){
    this.confirmPassword.type(Confirm)
    return this
}
clickRegister(){
    this.registerbutton.click()
    return this
}
continue(){
    this.countinue.click()
    return homepage
}
registerUser(email,pass,firstName,lastName){
const home =new homepage
const regist = new register
home.homepage().openRegister()
regist.selectGender().enterFirstName(firstName).enterLastName(lastName).selectDay(12).selectmonth("May")
.selectYear("2003").enterEmail(email).enterCompany("company").enterPassword(pass).enterConfirmPassword(pass)
.clickRegister().continue()
}
registration(email,pass,firstName,lastName){
const home =new homepage
const regist = new register
home.homepage().openRegister()
regist.selectGender().enterFirstName(firstName).enterLastName(lastName).selectDay(12).selectmonth("May")
.selectYear("2003").enterEmail(email).enterCompany("company").enterPassword(pass).enterConfirmPassword(pass)
.clickRegister()
}
}
export default register