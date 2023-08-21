import check4 from "./checkout4"

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
    checkout3(){
        this.chooseCredit().toPaymentInfo()
        return check4
    }

}
export default check3