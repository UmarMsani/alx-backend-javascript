/**
 * Updates the values of a Map for items with an initial quantity of 1.
 * @param {Map} items - The Map to update.
 * @returns {Map} - The updated Map.
 * @throws {Error} - If the input is not a Map.
 */
const updateUniqueItems = (items) => {
  // Check if the input is a Map
  if (!(items instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through each entry in the Map
  for (const [itemKey, itemQuantity] of items.entries()) {
    // Update the quantity to 100 for items with an initial quantity of 1
    if (itemQuantity === 1) {
      items.set(itemKey, 100);
    }
  }

  // Return the updated Map
  return items;
};

export default updateUniqueItems;
