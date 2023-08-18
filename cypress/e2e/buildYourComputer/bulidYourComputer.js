import computers from "../categories/computers"
import homepage from "../homePage/homepage"

class build{
    get processor(){
        return cy.get('#product_attribute_1')
     }
     get ram(){
         return cy.get('#product_attribute_2')
     }
     get HDD400(){
         return cy.get('#product_attribute_3_7')
     }
     get HDD320(){
        return cy.get('#product_attribute_3_6')
     }
     get osPremium(){
         return cy.get('#product_attribute_4_9')
     }
     get office(){
         return cy.get('#product_attribute_5_10')
     }
     get reader(){
         return cy.get('#product_attribute_5_11')
     }
     get totalCommander(){
         return cy.get('#product_attribute_5_12')
     }
     get quantity(){
         return cy.get('#product_enteredQuantity_1')
     }
     get addToCart(){
         return cy.get('#add-to-cart-button-1')
     }
     get addToWishlist(){
         return cy.get('#add-to-wishlist-button-1')
     }
    //  get addToCompare(){
    //      return cy.get('.add-to-compare-list-button')
    //  }
    //  get EmailToFriend(){
    //      return cy.get('.email-a-friend-button')
    //  }
     //Methods
     selectprocessor(){
         this.processor.select(1)
         return this
     }
     selectRam(){
         this.ram.select(1)
         return this
     }
     selectHDD400(){
         this.HDD400.check()
         return this
     }
     selectHDD320(){
        this.HDD320.check()
        return this
     }
     selectOS(){
         this.osPremium.check()
         return this
     }
     selectOffice(){
         this.office.check()
         return this
     }
     selectReader(){
         this.reader.check()
         return this
     }
     selectTotalCommander(){
         this.totalCommander.check()
         return this
     }
     enterQuantity(){
         this.quantity.type(1)
         return this
     }
     addToCart(){
         this.addToCart.click()
     }
     addToWishlist(){
         this.addToWishlist.click()
     }
    //  addToCompare(){
    //      this..click()
    //  }
     addProductToCart(){
         const custom = new computers
         custom.openbuild()
         this.selectRam().selectHDD400().addProductToCart()
     }
     addProductToWishlist(B,A,Q){
         const home = new homepage
         home.openProductPage()
         this.selectprocessor(B).selectRam(A).selectHDD400().selectOS().selectReader().selectTotalCommander().enterQuantity(Q).addProductToCart()
     }
     addProductToCompare(B,A,Q){
         const home = new homepage
         home.openProductPage()
         this.selectprocessor(B).selectRam(A).selectHDD320().selectOS().selectReader().selectTotalCommander().enterQuantity(Q).addProductToCart()
     }
}
export default build