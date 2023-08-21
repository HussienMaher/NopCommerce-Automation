import check1 from "../checkOut/checkout1"
import shopping from "./shoppingCart"

it('remove a product from cart',()=>{
    const cart = new shopping
    cart.removeProduct(0,5)
})
it('continue shopping from cart page',()=>{
    const cart = new shopping
    cart.continueShopping()
})
it('estimate shipping',()=>{
    const cart = new shopping
    cart.estimateShipping('Egypt',0,456118)
})
it('checkout without checking agree with terms of service',()=>{
    const cart = new shopping
    cart.chechoutCartWithoutTerms()
})
it('checkout the shopping cart',()=>{
    const cart = new shopping
    cart.chechoutCart()
})
