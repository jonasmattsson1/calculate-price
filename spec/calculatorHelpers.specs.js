import { isToday, getTodayRebate, getProductObj } from '../src/calculatorHelpers.js'

// Global constants
const today = new Date()
const newDate = new Date()
const yesterday = newDate.setDate(newDate.getDate() - 1)


describe('isToday', ()=> {

    it('should return true if new Date() are passed', ()=> {
        expect(isToday(today)).to.equal(true)
    })

    it('should always return a boolean', ()=> {
        expect(isToday()).to.be.a('boolean')
        expect(isToday("Some date")).to.be.a('boolean')
        expect(isToday(1234)).to.be.a('boolean')
        expect(isToday(false)).to.be.a('boolean')
        expect(isToday({})).to.be.a('boolean')
    })

    it('should return false if no parameters are passed', ()=> {
        expect(isToday()).to.equal(false)
    })

    it('should return false yesterdays date is passed', ()=> {
        expect(isToday(yesterday)).to.equal(false)
    })
})


describe('getTodayRebate', ()=> {
    
    const rebate = 10

    it('should return the passed rebate parameter if the date is today', ()=> {
        const myrebate = getTodayRebate(today, rebate)
        expect(myrebate).to.equal(rebate)
    })

    it('should return 0 if it is not today', ()=> {
        const expected = 0
        const myrebate = getTodayRebate(yesterday, rebate)

        expect(myrebate).to.equal(expected)
    })

    it('should return 0 if no parameters are passed', ()=> {
        const myrebate = getTodayRebate()
        const expected = 0
        expect(myrebate).to.equal(expected)
    })
})



describe('getProductType', () => {

    const productTypes = [
        {
            id: 0,
            type: 'new',
            price: 25
        },
        {   
            id: 1,
            type: 'old',
            price: 35
        }
    ]

    it('should return the "new" product type', ()=> {
        const product = getProductObj(productTypes, 0)
        const expected = {
            id: 0,
            type: 'new',
            price: 25
        }

        expect(product).to.deep.equal(expected)
    })

    it('should return the "old" product type', ()=> {
        const product = getProductObj(productTypes, 1)
        const expected = {
            id: 1,
            type: 'old',
            price: 35
        }

        expect(product).to.deep.equal(expected)
    })
    
    it('should return an empty object if an invalid product type id is passed', ()=> {
        const product = getProductObj(productTypes, 3)
        const expected = {}

        expect(product).to.deep.equal(expected)
    })

    it('should return an empty object if an no parameters are passed', ()=> {
        const product = getProductObj()
        const expected = {}

        expect(product).to.deep.equal(expected)
    })
})