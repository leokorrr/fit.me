import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { InputField } from '..'

const mockPlaceholder = 'Placeholder'
describe('InputField', () => {
  it('should render InputField', () => {
    render(<InputField onInput={() => {}} placeholder={mockPlaceholder} />)
  })
  it('should be able to type', () => {
    render(<InputField onInput={() => {}} placeholder={mockPlaceholder} />)
    const inputEl: any = screen.getByPlaceholderText('Placeholder')
    fireEvent.click(inputEl)
    fireEvent.change(inputEl, { target: { value: 'Input value' } })
    expect(inputEl.value).toBe('Input value')
  })
})
