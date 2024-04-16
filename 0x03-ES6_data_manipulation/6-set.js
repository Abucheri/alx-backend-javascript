export default function setFromArray(myArray) {
  if (!Array.isArray(myArray)) {
    throw new TypeError('Argument must be an array');
  }
 return new Set(myArray);
}
