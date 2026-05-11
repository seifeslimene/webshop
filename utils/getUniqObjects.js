export const getUniqueObjects = (array, property) => {
  // Create a Set to store unique property values
  const uniqueSet = new Set()
  // Use filter to keep only the objects with unique property values
  return array.filter(obj => {
    // Get the property value of the current object
    const value = obj[property]
    // Check if this property value is already in the Set
    // If not, add it to the Set and return true to keep the object
    if (!uniqueSet.has(value)) {
      uniqueSet.add(value)
      return true
    }
    // If the property value is already in the Set, return false to discard the object
    return false
  })
}
