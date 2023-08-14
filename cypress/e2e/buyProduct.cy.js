/// <reference types="Cypress" />

import check2 from "./checkout2"
import check3 from "./checkout3"
import check1 from "./checkout1"
import homepage from "./homepage"
import login from "./log"
import prodcut from "./product"
import shopping from "./shoppingCart"
import check4 from "./checkout4"
import {faker} from '@faker-js/faker';
import check5 from "./checkout5"
import assertions from "./assertions"


it("open porduct Page",()=>{
    const home = new homepage
    const prod = new prodcut
    const shop = new shopping
    const log = new login
    home.homepage().openLogin()
    log.enterEmail("tomsmith@teml.net")
    .enterpassword("123456")
    .rememberMe()
    .clickLogin()
    home.homepage().addProduct()
    prod.addToCart()
})
it("check out the order",()=>{
    const home = new homepage
    const prod = new prodcut
    const shop = new shopping
    const log = new login
    home.homepage().openLogin()
    log.enterEmail("tomsmith@teml.net")
    .enterpassword("123456")
    .rememberMe()
    .clickLogin()
    home.homepage().addProduct()
    prod.addToCart().goToCart()
    shop.agreeOnTerms().checkOut()
})
it("complete purchase",()=>{
    const home = new homepage
    const prod = new prodcut
    const shop = new shopping
    const log = new login
    const chek1 =new check1
    home.homepage().openLogin()
    log.enterEmail("tomsmith@teml.net").enterpassword("123456").rememberMe().clickLogin()
    home.homepage().addProduct()
    prod.addToCart().goToCart()
    shop.agreeOnTerms().checkOut()
    chek1.selectCountry('Egypt').selectState('Other').enterCity('Cairo').enterAddress1('3nd elbaet')
    .enterZip(516541).enterPohne(51684332548)
    .Continue()
})
it("complete purchase",()=>{
    const home = new homepage
    const prod = new prodcut
    const shop = new shopping
    const log = new login
    const step1 = new check1
    const step2 = new check2
    const step3 = new check3
    const step4 = new check4
    const step5 = new check5
    const assert = new assertions
    const cardNumber = faker.finance.creditCardNumber('visa')
    const Code = faker.finance.creditCardCVV()
    home.homepage().openLogin()
    log.enterEmail("tomsmith@teml.net").enterpassword("123456").rememberMe().clickLogin()
    home.addProduct()
    prod.addToCart()
    assert.assertProduct()
    prod.goToCart()
    shop.agreeOnTerms()
    assert.productName()
    assert.productQuantity()
    assert.productPrice()
    assert.productTotal()
    assert.cartTotal()
    shop.checkOut()
    assert.sameAddress()
    step1.confirmAddress()
    step2.choosedelevry().toPayment()
    step3.chooseCredit().toPaymentInfo()
    step4.selectCardType('Visa').enterHolderName('tom smith').enterCardNumber(cardNumber)
    step4.selectExMonth('5').selectExYear('2028').enterCardCode(Code).Continue()
    step5.confirmOreder()
    assert.purchaseDone()
})
it.only("complete purchase",()=>{
    const home = new homepage
    const prod = new prodcut
    const shop = new shopping
    const log = new login
    const step1 = new check1
    const step2 = new check2
    const step3 = new check3
    const step4 = new check4
    const step5 = new check5
    const assert = new assertions
    const cardNumber = faker.finance.creditCardNumber('visa')
    const Code = faker.finance.creditCardCVV()
    home.homepage().openLogin()
    log.enterEmail("tomsmith@teml.net").enterpassword("123456").rememberMe().clickLogin()
    home.addProduct()
    prod.addToCart()
    assert.assertProduct()
    prod.goToCart()
    shop.agreeOnTerms()
    assert.productName().productQuantity().productPrice().productTotal().cartTotal()
    shop.checkOut()
    assert.sameAddress()
    step1.selectCountry('Egypt').selectState('Other').enterCity('Cairo').enterAddress1('3nd elbaet')
    step1.enterZip(516541).enterPohne(51684332548).Continue()
    step2.choosedelevry().toPayment()
    step3.chooseCredit().toPaymentInfo()
    step4.selectCardType('Visa').enterHolderName('tom smith').enterCardNumber(cardNumber)
    step4.selectExMonth('5').selectExYear('2028').enterCardCode(Code).Continue()
    step5.confirmOreder()
    assert.purchaseDone()
})
