import React from 'react'
import ICard from './Card.interface'
import { CardContainer } from './Card.style'
import { CardField } from './CardField'

export const Card: React.FC<ICard> = ({ fields, date }) => {
  if (fields.length === 0) {
    return null
  }

  return (
    <CardContainer>
      <div className="card">
        <div className="card__fields">
          {fields.map((field) => (
            <CardField
              key={field.label}
              label={field.label}
              value={field.value}
              unit={field.unit}
            />
          ))}
        </div>
        <div className="card__date">
          {date}
        </div>
      </div>
    </CardContainer>
  )
}
