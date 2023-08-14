/// <reference types="Cypress" />

import computer from "./Computer"
import prodcut from "./macBook"

it('add one computer to cart',()=>{
    const device = new computer
    device.addProductToCart(2,3,1)
})
it('add 5 computers to cart',()=>{
    const device = new computer
    device.addProductToCart(2,3,5)
})
it('add two computers with different specifications to cart',()=>{
    const device = new computer
    device.addProductToCart(2,3,1)
    device.addProductToCart(1,2,1)
})