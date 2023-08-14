import homepage from "../homePage/homepage"
import notebook from "./notebook"

class computers{
    get notBooks(){
        return cy.get('[alt="Picture for category Notebooks"]')
    }

    openNotbooks(){
        const home =new homepage
        home.openComputers()
        this.notBooks.click()
        return notebook
    }

}
export default computers