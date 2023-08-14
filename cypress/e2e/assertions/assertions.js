class assertions{  

    get login(){
        return cy.get('h1')
    }
    get product(){
        return cy.get('h1')
    }
    get Productamount(){
        return cy.get('#product_enteredQuantity_4')
    }
    get productname(){
        return cy.get('.product-name')
    }
    get productquantity(){
        return cy.get('.qty-input')
    }
    get productprice(){
        return cy.get('.product-unit-price')
    }
    get producttotal(){
        return cy.get('.product-subtotal')
    }
    get carttotal(){
        return cy.get('.cart-total-right')
    }
    get sameaddress(){
        return cy.get('#ShipToSameAddress')
    }
    get purchasedone(){
        return cy.get('.title')
    }


    assertLogin(){
        this.login.should('contain','Sign In')
        return this
    }
    assertProduct(){
        this.product.should('contain','Apple MacBook Pro 13-inch')
        return this
    }
    assertAmount(){
        this.Productamount.should('have.value',2)
        return this
    }
    productName(){
        this.productname.should('contain','Apple MacBook Pro 13-inch')
        return this
    }
    productQuantity(){
        this.productquantity.should('have.value', 2)
        return this
    }
    productPrice(){
        this.productprice.should('contain','$1,800.00')
        return this
    }
    productTotal(){
        this.producttotal.should('contain','$3,600.00')
        return this
    }
    cartTotal(){
        this.carttotal.should('contain','$3,600.00')
        return this
    }
    sameAddress(){
        this.sameaddress.should('be.checked')
        return this
    }
    purchaseDone(){
        this.purchasedone.should('contain','Your order has been successfully processed!')
        return this
    }
}
export default assertions