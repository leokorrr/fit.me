import { FieldValues, UseFormRegister } from 'react-hook-form'
import { FormField } from '../../types'

export default interface IInputField extends FormField {
  register: UseFormRegister<FieldValues>
}
