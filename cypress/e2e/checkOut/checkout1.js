import check2 from "./checkout2"

class check1{
   
    get country(){
        return cy.get('#BillingNewAddress_CountryId')
    }
    get state(){
        return cy.get('#BillingNewAddress_StateProvinceId')
    }
    get city(){
        return cy.get('#BillingNewAddress_City')
    }
    get address1(){
        return cy.get('#BillingNewAddress_Address1')
    }
    get zip(){
        return cy.get('#BillingNewAddress_ZipPostalCode')
    }
    get phone(){
        return cy.get('#BillingNewAddress_PhoneNumber')
    }
    get continue(){
        return cy.get('.new-address-next-step-button')
    }
    get savedInfo(){
        return cy.get('.new-address-next-step-button').eq(0)
    }

    //methods
    
    selectCountry(Country){
        this.country.select(Country)
        return this
    }
    selectState(State){
        this.state.select(State)
        return this
    }
    enterCity(city){
        this.city.type(city)
        return this
    }
    enterAddress1(Address){
        this.address1.type(Address)
        return this
    }
    enterZip(Zip){
        this.zip.type(Zip)
        return this
    }
    enterPohne(Phone){
        this.phone.type(Phone)
        return this
    }
    Continue(){
        this.continue.click()
        return check2
    }
    confirmAddress(){
        this.savedInfo.click()
        return check2
    }


}
export default check1