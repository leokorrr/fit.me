import React from 'react'
import { render, screen } from '@testing-library/react'
import { Card } from '..'

const mockCardData = {
  fields: [
    { value: 'Value', label: 'Label' },
  ],
  date: '07.12.2021',
}

describe('Card', () => {
  it('should render Card', () => {
    render(<Card fields={mockCardData.fields} date={mockCardData.date} />)
  })
  it('should render same text as in props', () => {
    render(<Card fields={mockCardData.fields} date={mockCardData.date} />)
    const valueEl = screen.getByText('Value')
    const labelEl = screen.getByText('Label:')
    const dateEl = screen.getByText('07.12.2021')
    expect(valueEl).toBeInTheDocument()
    expect(labelEl).toBeInTheDocument()
    expect(dateEl).toBeInTheDocument()
  })
})
