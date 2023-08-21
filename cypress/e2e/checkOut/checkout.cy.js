import shopping from "../shoppingCart/shoppingCart"
import check1 from "./checkout1"
import check2 from "./checkout2"
import check3 from "./checkout3"
import check4 from "./checkout4"
import check5 from "./checkout5"

it('complete checkout first step',()=>{
    const chechout = new check1
    chechout.checkout1('Egypt','Other','Cairo','Cairo',48651,25412455)
})
it('complete checkout second step',()=>{
    const chechout = new check1
    const chechout2 = new check2
    chechout.checkout1('Egypt','Other','Cairo','Cairo',48651,25412455)
    chechout2.checkout2()
})
it('complete checkout third step',()=>{
    const chechout  = new check1
    const chechout2 = new check2
    const chechout3 = new check3
    chechout.checkout1('Egypt','Other','Cairo','Cairo',48651,25412455)
    chechout2.checkout2()
    chechout3.checkout3()
})
it('complete checkout fourth step',()=>{
    const chechout  = new check1
    const chechout2 = new check2
    const chechout3 = new check3
    const chechout4 = new check4
    const chechout5 = new check5
    chechout.checkout1('Egypt','Other','Cairo','Cairo',48651,25412455)
    chechout2.checkout2()
    chechout3.checkout3()
    chechout4.checkout4()
    chechout5.confirmOreder()
})
