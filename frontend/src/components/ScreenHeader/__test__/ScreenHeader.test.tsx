import React from 'react'
import { render, screen } from '@testing-library/react'
import { ScreenHeader } from '..'

const mockTitle = 'Title'

describe('ScreenHeader', () => {
  it('should render ScreenHeader', () => {
    render(<ScreenHeader title={mockTitle} />)
  })
  it('should render same text as in props', () => {
    render(<ScreenHeader title={mockTitle} />)
    const titleEl = screen.getByText('Title')
    expect(titleEl).toBeInTheDocument()
  })
})
