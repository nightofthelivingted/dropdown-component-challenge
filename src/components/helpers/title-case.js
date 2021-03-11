export default function titleCase(string) {
  let newString = string

  // split words, convert to lowercase
  newString = newString.toLowerCase().split(' ')

  // capitalize first letters
  for (let i = 0; i < newString.length; i += 1) {
    newString[i] = newString[i].charAt(0).toUpperCase() + newString[i].slice(1)
  }

  // join words and return
  return newString.join(' ')
}
