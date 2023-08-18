
import computers from "../categories/computers"
import build from "./bulidYourComputer"

it('open build',()=>{
    const b = new computers
    b.openbuild()
})
it.only('add one computer to cart',()=>{
    const device = new build
    device.addProductToCart()
})
it('add 5 computers to cart',()=>{
    const device = new build
    device.addProductToCart(2,3,5)
})
it('add two computers with different specifications to cart',()=>{
    const device = new build
    device.addProductToCart(2,3,1)
    device.addProductToCart(1,2,1)
})