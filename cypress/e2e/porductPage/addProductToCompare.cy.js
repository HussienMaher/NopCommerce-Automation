/// <reference types="Cypress" />

import computer from "./Computer"
import prodcut from "./macBook"

it('add one computer to comparelist',()=>{
    const device = new computer
    device.addProductToCompare(2,3,1)
})
it('add two products to comparelist',()=>{
    const device = new computer
    const device2 =new prodcut
    device.addProductToCompare(2,3,1)
    device2.addToCart()
})