/**
 * Add items to an object at a specific path.
 * @param obj           The object
 * @param pathSegments  The path to assign the value to
 * @param val           The value to assign
 */
export const deepInsert = (obj: any, pathSegments: string[], val: any) => {
  // Cache the path length and current spot in the object
  const length = pathSegments.length
  let current = obj

  // Loop through the path
  pathSegments.forEach((key, index) => {
    // If this is the last item in the loop, assign the value.
    if (index === length - 1) {
      current[key] = val
    } else {
      // Otherwise, update the current place in the object.
      // If the key doesn't exist, create it
      if (!current[key]) {
        current[key] = {}
      }

      // Update the current place in the objet
      current = current[key]
    }
  })

  return obj
}
