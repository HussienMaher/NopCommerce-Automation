/// <reference types="Cypress" />

import addProduct from "./addProduct"

it.skip('add product to cart',()=>{
    const ad = new addProduct
    ad.addProduct1ToCart()
    cy.wait(3000)
})
it('add two products to cart',()=>{
    const ad = new addProduct
    ad.addProduct1ToCart()
    ad.addProduct2ToCart()
    cy.wait(1000)
})
it('add two products to wishlist',()=>{
    const ad = new addProduct
    ad.addProduct1ToWishlist()
    ad.addProduct2ToWishlist()
    cy.wait(1000)
})
it('add two products to compare list',()=>{
    const ad = new addProduct
    ad.addProduct1ToCompareList()
    ad.addProduct2ToCompareList()
    cy.wait(1000)
})