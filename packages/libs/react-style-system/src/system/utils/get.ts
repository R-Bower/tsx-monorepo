export const get = (obj: any, key, def?, undef?: undefined) => {
  key = key && key.split ? key.split(".") : [key]
  for (let p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef
  }
  return obj === undef ? def : obj
}
