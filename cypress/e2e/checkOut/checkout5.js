class check5{

    get continue(){
        return cy.get('[onclick="ConfirmOrder.save()"]')
    }

    confirmOreder(){
        this.continue.click()
    }


}
export default check5