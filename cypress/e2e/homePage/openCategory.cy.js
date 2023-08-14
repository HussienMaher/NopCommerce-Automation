/// <reference types="Cypress" />

import homepage from "./homepage"

it('open electronics category',()=>{
    const home = new homepage
    home.openElectronics()
})

it('open jewlery category',()=>{
    const home = new homepage
    home.openJewelry()
})
it('open computers category',()=>{
    const home = new homepage
    home.openComputers()
})