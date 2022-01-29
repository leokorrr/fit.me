import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SelectField } from '..'

const mockOptions = [
  {
    value: 'Value1',
    label: 'Label1',
  },
  {
    value: 'Value2',
    label: 'Label2',
  },
]

describe('SelectField', () => {
  it('should render SelectField', () => {
    render(<SelectField onSelect={() => {}} options={mockOptions} />)
  })
  it('should be able to type', () => {
    render(<SelectField onSelect={() => {}} options={mockOptions} />)
    const selectEl: any = screen.getByTestId('select-field')
    userEvent.selectOptions(selectEl, 'Label1')
    expect((screen.getByText('Label1') as HTMLOptionElement).selected).toBeTruthy()
    expect((screen.getByText('Label2') as HTMLOptionElement).selected).toBeFalsy()
  })
})
