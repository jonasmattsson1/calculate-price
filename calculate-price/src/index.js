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
    const {userTypes, productTypes, newRebate} = {...configData}
    let calculatedPrice = 0

    // Get the right user config based on userType
    const userTypeConfig = userTypes.find(user => user.id === userType)
    // Get the right productType config based on productType
    const productTypeConfig = productTypes.find(type => type.id === productType)

    // Return undefined if userType or productType is invalid
    if(!userTypeConfig || !productTypeConfig){
        return
    }

    const todayRebate = (productTypeConfig.type === "new" && isToday(publishedDate)) ? newRebate : 0
    const rebates = userTypeConfig.rebate + todayRebate

    calculatedPrice = price + productTypeConfig.additionalPrice
    calculatedPrice -= rebates

    return calculatedPrice
}

// Expose calculatePrice to the global scope
global.calculatePrice = calculatePrice
