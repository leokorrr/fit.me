import React from 'react'
import { useForm } from 'react-hook-form'
import { InputField } from '../InputField'
import { SelectField } from '../SelectField'
import IForm from './Form.interface'
import { FormContainer } from './Form.style'

export const Form: React.FC<IForm> = ({ fields }) => {
  const {
    handleSubmit,
    register,
  } = useForm()
  const onSubmit = (data: any) => console.log(data)
  const renderFields = () => {
    if (fields && fields.length === 0) {
      // eslint-disable-next-line react/jsx-no-useless-fragment
      return <></>
    }
    const components = fields.map((field) => (field.type === 'input' ? (
      <InputField
        key={field.labelId}
        type={field.type}
        fieldName={field.fieldName}
        placeholder={field.placeholder}
        register={register}
        labelId={field.labelId}
      />
    )
      : (
        <SelectField
          key={field.labelId}
          options={field.options}
          register={register}
          fieldName={field.fieldName}
        />
      )))
    return components
  }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* eslint-disable react/jsx-props-no-spreading */}
        {renderFields()}
        <input type="submit" />
      </form>
    </FormContainer>
  )
}
