import titleCase from './title-case'

export default function titleCaseArray(array) {
  const newArray = []

  array.forEach((item) => {
    const newItem = titleCase(item)
    newArray.push(newItem)
  })

  return newArray
}
