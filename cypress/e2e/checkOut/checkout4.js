class check4{

    get cardtype(){
        return cy.get('#CreditCardType')
    }
    get holdername(){
        return cy.get('#CardholderName')
    }
    get cardnumber(){
        return cy.get('#CardNumber')
    }
    get exmonth(){
        return cy.get('#ExpireMonth')
    }
    get exyear(){
        return cy.get('#ExpireYear')
    }
    get cardcode(){
        return cy.get('#CardCode')
    }
    get continue(){
        return cy.get('.payment-info-next-step-button')
    }

    selectCardType(Type){
        this.cardtype.select(Type)
        return this
    }
    enterHolderName(Name){
        this.holdername.type(Name)
            return this
    }
    enterCardNumber(Number){
        this.cardnumber.type(Number)
        return this
    }
    selectExMonth(Month){
        this.exmonth.select(Month)
        return this
    }
    selectExYear(Year){
        this.exyear.select(Year)
        return this
    }
    enterCardCode(Code){
        this.cardcode.type(Code)
        return this
    }
    Continue(){
        this.continue.click()
    }

}
export default check4