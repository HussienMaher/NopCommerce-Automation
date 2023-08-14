/// <reference types="Cypress" />

import homepage from "./homepage"

it('open product page from home page',()=>{
    const home = new homepage
    home.openProductPage()
})