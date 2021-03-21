import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import titleCaseKeys from '../helpers/title-case-keys'
import titleCaseArray from '../helpers/title-case-array'
import StyledSelect from '../styles/forms/select'
import Label from '../styles/forms/label'

export default class SelectGroup extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      options: [],
    }
  }

  componentDidMount() {
    // init options array
    const { options } = this.props
    const newOptions = []

    // convert option strings to title case, load into state
    options.forEach((option) => {
      // capitalize key
      const cloneOption = titleCaseKeys(option)
      const key = Object.keys(cloneOption)[0]

      // capitalize values
      cloneOption[key] = titleCaseArray(cloneOption[key])

      // add to newOptions
      newOptions.push(cloneOption)
    })

    this.setState({ options: newOptions })
  }

  // convert options into select optGroup options
  createOptGroup = (options) => {
    const optionsArray = []

    options.forEach((optionGroup) => {
      const optGroupLabel = Object.keys(optionGroup)[0]
      const groupOptions = []

      optionGroup[optGroupLabel].forEach((option) => {
        groupOptions.push(<option key={uuidv4()} value={option}>{option}</option>)
      })

      optionsArray.push(
        <optgroup label={optGroupLabel} key={uuidv4()}>
          {groupOptions}
        </optgroup>,
      )
    })

    return optionsArray
  }

  render() {
    const { label, placeholder } = this.props
    const { options } = this.state
    const key = uuidv4()

    return (
      <Label>
        {label}
        <StyledSelect key={key} defaultValue={placeholder ? 'DEFAULT' : ''}>
          { placeholder && (<option key={uuidv4()} value="DEFAULT" disabled>-Select an option-</option>)}
          {this.createOptGroup(options)}
        </StyledSelect>
      </Label>
    )
  }
}
