import { productFees, newRebate, userTypes } from './config.js'
import { isToday } from './helpers.js'


/**
 * Takes an feeConfig object and an productType id, and return the fee
 * 
 * @param {Object} feeConfig - Fee config object
 * @param {number} productTypeId - ProductType id
 * @return {number} - Fee amount
 */
const getProductFee = (feeConfig, productTypeId = 0) => {
    return feeConfig.find( fee => fee.id === productTypeId)
}

/**
 * Get the rebate of the day.
 * 
 * @param {Date} date - Date object
 * @param {number} rebate - 
 */
const getTodayRebate = (date, rebate) => {
    return isToday(date) ? rebate : 0;
}

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

