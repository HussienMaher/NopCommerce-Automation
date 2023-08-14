class check2{

    get nextday(){
        return cy.get('#shippingoption_1')
    }
    get topayment(){
        return cy.get('.shipping-method-next-step-button')
    }
//methods
    choosedelevry(){
        this.nextday.check()
        return this
    }
    toPayment(){
        this.topayment.click()
    }

}
export default check2