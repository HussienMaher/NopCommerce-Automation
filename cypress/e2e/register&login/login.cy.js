/// <reference types="Cypress" />
import homepage from "../homePage/homepage"
import login from "./log"
import register from "./reg"

it("login with valid credintials",()=>{
    const log = new login
    log.loginUser()
})
it("login with invalid email",()=>{
    const log = new login
    log.unregisteredEmailLogin()
})
it("login with valid password",()=>{
    const log = new login
    log.invalidPassLogin()
})