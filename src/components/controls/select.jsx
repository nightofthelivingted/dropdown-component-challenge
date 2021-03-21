import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import titleCaseArray from '../helpers/title-case-array'
import StyledSelect from '../styles/forms/select'
import Label from '../styles/forms/label'

export default class Select extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      options: [],
    }

    // init options array
    const { options } = this.props
    const newOptions = titleCaseArray(options)

    this.state.options = newOptions
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
          {options.map((option) => <option key={uuidv4()} value={option}>{option}</option>)}
        </StyledSelect>
      </Label>
    )
  }
}
