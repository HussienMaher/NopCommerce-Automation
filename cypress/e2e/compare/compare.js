import addProduct from "../addProduct/addProduct"

class compare {
    get comparePage(){
        return cy.get('[href="/compareproducts"]')
    }
    get remove(){
        return cy.get('.remove-button')
    }
    get clear(){
        return cy.get('.clear-list')
    }

    openCompareList(){
        const ad = new addProduct
        this.comparePage.eq(0).click()
        return this
    }
    compare2Products(){
            const ad = new addProduct
            ad.addProduct1ToCompareList().addProduct2ToCompareList()
            this.openCompareList()
        return this
    }
    removeItem(){
        this.remove.eq(0).click()
        return this
    }
    clearList(){
        this.clear.click()
    }

}
export default compare