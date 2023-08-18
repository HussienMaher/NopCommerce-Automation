import compare from "./compare"

it('compare to products',()=>{
    const com = new compare
    com.compare2Products()
})
it('remove a product from compare list',()=>{
    const com = new compare
    com.compare2Products().removeItem()
})
it('clear compare list',()=>{
    const com = new compare
    com.compare2Products().clearList()
})