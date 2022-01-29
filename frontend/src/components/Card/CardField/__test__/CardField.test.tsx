import React from 'react'
import { render, screen } from '@testing-library/react'
import { CardField } from '..'

const mockLabel = 'Label'
const mockValue = 'Value'

describe('CardField', () => {
  it('should render CardField', () => {
    render(<CardField label={mockLabel} value={mockValue} />)
  })
  it('should render same text as in props', () => {
    render(<CardField label={mockLabel} value={mockValue} />)
    const valueEl = screen.getByText('Value')
    const labelEl = screen.getByText('Label:')
    expect(valueEl).toBeInTheDocument()
    expect(labelEl).toBeInTheDocument()
  })
})
