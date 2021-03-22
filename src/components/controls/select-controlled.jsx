import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import StyledSelect from '../styles/forms/select'
import Label from '../styles/forms/label'

const key = uuidv4()

const ControlledSelect = (props) => {
  const {
    label, placeholder, value, options, onChange, placeholderActive,
  } = props

  const currentValue = placeholderActive ? 'DEFAULT' : value

  return (
    <Label>
      {label}
      <StyledSelect
        key={key}
        value={currentValue}
        onChange={(event) => onChange(event)}
      >
        { placeholder && (<option key={uuidv4()} value="DEFAULT" disabled>-Select an option-</option>)}
        {options.map((option) => <option key={uuidv4()} value={option}>{option}</option>)}
      </StyledSelect>
    </Label>
  )
}

export default ControlledSelect
