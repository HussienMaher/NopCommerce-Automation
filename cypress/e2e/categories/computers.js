import homepage from "../homePage/homepage"
import notebook from "./notebook"

class computers{
    get notBooks(){
        return cy.get('[alt="Picture for category Notebooks"]')
    }
    get desktops(){
        return cy.get('[href="/desktops"]').eq(3)
    }
    get build(){
        return cy.get('[href="/build-your-own-computer"]').eq(1)
    }

    openNotbooks(){
        const home =new homepage
        home.openComputers()
        this.notBooks.click()
        return notebook
    }
    openbuild(){
        const home =new homepage
        home.openComputers()
        this.desktops.click()
        this.build.click()
    }
}
export default computers