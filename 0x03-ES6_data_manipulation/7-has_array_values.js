/**
 * Checks if all elements in an array exist within a Set.
 * @param {Set} set - The Set to check against.
 * @param {Array} array - The array containing elements to check.
 * @returns {boolean} - True if all elements exist in the Set, otherwise false.
 */
const hasValuesFromArray = (set, array) => array.every((value) => set.has(value));

export default hasValuesFromArray;
