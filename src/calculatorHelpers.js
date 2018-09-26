/**
 * Checks if the passed date object match today
 * @param {Object} date 
 * @returns {boolean}
 */
export const isToday = (date) => {
    return new Date(date).setHours(0,0,0,0) === (new Date()).setHours(0,0,0,0)
}


/**
 * Takes an feeConfig object and an productType id, and return the fee
 * 
 * @param {Array} productTypes - ProductTypes array
 * @param {number} productTypeId - ProductType id
 * @return {number} - Fee amount
 */
 export const getProductObj = (productTypes = [], productTypeId = 0) => {
    return productTypes.find( product => product.id === productTypeId) || {}
}


/**
 * Get the rebate of the day.
 * 
 * @param {Date} date - Date object
 * @param {number} rebate - 
 */
export const getTodayRebate = (date, rebate) => {
    return isToday(date) ? rebate : 0;
}