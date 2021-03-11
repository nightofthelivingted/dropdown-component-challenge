import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import titleCase from '../helpers/title-case'
import StyledSelect from '../styles/forms/select'
import Label from '../styles/forms/label'

export default class Select extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      options: [],
    }

    // convert option strings to title case, load into state
    props.options.forEach((option) => {
      const newOption = titleCase(option)

      this.state.options.push(newOption) // eslint-disable-line react/destructuring-assignment
    })
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
