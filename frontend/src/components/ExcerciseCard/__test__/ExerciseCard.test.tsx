import React from 'react'
import { render, screen } from '@testing-library/react'
import { ExerciseCard } from '..'

const mockExerciseTitle = 'Dead Lift'

describe('ExerciseCard', () => {
  it('should render ExerciseCard', () => {
    render(<ExerciseCard exerciseTitle={mockExerciseTitle} />)
  })
  it('should render same text as in props', () => {
    render(<ExerciseCard exerciseTitle={mockExerciseTitle} />)
    const exerciseTitleEl = screen.getByText('Dead Lift')
    expect(exerciseTitleEl).toBeInTheDocument()
  })
})
