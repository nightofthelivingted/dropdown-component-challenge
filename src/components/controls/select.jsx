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
  }

  componentDidMount() {
    const { options } = this.props
    const newOptions = []

    // convert option strings to title case, load into state
    options.forEach((option) => {
      let cloneOption = option
      cloneOption = titleCase(cloneOption)
      newOptions.push(cloneOption)
    })

    this.setState({ options: newOptions })
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
