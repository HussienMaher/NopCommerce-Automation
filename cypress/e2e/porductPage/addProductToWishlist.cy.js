/// <reference types="Cypress" />

import computer from "./Computer"

it('add one computer to wishlist',()=>{
    const device = new computer
    device.addProductToWishlist(2,3,1)
})