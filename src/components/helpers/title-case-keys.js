import titleCase from './title-case'

export default function titleCaseKeys(object) {
  const cloneObject = { ...object }
  const cloneObjectLength = Object.keys(cloneObject).length

  for (let i = 0; i < cloneObjectLength; i += 1) {
    const key = Object.keys(cloneObject)[i]

    const capitalizedKey = titleCase(key)
    cloneObject[capitalizedKey] = cloneObject[key]

    delete cloneObject[key]
  }

  return cloneObject
}
