import titleCase from './title-case'

export default function titleCaseArray(array) {
  if (!Array.isArray(array)) {
    console.error('Argument must be array')
    return null
  }

  const newArray = []

  array.forEach((item) => {
    const newItem = titleCase(item)
    newArray.push(newItem)
  })

  return newArray
}
