export type CardField = {
  label: string
  value: any,
  unit?: string
}

export type SelectOption = {
  label: string,
  value: string
}

export type ExerciseCardResults = {
  repetitions: string
  date: string
}

export type ExerciseCardProps = {
  _id: string
  name: string
  results: ExerciseCardResults[]
  defaultReps: number
}

export type MeasurementProps = {
  _id: string
  weight: number
  waist: number
  date: string
}

export type FormField = {
  fieldName: string
  placeholder: string,
  labelId: string,
  type: string
  options?: SelectOption[]
}
