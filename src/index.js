import configData from './config.js'
import { getProductObj, getTodayRebate } from './calculatorHelpers.js'

/**
 * 
 * @param {number} userType - Id of the userType
 * @param {*} productType - Id of the productType
 * @param {*} price - Product price
 * @param {*} publishedDate - Date object
 */
export const calculatePrice = function(userType, productType, price=0, publishedDate){

    let calculatedPrice = 0

    configData.userTypes.map( user => {
        const { id, rebate = 0 } = { ...user }

        // Only handle right userType
        if(id !== userType){ return }

        const productObject = getProductObj(configData.productTypes, productType)
        const todayRebate = productObject.type === "new" ? getTodayRebate(publishedDate, configData.newRebate) : 0
        const rebates = rebate + todayRebate

        calculatedPrice = price;
        calculatedPrice += productObject.price ? productObject.price : 0;
        calculatedPrice -= rebates
    })

    return calculatedPrice
}

// Expose calculatePrice to the global scope
global.calculatePrice = calculatePrice
