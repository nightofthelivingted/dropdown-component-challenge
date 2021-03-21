import titleCase from './title-case'

export default function titleCaseKeys(object) {
  const cloneObject = { ...object }

  const key = Object.keys(cloneObject)[0]
  const capitalizedKey = titleCase(key)
  cloneObject[capitalizedKey] = cloneObject[key]
  delete cloneObject[key]

  return cloneObject
}
