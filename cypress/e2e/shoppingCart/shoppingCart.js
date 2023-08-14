class shopping{
get terms(){
    return cy.get('#termsofservice')
}
get chechout(){
    return cy.get('#checkout')
}

//methods
agreeOnTerms(){
    this.terms.check()
    return this
}
checkOut(){
    this.chechout.click()
}

}
export default shopping