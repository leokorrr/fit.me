import React from 'react'
import IInputField from './InputField.interface'
import { InputFieldContainer } from './InputField.style'

export const InputField: React.FC<IInputField> = ({
  fieldName, placeholder, labelId, register,
}) => (
  <InputFieldContainer>
    <label htmlFor={labelId} className="input-field">
      {/* eslint-disable react/jsx-props-no-spreading */}
      <input
        id={labelId}
        className="input-field__input"
        {...register(fieldName)}
        placeholder={placeholder}
      />
    </label>
  </InputFieldContainer>
)
