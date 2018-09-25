import { productFees, newRebate, userTypes } from './config.js'
import { getProductFee, getTodayRebate } from './helpers.js'


/**
 * 
 * @param {number} userType - Id of the userType
 * @param {*} productType - Id of the productType
 * @param {*} price - Product price
 * @param {*} publishedDate - Date object
 */
const calculatePrice = function(userType, productType, price, publishedDate){
    let calculatedPrice = 0

    userTypes.map( user => {
        const { id, rebate = 0 } = { ...user }

        // Only handle right userType
        if(id !== userType){ return }

        const productFee = getProductFee(productFees, productType)
        const todayRebate = productFee.name === "new" ? getTodayRebate(publishedDate, newRebate) : 0
        const rebates = rebate + todayRebate;

        calculatedPrice = price + productFee.amount - rebates; 
    })

    return calculatedPrice
}

// Expose calculatePrice to the global scope
window.calculatePrice = calculatePrice;

