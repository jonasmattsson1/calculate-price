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