/// <reference types="Cypress" />

import computers from "./computers"
import notebook from "./notebook"

it('open notebooks page',()=>{
    const comp = new computers
    comp.openNotbooks()
})
it('sort products from low to high',()=>{
    const note = new notebook
    note.sortbyLowToHigh()
})
it('display 3 products per page',()=>{
    const note = new notebook
    note.displayFilter3()
})
it('display notebooks second 3 products',()=>{
    const note = new notebook
    note.displaySecondPage()
})

