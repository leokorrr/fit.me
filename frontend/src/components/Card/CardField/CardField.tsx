import React from 'react'
import ICardField from './CardField.interface'
import { CardFieldContainer } from './CardField.style'

export const CardField: React.FC<ICardField> = ({ label, value, unit }) => {
  if (!value) {
    return null
  }

  return (
    <CardFieldContainer>
      <div className="card-field">
        {label && (
          <span className="card-field__label">
            { label }
            :
          </span>
        )}
        <span className="card-field__value">
          { value }
          { unit && unit }
        </span>
      </div>
    </CardFieldContainer>
  )
}
