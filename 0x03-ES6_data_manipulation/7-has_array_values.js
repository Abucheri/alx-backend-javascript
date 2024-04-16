export default function hasValuesFromArray(set, array) {
  if (!Set.prototype.isPrototypeOf(set) || !Array.isArray(array)) {
    throw new TypeError('Arguments must be Set and Array');
  }
  return array.every((element) => set.has(element));
}
