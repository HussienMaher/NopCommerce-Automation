import addProduct from "../addProduct/addProduct"

class wishlist{
    get wishlist(){
        return cy.get('.ico-wishlist')
    }
    get removeButton(){
        return cy.get('.remove-btn')
    }
    get addToCartBox(){
        return cy.get('td [name="addtocart"]')
    }
    get quantity(){
        return cy.get('.qty-input')
    }
    get update(){
        return cy.get('#updatecart')
    }
    get Cart(){
        return cy.get('[name="addtocartbutton"]')
    }
    get email(){
        return cy.get('.email-a-friend-wishlist-button')
    }
    get friendEmail(){
        return cy.get('#FriendEmail')
    }
    get sendbutton(){
        return cy.get('.send-email-a-friend-button')
    }

    openWishlist(){
        this.wishlist.click()
        return this
    }
    addToCart(){
        const ad = new addProduct
        ad.addProduct1ToWishlist().addProduct2ToWishlist()
        this.openWishlist()
        this.addToCartBox.eq(0).check()
        this.addToCartBox.eq(1).check()
        this.Cart.click()
    }
    removeProduct(){
        const ad = new addProduct
        ad.addProduct1ToWishlist()
        this.openWishlist().removeButton.eq(0).click()
    }
    updateWishlist(a){
        const ad = new addProduct
        ad.addProduct1ToWishlist()
        this.openWishlist().quantity.clear().type(a)
        this.update.click()
    }
    emailToFriend(e){
        const ad = new addProduct
        ad.addProduct1ToWishlist()
        this.openWishlist().email.click()
        this.friendEmail.type(e)
        this.sendbutton.click()
    }
}
export default wishlist