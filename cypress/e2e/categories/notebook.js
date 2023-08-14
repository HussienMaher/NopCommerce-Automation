import computers from "./computers"

class notebook{

    get SortBy(){
        return cy.get('#products-orderby')
    }
    get display(){
        return cy.get('#products-pagesize')
    }
    get dataPage2(){
        return cy.get('[data-page="2"]')
    }

    sortbyLowToHigh(){
        const comp = new computers
        comp.openNotbooks()
        this.SortBy.select(3)
        return this
    }
    displayFilter3(){
        const comp = new computers
        comp.openNotbooks()
        this.display.select(0)
        return this
    }
    displaySecondPage(){
        this.displayFilter3().dataPage2.eq(1).click()
        return this
    }
}
export default notebook