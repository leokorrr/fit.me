import React from 'react'
import ISelectField from './SelectField.interface'
import { SelectFieldContainer } from './SelectField.style'

export const SelectField: React.FC<ISelectField> = ({ options, register, fieldName }) => (
  <SelectFieldContainer>
    {/* eslint-disable react/jsx-props-no-spreading */}
    <select data-testid="select-field" className="select-field" {...register(fieldName)}>
      {options && options.length > 0 && options.map((option) => (
        <option
          key={option.label}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  </SelectFieldContainer>
)
