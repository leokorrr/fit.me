import { FieldValues, UseFormRegister } from 'react-hook-form'
import { SelectOption } from '../../types'

export default interface ISelectField {
  options: SelectOption[] | undefined
  register: UseFormRegister<FieldValues>
  fieldName: string
}
