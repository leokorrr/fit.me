import React from 'react'
import { useParams } from 'react-router'
import { Card } from '../../components/Card'
import { ScreenHeader } from '../../components/ScreenHeader'
import useGetSingleDataFromAPI from '../../hooks/useGetSingleDataFromAPI'
import { PageContainer } from '../../styles/page'

const WorkoutPage = () => {
  // const navigate = useNavigate()
  const params: any = useParams()
  const [workout]: any = useGetSingleDataFromAPI('workouts', params.id)
  const getFields = (
    exerciseLabel: string,
    exerciseValue: string,
    weightLabel: string,
    weightValue: string,
  ) => [
    {
      label: exerciseLabel,
      value: exerciseValue,
    },
    {
      label: weightLabel,
      value: weightValue,
    },
  ]
  return (
    <PageContainer>
      <ScreenHeader title={workout.name} />
      {workout?.exercises?.map((exercise: any) => (
        <Card
          key={exercise.name}
          fields={getFields('Exercise', exercise.name, 'Weight', exercise.result)}
        />
      )) }
    </PageContainer>
  )
}

export default WorkoutPage
