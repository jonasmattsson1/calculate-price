import { isToday } from '../src/helpers.js'

// Global constants
const today = new Date()
const oldDate = new Date('2019-01-01')

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

    it('should return false if an old date is passed', ()=> {
        expect(isToday(oldDate)).to.equal(false)
    })
})