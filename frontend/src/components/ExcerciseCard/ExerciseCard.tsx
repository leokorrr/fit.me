import React from 'react'
import IExerciseCard from './ExerciseCard.interface'
import { ExerciseCardContainer } from './ExerciseCard.style'

export const ExerciseCard: React.FC<IExerciseCard> = ({ exerciseTitle }) => {
  if (!exerciseTitle) {
    return null
  }

  return (
    <ExerciseCardContainer>
      <div className="exercise-card">
        {exerciseTitle}
      </div>
    </ExerciseCardContainer>
  )
}
