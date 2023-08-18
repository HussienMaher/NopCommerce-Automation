import { faker } from "@faker-js/faker"
import wishlist from "./whishlist"

it('add to cart from wishlist',()=>{
    const list = new wishlist
    list.addToCart()
})
it('remove product card from wish list',()=>{
    const list = new wishlist
    list.removeProduct()
})
it('change product quantity',()=>{
    const list = new wishlist
    list.updateWishlist(4)
})
it.only('change product quantity',()=>{
    const e = faker.internet.email()
    const list = new wishlist
    list.emailToFriend(e)
})