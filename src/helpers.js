/**
 * Checks if the passed date object match today
 * @param {Object} date 
 * @returns {boolean}
 */
export const isToday = (date) => {
    return new Date(date).setHours(0,0,0,0) === (new Date()).setHours(0,0,0,0)
}