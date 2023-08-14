/// <reference types="Cypress" />
import register from "./reg"
import {faker} from '@faker-js/faker';

it("register with valid data",()=>{
    const reg = new register
    const email = faker.internet.email()
    const pass = faker.internet.password()
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    reg.registration(email,pass,firstName,lastName)
})

it("register with one character as firstname",()=>{
    const reg = new register
    const email = faker.internet.email()
    const pass = faker.internet.password()
    const firstName = 'a'
    const lastName = faker.person.lastName()
    reg.registration(email,pass,firstName,lastName)
})

it("register with very long lastname",()=>{
    const reg = new register
    const email = faker.internet.email()
    const pass = faker.internet.password()
    const firstName = faker.person.firstName()
    const lastName = 'tdfysagudjfklssdghfkjslkdg;ldafhsjldkg;ldfhgvjklktdfyguhijkdfgthjkrdtfghjklsdffffffffffsdsd'
    reg.registration(email,pass,firstName,lastName)
})

it.only("register with empty firstname",()=>{
    const reg = new register
    const email = faker.internet.email()
    const pass = faker.internet.password()
    const lastName = faker.person.lastName()
    reg.registration(email,pass,' ',lastName)
})

it("register with invalid email",()=>{
    const reg = new register
    const email = 'tomsmith@dfvfs'
    const pass = faker.internet.password()
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    reg.registration(email,pass,firstName,lastName)
})

it("register with less than 6 digits password",()=>{
    const reg = new register
    const email = faker.internet.email()
    const pass = '12345'
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    reg.registration(email,pass,firstName,lastName)
})