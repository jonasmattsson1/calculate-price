import configData from './configData.js'
import { isToday } from './helpers.js'

/**
 * 
 * @param {number} userType - Id of the userType
 * @param {*} productType - Id of the productType
 * @param {*} price - Product price
 * @param {*} publishedDate - Date object
 */
export const calculatePrice = function(userType=[], productType, price=0, publishedDate){

    let calculatedPrice = 0

    // Get the right user config based on userType
    const userTypeConfig = configData.userTypes.find(user => user.id === userType)
    // Get the right productType config based on productType
    const productTypeConfig = configData.productTypes.find( type => type.id === productType)
    const todayRebate = (productTypeConfig.type === "new" && isToday(publishedDate)) ? configData.newRebate : 0
    const rebates = userTypeConfig.rebate + todayRebate

    calculatedPrice = price
    calculatedPrice += productTypeConfig.additinalPrice
    calculatedPrice -= rebates

    return calculatedPrice
}

// Expose calculatePrice to the global scope
global.calculatePrice = calculatePrice
