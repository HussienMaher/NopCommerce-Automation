class check3{

    get credit(){
        return cy.get('#paymentmethod_1')
    }
    get continue(){
        return cy.get('.payment-method-next-step-button')
    }


    chooseCredit(){
        this.credit.check()
        return this
    }
    toPaymentInfo(){
        this.continue.click()
    }

}
export default check3