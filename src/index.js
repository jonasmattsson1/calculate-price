import configData from './configData.js'
import { isToday } from './helpers.js'

/**
 * Calculates the product price based on userType, productType and publishedDate
 * 
 * @param {number} userType - Id of the userType
 * @param {number} productType - Id of the productType
 * @param {number} price - Product price
 * @param {Object} publishedDate - Date object
 */
export const calculatePrice = function(userType, productType, price=0, publishedDate){

    let calculatedPrice = 0

    // Get the right user config based on userType
    const userTypeConfig = configData.userTypes.find(user => user.id === userType) || {}
    // Get the right productType config based on productType
    const productTypeConfig = configData.productTypes.find(type => type.id === productType) || {}
    const todayRebate = (productTypeConfig.type === "new" && isToday(publishedDate)) ? configData.newRebate : 0
    const rebates = userTypeConfig.rebate + todayRebate || 0

    calculatedPrice = price
    calculatedPrice += productTypeConfig.additinalPrice
    calculatedPrice -= rebates

    return calculatedPrice
}

// Expose calculatePrice to the global scope
global.calculatePrice = calculatePrice
